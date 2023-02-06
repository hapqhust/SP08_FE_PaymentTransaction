import React from "react";
import { Button, Result } from "antd";
import "./PaymentResult.scss"

const PaymentResult: React.FC = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto mt-5">
        <div className="payment">
          <div className="payment_header">
            <div className="check">
              <i className="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
          <div className="content">
            <h1>Payment Success !</h1>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.{" "}
            </p>
            <a href="#">Go to Home</a>
          </div>
        </div>
      </div>
    </div>

    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  </div>
);

export default PaymentResult;
