import { Card } from "antd";
import React, { useState } from "react";
import CalculateMoney from "../CalculateMoney";
import DeliveryAdrress from "../DeliveryAddress";
import PaymentMethod from "../PaymentMethod";
import { doTransactions } from "../../../service/transactions";

import "./RightContent.scss";
import { pushNotification } from "../../../common/notification";
import { NOTIFICATION_TYPE } from "../../../const/notification";

const RightContent: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState(0);

  const handlePayment = () => {
    const data = {
      customer_id: 2,
      order_id: 3,
      money: amount,
      payment_method: paymentMethod,
    };
    console.log(data);

    if (paymentMethod !== "" && amount > 0) {
      if (paymentMethod !== "shipcod") {
        doTransactions(data)
        .then((val) => {
            window.open(val.data.data.url);
        });
      }
      else{
        console.log(paymentMethod);
          pushNotification(
            "Thất bại",
            "Hiện tại chức năng thanh toán shipCOD đang bảo trì, mời bạn chọn phương thức khác",
            NOTIFICATION_TYPE.ERROR
          );
      }
    } else {
        pushNotification(
            "Thất bại",
            "Yêu cầu chọn phương thức thanh toán",
            NOTIFICATION_TYPE.ERROR
          );
    }
  };

  return (
    <React.Fragment>
      <Card className="card mt-5">
        <DeliveryAdrress />
      </Card>
      <Card className="card mt-3">
        <div className="sale__container">
          <div className="block-header">
            <div className="block-header__title">Khuyến Mãi</div>
            <div className="block-header__usage">
              <span>Có thể chọn 2</span>
            </div>
          </div>
        </div>
        <div
          data-view-id="platform_coupon.cart_coupon_view.all"
          className="show-more"
        >
          <span>Chọn hoặc nhập Khuyến mãi khác</span>
        </div>
      </Card>
      <Card className="card mt-3">
        <header className="title">
          <h3 className="section__title" style={{ marginBottom: 16 }}>
            Phương thức thanh toán
          </h3>
        </header>
        <PaymentMethod method={paymentMethod} setMethod={setPaymentMethod} />
      </Card>
      <Card className="card mt-3">
        <CalculateMoney action={handlePayment} setAmount={setAmount} />
      </Card>
    </React.Fragment>
  );
};

export default RightContent;
