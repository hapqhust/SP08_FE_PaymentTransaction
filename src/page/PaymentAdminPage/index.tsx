import { Col, Menu, Row } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import PageApi from '../../component/PageApi'

const PaymentAdminPage:React.FC = () => {
  return (
    <div>
        <Header className="header">
            <Row justify="start">
                <Col span={4}><div className="logo" /></Col>
                <Col span={4}><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} /></Col>
            </Row>
        </Header>
        <Content>
            <Row className="mt-5" justify="center">
                <PageApi></PageApi>
            </Row>
            <Row justify="center">
                <Col span={14}>
                    {/* <LeftContent/> */}
                </Col>
                <Col span={6}>
                    {/* <RightContent/> */}
                </Col>
            </Row>
        </Content>
        <Footer className="container-fluid footer"> 
            <p className='text-white'> Design ©2022 Created by Team 08</p>
        </Footer>
    </div>
  )
}

export default PaymentAdminPage