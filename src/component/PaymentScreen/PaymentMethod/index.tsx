import { Radio, RadioChangeEvent, Space } from "antd";
import React, { useState } from "react";

import "./PaymentMethod.scss";
import { PayMethodType } from "../../../type/PaymentMethod";
import { list_pay_method } from "../../../data/list_payment_method";

interface Props {
  method: string;
  setMethod: (value: string) => void
}

const PaymentMethod: React.FC<Props> = ({ method, setMethod }) => {
  const [value, setValue] = useState();

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    switch (e.target.value) {
      case 1:
        method = "shipcod";
        break;
      case 2:
        method = "vnpay";
        break;
      case 3:
        method = "atm";
        break;
    }
    setMethod(method);
    console.log(method);
    
  };

  return (
    <React.Fragment>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {list_pay_method.map((item) => (
            <Radio value={item.id} className="radio">
              <div className="method-item">
                <img
                  className="method-icon"
                  src={item.icon_url}
                  width="32"
                  height="32"
                  alt="icon"
                />
                <div className="method-content">
                  <div className="method-content__title">
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </React.Fragment>
  );
};

export default PaymentMethod;
