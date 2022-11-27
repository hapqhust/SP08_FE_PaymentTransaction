import { Avatar, Card, Divider, List, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import CalculateMoney from '../CalculateMoney'
import DeliveryAdrress from '../DeliveryAddress'
import DeliveryForm from '../DeliveryForm'
import OrderDetail from '../OrderDetail'
import PaymentMethod from '../PaymentMethod'

import './RightContent.scss'

const RightContent:React.FC = () => {
    return (
        <React.Fragment>
            <Card className="card mt-5">
                <DeliveryAdrress/>
            </Card>
            <Card className="card mt-3">
                <div className="sale__container">
                    <div className="block-header">
                        <div className="block-header__title">Khuyến Mãi</div>
                        <div className="block-header__usage"><span>Có thể chọn 2</span></div>
                    </div>    
                </div>
                <div data-view-id="platform_coupon.cart_coupon_view.all" className="show-more">
                    <span>Chọn hoặc nhập Khuyến mãi khác</span>
                </div>
            </Card>
            <Card className="card mt-3">
                <header className='title'>
                    <h3 className="section__title" style={{marginBottom:16}}>Phương thức thanh toán</h3>
                </header>
                <PaymentMethod/>
            </Card>
            <Card className="card mt-3">
                <CalculateMoney/>
            </Card>
        </React.Fragment>
    )
}

export default RightContent