import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Space,
  Table,
  Tag,
} from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import "./style.scss";

import { Transaction } from "../../../type/Transaction";
import { list_transaction } from "../../../data/list_tran";
import { getListTransaction } from "../../../service/dashboard";
import moment from "moment";


const HistoryTransaction = () => {
  const columns: ColumnsType<Transaction> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <div className="tran_id">
          <Space size="middle">
            <p>{record.id}</p>
          </Space>
        </div>
      ),
    },
    {
      title: "Mã thanh toán",
      dataIndex: "payment_code",
      key: "payment_code",
      render: (text, record) => (
        <div className="tran_payment_code">
          <Space size="middle">
            <p>{record.payment_code}</p>
          </Space>
        </div>
      ),
    },
    {
      title: "Số tiền giao dịch",
      dataIndex: "money",
      key: "money",
      render: (text, record) => {
        if(record.status === "successful"){

          if (record.type === "pay")
          return(
            <Space size="middle">
                <p style = {{color: "#28a745", fontWeight: 700}}>{`+ ${record.money}`}</p>
              </Space>);
          else
          return(
            <Space size="middle">
              <p style = {{color: "#dc3545", fontWeight: 700}}>{`- ${record.money}`}</p>
            </Space>
          );
        }
        else{
          return(
            <Space size="middle">
                <p style = {{color: "#9e9fa0", fontWeight: 700}}>{`+ 0`}</p>
              </Space>);
        }
      },
    },
    {
      title: "Hình thức thanh toán",
      dataIndex: "method",
      key: "method",
      render: (text, record) => (
        <div className="tran-method">
          <Space size="middle">
            <p>{record.method.toUpperCase()}</p>
          </Space>
        </div>
      ),
    },
    {
      title: "Trạng thái giao dịch",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        record.status === "successful" ?
            <Tag icon={<CheckCircleOutlined />} color="success">
              {record.status}
            </Tag>
          : record.status === "failed" ?
            <Tag icon={<CloseCircleOutlined />} color="error">
              {record.status}
            </Tag>
          :
            <Tag icon={<ClockCircleOutlined />} color="default">
                pending
            </Tag>
        ),
    },
    {
      title: "Thời điểm giao dịch",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, record) => (
        <p>{record.created_at ? moment(record.created_at).format('DD-MM-YYYY-HH:mm:SS') : ''}</p>
      ),
    },
    
    // {
    //     title: '',
    //     dataIndex: 'action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <Space size="large">
    //             <Link to={`/apis/${record._id}`}>
    //                 <div className="history-transaction-page__action history-transaction-page__action--edit">
    //                     <Row justify="start" gutter={4}>
    //                         <Col>
    //                             <EyeFilled style={{fontSize: "1.1rem"}}/>
    //                         </Col>
    //                     </Row>
    //                 </div>
    //             </Link>
    //                 <div className="history-transaction-page__action history-transaction-page__action--delete" onClick={() => showConfirmDelete(record._id)}>
    //                     <Row justify="start" gutter={4}>
    //                         <Col>
    //                             <DeleteFilled style={{fontSize: "1.1rem"}}/>
    //                         </Col>
    //                     </Row>
    //                 </div>
    //         </Space>
    //     ),
    // },
  ];

  const [dataSource, setDataSource] = useState(list_transaction);

  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalDetail, setTotalDetail] = useState({
    begin: 1,
    end: 10,
  });

  const [pagin, setPagin] = useState({
    page: 1,
    pageSize: 10,
    isPaging: true,
  });

  useEffect(() => {
      getListTransaction({})
          .then((val) => {
            setDataSource(val.data.data.data);
            setTotal(val.data.data.total);
            // console.log(val.data.data.data);
            
          })
  }, []);

  // const handleOK = () => {
  //     setTimeout(() => {
  //         setVisible(false);
  //         window.location.reload();
  //     }, 3000);
  // }

  // const handleCancel = () => {
  //     setVisible(false);
  // }

  const [form] = Form.useForm();

  const handleSubmitForm = (value: any) => {
    const data = {
      ...value,
      created_at: value.created_at.format('YYYY-MM-DD')
    };
    console.log(data);

    getListTransaction(data)
        .then((val) => {
          console.log(val.data.data.data);
          
          setDataSource(val.data.data.data);
          setTotal(val.data.data.total);
        });
  };

  const changePageSize = (current: number, pageSize: number) => {
    // const newCurrent = Math.min(Math.ceil(total/pageSize), current);
    // setPagin({
    //     page: newCurrent,
    //     pageSize: pageSize,
    //     isPaging: true,
    // });
    // UpdatePagin(newCurrent, pageSize);
  };

  const UpdatePagin = (current: number, pageSize: number) => {
    // const pagingData = {
    //     page: current,
    //     pageSize: pageSize,
    //     isPaging: true,
    // }
    // getApis(pagingData)
    //     .then((val) => {
    //         setDataSource(val.data.data.result.apis);
    //         setTotal(val.data.data.pagination.total);
    //     });
    // setTotalDetail({
    //     begin: (current-1)*pageSize + 1,
    //     end: Math.min(current*pageSize, total)}
    // );
  };
  return (
    <>
      <div className="history-transaction-page">
        <Row justify="space-between">
          <Col>
            <div className="history-transaction-page__header">
              <p className="history-transaction-page__header-content">
                LỊCH SỬ GIAO DỊCH
              </p>
            </div>
          </Col>
        </Row>

        <Card className="card mt-3">
          <div className="history-transaction-page__filter">
            <p className="history-transaction-page__filter-content">Bộ lọc</p>
            <Form
              className="history-transaction-page__list-filter"
              colon={false}
              form={form}
              onFinish={handleSubmitForm}
            >
              <Row>
                <Space size="middle">
                  <Col>
                    <Form.Item label="Mã thanh toán" name="payment_code" className="form-item">
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Trạng thái" name="status" className="form-item">
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Phương thức" name="method" className="form-item">
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      label="Ngày tạo"
                      name="created_at"
                      className="form-item"
                    >
                      <DatePicker placeholder="" />
                    </Form.Item>
                  </Col>
                </Space>
              </Row>
              <Row justify="end">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="history-transaction-page__button"
                  >
                    <Row justify="space-between">
                      <Col>
                        <SearchOutlined
                          style={{ margin: "auto 0px", fontSize: "1rem" }}
                        />
                      </Col>
                      <Col>
                        <p style={{ margin: "auto 10px" }}>Tìm kiếm</p>
                      </Col>
                    </Row>
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </div>
          <div className="history-transaction-page__list-apis">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{
                total: total,
                defaultCurrent: pagin.page,
                pageSize: pagin.pageSize,
                onChange: UpdatePagin,
                showSizeChanger: true,
                onShowSizeChange: changePageSize,
              }}
            />
            <div className="history-transaction-page__bonus-footer">
              <p>{`Hiển thị từ ${totalDetail.begin}-${totalDetail.end} trên tổng số ${total}`}</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HistoryTransaction;
