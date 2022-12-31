import { Col, Divider, Row } from 'antd'
import React from 'react'

import "./CalculateMoney.scss"

interface DataType {
    id: number,
	name: string,
	image: string,
	price: number,
	quantity: number,
	type?: string,
    loading ?: boolean;
}

const data: DataType[] = [
    {
        id: 1,
        name: "Sticker Dán Nút Home Dành Cho iPhone Và iPad",
        image: "https://lzd-img-global.slatic.net/g/p/c4fadc64233c869f9f62fb7cfefed15f.jpg_1200x1200q80.jpg",
        price: 6000,
        quantity: 2,
        type: "Phụ kiện điện tử",
        loading: false, 
    },
    {
        id: 2,
        name: "Loa Bluetooth Mini S10 Có Led",
        image: "https://lzd-img-global.slatic.net/g/p/9433651af8ce0723e507ecad3ec8685d.jpg_720x720q80.jpg",
        price: 35000,
        quantity: 1,
        type: "Thiết bị điện tử",
        loading: false, 
    },
    {
        id: 3,
        name: "Đồ bộ nam thun cotton co giãn thoáng mát",
        image: "https://thoitrangteenthienphuc.vn/upload/sanpham/set-do-bo-nam-chat-thun-cotton-co-gian-thoang-mat-thoi-trang-1-9941.jpg",
        price: 100000,
        quantity: 2,
        type: "Thời trang nam",
        loading: false,
    },
    {
        id: 4,
        name: "Đồ bộ nam hè màu đen",
        image: "https://cf.shopee.vn/file/4ab2ee7f909aac31e87a560f41908d11",
        price: 35000,
        quantity: 1,
        type: "Thời Trang Nam",
        loading: false,
    },
    {
        id: 5,
        name: "Áo polo sweater unisex by ZONEF OFFICIAL",
        image: "https://cf.shopee.vn/file/6a41de95fba8e89d519f785cc74adb0f",
        price: 150000,
        quantity: 1,
        type: "Thời Trang Nam",
        loading: false,
    },
    {
        id: 6,
        name: "Váy Nữ Buộc Cổ Khóa Lưng Dáng Ngắn Ngang Đùi",
        image: "https://cf.shopee.vn/file/360b4be695501be29659f3cdc35d63da",
        price: 130000,
        quantity: 1,
        type: "Thời Trang Nữ",
        loading: false,
    },
    {
        id: 7,
        name: "Áo Polo Sweater FKZ Unisex",
        image: "https://cf.shopee.vn/file/sg-11134201-22100-64jbs230egivb5",
        price: 230000,
        quantity: 3,
        type: "Thời Trang Nữ",
        loading: false,
    },
    {
        id: 8,
        name: "Quạt Tản Nhiệt - Fan Led RGB",
        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/400/875/products/823c0077ce62623dbe18bf323688a1b9.jpg?v=1622970625937",
        price: 230000,
        quantity: 2,
        type: "Máy Tính & Laptop",
        loading: false,
    },
    {
        id: 9,
        name: "Bút trình chiếu Slide VSON",
        image: "https://cf.shopee.vn/file/4413f261bb877a6a20726871e5ba46be",
        price: 189000,
        quantity: 4,
        type: "Máy Tính & Laptop",
        loading: false,
    },
    {
        id: 10,
        name: " Camera ngoài trời Yoosee 5.0 MPX 15 led",
        image: "https://cf.shopee.vn/file/e88819d8b487e13d4e8b10511edc1800",
        price: 489000,
        quantity: 1,
        type: "Camera",
        loading: false,
    }];

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
            <button type="button" className="btn btn-payment">Thanh toán</button>
        </div>
  )
}

export default CalculateMoney