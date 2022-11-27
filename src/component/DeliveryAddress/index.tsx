import { Space, Tag } from 'antd'
import React from 'react'
import  "./DeliveryAddress.scss"

const DeliveryAdrress = () => {
  return (
    <React.Fragment>
        <div className="container"> 
            <div className="section__container">
                <div className="block-header">
                    <h5 className="block-header__title">Giao tới</h5>
                    <a className="block-header__nav" href="#">Thay đổi</a>
                </div>
                <div className="customer_info">
                    <Space size="large">
                        <p className="customer_info__name">Nguyễn Văn A</p>
                        <p> | </p>
                        <p className="customer_info__phone">0948377xxx</p>
                    </Space>
                </div>
                <div className="address">
                    <Tag color="cyan" className="tag">Nhà riêng</Tag>
                    Số 1 Đại Cồ Việt, Quận Hai Bà Trưng, Hà Nội
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default DeliveryAdrress