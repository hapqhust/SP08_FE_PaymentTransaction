import { Card, Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./style.scss";
import {
  statistic_by_method,
  statistic_by_month,
  statistic_pay_and_return,
} from "../../../data/statistic";
import {
  getStatistic,
  getStatisticByMonth,
  getStatisticByPayAndRefund,
} from "../../../service/dashboard";
const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface PieDataset {
  name: string;
  count: number;
}

const Dashboard: React.FC = () => {
  const [dataPie, setDataPie] = useState();
  const [dataComposedChart, setDataComposedChart] = useState();
  const [dataByMonth, setDataByMonth] = useState();

  useEffect(() => {
    getStatistic().then((val) => {
      setDataPie(val.data.data.method);
    });

    getStatisticByPayAndRefund()
      .then((val) => {
        console.log(val.data.data.results);
        return val.data.data.results;
      })
      .then((val) => {
        const data = val.map((element: any) => {
          return {
            ...element,
            profit: element.pay - element.refund,
          };
        });
        setDataComposedChart(data);
      });

    getStatisticByMonth().then((val) => {
      setDataByMonth(val.data.data);
    });
  }, []);

  const convert_pie = (dataset: any) => {
    if (dataset !== undefined) {
      const key = Object.keys(dataset);
      const value = Object.values(dataset);

      const data = key.map((element, index) => {
        return {
          name: element.toUpperCase(),
          count: value[index],
        };
      });
      return data;
    } else {
      return [];
    }
  };

  return (
    <React.Fragment>
      <div className="dashboard-page">
        <Card className="card mt-3">
          <header className="title">
            <h3 className="section__title">
              Biều đồ doanh thu, tiền hoàn và lợi nhuận theo ngày
            </h3>
          </header>
          <Row>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                width={500}
                height={300}
                data={dataComposedChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pay" fill="#28a745" />
                <Bar dataKey="refund" fill="#17a2b8" />
                <Line type="monotone" dataKey="profit" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </Row>
        </Card>
        <Row>
          <Col span={15}>
            <Card className="card mt-3">
              <header className="title">
                <h3 className="section__title2">
                  Biều đồ số giao dịch thành công/thất bại/đang xử lý theo tháng
                </h3>
              </header>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataByMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="successful" fill="#28a745" />
                  <Bar dataKey="failed" fill="#dc3545" />
                  <Bar dataKey="pending" fill="#9e9fa0" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col span={9}>
            <Card className="card mt-3">
              <header className="title">
                <h3 className="section__title2">
                  Biều đồ tỉ lệ các phương thức thanh toán
                </h3>
              </header>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    // align="right"
                    height={36}
                    // margin={{ right: 0}}
                  />
                  <Pie
                    data={convert_pie(dataPie)}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    // innerRadius={20}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                    labelLine={false}
                    legendType="diamond"
                    // onMouseEnter={handleMouseEnter}
                  >
                    {convert_pie(dataPie).map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
