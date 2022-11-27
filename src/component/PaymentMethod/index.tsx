import { Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react'

import "./PaymentMethod.scss"

interface PayMethodType {
    id: number,
    icon_url: string,
    title: string;
}

const list_pay_method: PayMethodType[] = [
    {
        id: 1,
        icon_url: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg",
        title: "Thanh toán tiền mặt khi nhận hàng",
    },
    {
        id: 2,
        icon_url: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg",
        title: "Thanh toán bằng ví MoMo",
    },
    {
        id: 3,
        icon_url: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg",
        title: "Thẻ ATM nội địa/ Internet banking",
    },
]


const PaymentMethod:React.FC = () => {
    const [value, setValue] = useState();

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <React.Fragment>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    {list_pay_method.map(item => 
                        <Radio value={item.id} className="radio">
                            <div className="method-item">
                                <img className="method-icon" src={item.icon_url} width="32" height="32" alt="icon"/>
                                <div className="method-content">
                                    <div className="method-content__title">
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        </Radio>
                    )}
                </Space>
            </Radio.Group>
        </React.Fragment>
    )
}

export default PaymentMethod