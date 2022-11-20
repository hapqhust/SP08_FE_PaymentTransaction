import { Col, Layout, Menu, MenuProps, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import CalculateMoney from '../../component/CalculateMoney';
import PaymentContent from '../../component/PaymentContent';

import "./PaymentPage.scss";

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
    key,
    label: `Title ${key}`,
  }));

const PaymentPage:React.FC = () => {
  return (
    <div>
        <Header className="header">
            <Row justify="start">
                <Col span={4}><div className="logo" /></Col>
                <Col span={4}><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /></Col>
            </Row>
        </Header>
        <Content>
            <Row justify="start">
                <Col span={16}>
                    <PaymentContent/>
                </Col>
                <Col span={8}>
                    <CalculateMoney/>
                </Col>
            </Row>
        </Content>
        <Footer className="container-fluid footer"> 
            <p className='text-white'> Design ©2022 Created by Team 08</p>
        </Footer>
    </div>
  )
}

export default PaymentPage;