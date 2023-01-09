import { Col, Divider, Row } from 'antd'
import { cart as data } from '../../../data/cart';
import React from 'react'

import "./CalculateMoney.scss"
import { doTransactions } from '../../../service/transactions';

interface DataType {
    id: number,
	name: string,
	image: string,
	price: number,
	quantity: number,
	type?: string,
    loading ?: boolean;
}

const CalculateMoney:React.FC = () => {

    const getTotal = () => {
        var sum = 0;
        data.forEach((item) => {
          if (item.quantity)
            sum += item.quantity * item.price;
        });
        return sum;
    }

    const numberWithCommas = (x:number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handlePayment = () => {
        const data = {
            customer_id: 1,
            order_id: 2,
            money: 15000,
            payment_method: "vnpay"
        }
        doTransactions(data)
            .then((val) =>{
                console.log(val.data.url);
                
            });
        
    }

    return (
        <div>
            <div className="block-header">
                <div className="bSkntM" style={{marginBottom: "4px"}}>
                    <p className="block-header__title">TÓM TẮT ĐƠN HÀNG</p>
                    <a className="block-header__nav" href="/checkout/cart?src=checkout_payment">Thay đổi</a>
                </div>
                <div className="block-header__sub-title">
                    <p className="sub-title-text">{`${data.length} sản phẩm.`}</p>
                    {/* <p className="sub-title-link">Xem thông tin
                        <svg className="sub-title-link__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z" fill="#0B74E5"></path>
                        </svg>
                    </p> */}
                </div>
            </div>

            <div className="summary-body">
                <Row justify='space-between'>
                    <Col className="summary-label">Tạm tính</Col>
                    <Col className="summary-value">{`${numberWithCommas(Math.round(getTotal()))} ₫`}</Col>
                </Row>
                <Row justify='space-between'>
                    <Col className="summary-label">Phí vận chuyển</Col>
                    <Col className="summary-value">{`${numberWithCommas(getTotal() === 0 ? 0: 35000)} ₫`}</Col>
                </Row>
                <Row justify='space-between'>
                    <Col className="summary-label">Giảm giá vận chuyển</Col>
                    <Col className="summary-value text-success">{`-${numberWithCommas(14000)} ₫`}</Col>
                </Row>
                <Row justify='space-between'>
                    <Col className="summary-label">VAT</Col>
                    <Col className="summary-value">{`${numberWithCommas(Math.round(getTotal()*0.1))} ₫`}</Col>
                </Row>
            </div>
            <Divider className="divider"/>

            <Row className="order-total">
                <Col className="order-total__label">Tổng tiền</Col>
                <Col className="order-total__value">
                    <div className="order-total__total">{`${numberWithCommas(Math.round(getTotal()*1.1 + (getTotal() === 0 ? 0: 35000)))} ₫`}</div>
                    <div className="order-total__additional-text">(Đã bao gồm VAT nếu có)</div>
                </Col>
            </Row>
            <button type="button" className="btn btn-payment" onClick={handlePayment}>Thanh toán</button>
        </div>
  )
}

export default CalculateMoney