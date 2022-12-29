import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Col, DatePicker, Form, Input, Modal, Popconfirm, Row, Space, Table} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import {ColumnsType} from 'antd/es/table';
import "./style.css"

import { Transaction } from "../../type/Transaction";
import { list_transaction } from "../../data/list_tran";

const HistoryTransaction = () => {
    const columns: ColumnsType<Transaction> = [
        {
            title: 'Mã giao dịch',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => (
                <div className="tran_id">
                    <Space size="middle">
                        <p>{record.id}</p>
                    </Space>
                </div>
            ),
        },
        {
            title: 'Số tiền giao dịch',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, record) => (
                <div className="tran-amount">
                    <Space size="middle">
                        <p>{record.amount}</p>
                    </Space>
                </div>
            ),
        },
        {
            title: 'Thời điểm giao dịch',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text, record) => (
                <p>{record.createdAt}</p>
                // <p>{record.createdAt ? moment(record.createdAt).format('DD-MM-YYYY-HH:mm:SS') : ''}</p>
            )
        },
        {
            title: 'Nội dung giao dịch',
            dataIndex: 'content',
            key: 'content',
            render: (text, record) => (
                <p>{record.content}</p>
                // <p>{record.createdAt ? moment(record.createdAt).format('DD-MM-YYYY-HH:mm:SS') : ''}</p>
            )
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

    // useEffect(() => {
    //     getApis(pagin)
    //         .then((val) => {
    //             setDataSource(val.data.data.result.apis);
    //             setTotal(val.data.data.pagination.total);
    //         })
    // }, []);


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

    const handleSubmitForm = (value:any) => {
        const data = {...pagin, ...value}
        console.log("handle submit");
        
        // getApis(data)
        //     .then((val) => {
        //         setDataSource(val.data.data.result.apis);
        //         setTotal(val.data.data.pagination.total);
        //     });

    }


    const changePageSize = (current:number, pageSize: number) => {
        // const newCurrent = Math.min(Math.ceil(total/pageSize), current);
        // setPagin({
        //     page: newCurrent,
        //     pageSize: pageSize,
        //     isPaging: true,                                                                                                                                                                                                                                                                                                                                                                      
        // });
        // UpdatePagin(newCurrent, pageSize);
    }

    const UpdatePagin = (current:number, pageSize:number) => {
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
    }
    return (
        <>
            <div className="history-transaction-page">
                <Row justify="space-between">   
                    <Col>
                        <div className="history-transaction-page__header">
                            <p className="history-transaction-page__header-content">LỊCH SỬ GIAO DỊCH</p>
                        </div>
                    </Col>
                </Row>

                <div className="history-transaction-page__filter">
                    <p className="history-transaction-page__filter-content">Bộ lọc</p>
                    <Form
                        className="history-transaction-page__list-filter"
                        colon={false}
                        form={form}
                        onFinish={handleSubmitForm}
                    >
                        <Row>
                            <Space size="large">
                                <Col>
                                    <Form.Item label="API" name="name" className="form-item">
                                        <Input placeholder="VD: API predict"/>
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label="Ngày tạo" name="createdAt" className="form-item">
                                        <DatePicker placeholder="Chọn ngày"/>
                                    </Form.Item>
                                </Col>
                                <Col>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="history-transaction-page__button">
                                        <Row justify="space-between">
                                            <Col>
                                                <SearchOutlined style={{margin: "auto 0px", fontSize: "1rem"}}/>
                                            </Col>
                                            <Col>
                                                <p style={{margin: "auto 10px"}}>Tìm kiếm</p>
                                            </Col>
                                        </Row>
                                    </Button>
                                </Form.Item>
                            </Col>
                            </Space>
                        </Row>
                    </Form>
                </div>
                
                <div className="history-transaction-page__list-apis">
                    <Table dataSource={dataSource} columns={columns}
                            pagination={{
                                total: total,
                                defaultCurrent:pagin.page,
                                pageSize:pagin.pageSize,
                                onChange: UpdatePagin,
                                showSizeChanger: true,
                                onShowSizeChange: changePageSize,
                            }}
                    />
                     <div className="history-transaction-page__bonus-footer">
                        <p>{`Hiển thị từ ${totalDetail.begin}-${totalDetail.end} trên tổng số ${total}`}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryTransaction;