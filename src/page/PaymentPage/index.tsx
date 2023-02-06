import React from 'react';
import { Col, Menu, MenuProps, Row, Steps } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

import LeftContent from '../../component/PaymentScreen/LeftContent';
import RightContent from '../../component/PaymentScreen/RightContent';

import "./PaymentPage.scss";

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
    key,
    label: `Title ${key}`,
  }));

// Trang thanh toans
const PaymentPage:React.FC = () => {
  return (
    <div>
        <Header className="header">
            <Row justify="start">
                <Col span={4}><img src="https://www.boipa.co.uk/wp-content/uploads/Payment-Gateway-Logo.png" className="logo"/></Col>
            </Row>
        </Header>
        <Content>
            <Row className="mt-5" justify="center"><Col span={15}>
                <Steps
                    current={1}
                    items={[
                    {
                        title: 'Giỏ hàng',
                        description: "Xem giỏ hàng",
                    },
                    {
                        title: 'Thanh toán',
                        description: "Đặt hàng và thanh toán",
                        // subTitle: 'Left 00:00:08',
                    },
                    {
                        title: 'Hoàn thành đơn hàng',
                        description: "Thanh toán thành công",
                    },
                    ]}
                /></Col>
            </Row>
            <Row justify="center">
                <Col span={14}>
                    <LeftContent/>
                </Col>
                <Col span={6}>
                    <RightContent/>
                </Col>
            </Row>
        </Content>
        <Footer className="container-fluid footer"> 
            <p className='text-secondary'> Design ©2022 Created by Team 08</p>
        </Footer>
    </div>
  )
}

export default PaymentPage;