import { Avatar, Card, Divider, List, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import DeliveryForm from '../DeliveryForm'
import OrderDetail from '../OrderDetail'

import './PaymentContent.scss'

const PaymentContent:React.FC = () => {
    return (
        <React.Fragment>
            <Card className="card mt-5">
                <header className='title'>
                    <h5>THÔNG TIN ĐƠN HÀNG</h5>
                </header>
                <Divider className="divider"/>
                <OrderDetail/>
            </Card>
            <Card className="card mt-3">
                <header className='title'>
                    <h5>THANH TOÁN VÀ GIAO HÀNG</h5>
                </header>
                <Divider className="divider"/>
                <DeliveryForm/>
            </Card>
        </React.Fragment>
    )
}

export default PaymentContent