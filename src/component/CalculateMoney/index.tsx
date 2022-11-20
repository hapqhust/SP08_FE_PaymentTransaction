import { Card, Col, Divider, Row } from 'antd'
import React from 'react'

interface DataType {
    id: number,
	name: String,
	image: String,
	price: number,
	quantity: number,
	type?: String,
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

const CalculateMoney = () => {

    const getTotal = () => {
        var sum = 0;
        data.forEach((item) => {
          if (item.quantity)
            sum += item.quantity * item.price;
        });
        return sum;
    }
    return (
        <div>
            <Card className="card mt-5 mr-auto">
                <header className='title'>
                    <h5>TÓM TẮT HÓA ĐƠN</h5>
                </header>
                <Row justify='space-between'>
                    <Col><p>Tổng phụ</p></Col>
                    <Col><p>{`${Math.round(getTotal())} VND`}</p></Col>
                </Row>
                <Row justify='space-between'>
                    <Col><p>Giảm giá</p></Col>
                    <Col><p>{`${0} VND`}</p></Col>
                </Row>
                <Row justify='space-between'>
                    <Col><p>Phí vận chuyển</p></Col>
                    <Col><p>{`${getTotal() === 0 ? 0: 35000} VND`}</p></Col>
                </Row>
                <Row justify='space-between'>
                    <Col><p>VAT</p></Col>
                    <Col><p>{`${Math.round(getTotal()*0.1)} VND`}</p></Col>
                </Row>
                <Divider className="divider"/>
                <Row justify='center'>
                    <h3 style={{color:"#f53737", fontWeight:"700", textAlign:"center", fontSize:"1.2rem"}}>TỔNG TIỀN THANH TOÁN</h3>       
                </Row>
                <Row justify='center'>
                <h3>{`${
                    Math.round(getTotal()*1.1 + (getTotal() === 0 ? 0: 35000))
                    } VND`}</h3>       
                </Row>
            </Card>
        </div>
  )
}

export default CalculateMoney