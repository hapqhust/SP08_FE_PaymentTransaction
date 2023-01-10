import { Col, Menu, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import Dashboard from "../../component/AdminPayment/Dashboard";
import HistoryTransaction from "../../component/AdminPayment/HistoryTransaction";

const PaymentAdminPage: React.FC = () => {
  return (
    <div>
      <Header className="header">
        <Row justify="start">
          <Col span={4}>
            <div className="logo" />
          </Col>
          <Col span={4}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
          </Col>
        </Row>
      </Header>
      <Content>
        <Row className="mt-5" justify="center">
          <Col span={18}>
            <HistoryTransaction />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={18}>{<Dashboard/>}</Col>
        </Row>
      </Content>
      <Footer className="container-fluid footer">
        <p className="text-white"> Design ©2022 Created by Team 08</p>
      </Footer>
    </div>
  );
};

export default PaymentAdminPage;
