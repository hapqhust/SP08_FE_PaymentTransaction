import { Card, Col, Row } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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

const data = [
  {
    name: "30/12/2022",
    "doanh thu": 40000,
    "khoản chi": 9400,
    "lợi nhuận": 40000 - 9400,
  },
  {
    name: "31/12/2022",
    "doanh thu": 34300,
    "khoản chi": 11398,
    "lợi nhuận": 34300 - 11398,
  },
  {
    name: "01/01/2022",
    "doanh thu": 20050,
    "khoản chi": 9800,
    "lợi nhuận": 20050 - 9800,
  },
  {
    name: "02/01/2022",
    "doanh thu": 31780,
    "khoản chi": 7908,
    "lợi nhuận": 31780 - 7908,
  },
  {
    name: "03/01/2022",
    "doanh thu": 58905,
    "khoản chi": 14800,
    "lợi nhuận": 58905 - 14800,
  },
  {
    name: "04/01/2022",
    "doanh thu": 50000,
    "khoản chi": 15000,
    "lợi nhuận": 50000 - 15000,
  },
  {
    name: "05/01/2022",
    "doanh thu": 58905,
    "khoản chi": 7000,
    "lợi nhuận": 58905 - 7000,
  },
];

const data01 = [
  {
    name: "Ví MoMo",
    value: 800,
  },
  {
    name: "Ship COD",
    value: 300,
  },
  {
    name: "Ví VNPay",
    value: 350,
  },
];
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

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <div className="dashboard-page">
        <Card className="card mt-3">
          <header className="title">
            <h3 className="section__title">
              Biều đồ doanh thu và chi tiêu theo ngày
            </h3>
          </header>
          <Row>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="doanh thu" fill="#82ca9d" />
                <Bar dataKey="khoản chi" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Row>
        </Card>
        <Row>
          <Col span={15}>
            <Card className="card mt-3">
              <header className="title">
                <h3 className="section__title2">Biều đồ lợi nhuận theo ngày</h3>
              </header>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="lợi nhuận" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col span={9}>
            <Card className="card mt-3">
              <header className="title">
                <h3 className="section__title2">
                  Biều đồ tỉ lệ sử dụng các phương thức thanh toán
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
                    data={data01}
                    dataKey="value"
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
                    {data.map((entry, index) => (
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
