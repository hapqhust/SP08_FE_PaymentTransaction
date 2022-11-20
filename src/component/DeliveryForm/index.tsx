import { Button, Col, Form, Input, InputNumber, Radio, RadioChangeEvent, Row, Select } from 'antd';
import React, { useState } from 'react'

import './DeliveryForm.scss'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} là bắt buộc',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
};


const message = [{
    id: 1,
    content: 
    <div className='well'>
        <p>Phương thức: Giao hàng thanh toán tại nhà của bạn</p>
        <p>Chúng tôi sẽ liên hệ bạn trong 24 giờ kể từ khi bạn đặt hàng để xác nhận đơn hàng</p>
        <p className='deliform-note'> <strong>Lưu ý:</strong> nếu bạn không nhận được bất kỳ cuộc gọi nào trong 24 giờ, hãy chủ động gọi chúng tôi 0355377xxx</p>   
    </div>
},
{
    id: 2,
    content:
    <div>
        <p>Chúng tôi sẽ liên hệ bạn trong 24 giờ kể từ khi bạn đặt hàng để xác nhận đơn hàng</p>
        <p>Số tài khoản sẽ xuất hiện sau khi bạn bấm đặt hàng</p>
        <p className='deliform-note'> <strong>Lưu ý:</strong> nếu bạn không nhận được bất kỳ cuộc gọi nào trong 24 giờ, hãy chủ động gọi chúng tôi 0355377xxx</p>   
    </div>
},
{
    id: 3,
    content:
    <div>
        <p>Nhấn vào đặt hàng và bạn sẽ được dẫn đến trang web MOMO.VN để thực hiện thanh toán</p>
    </div>
},

];

const DeliveryForm:React.FC = () => {
    const [form] = Form.useForm();
    const [value, setValue] = useState();
    const [content, setContent] = useState<JSX.Element>();

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        switch (e.target.value){
            case 1:
            case 2:
            case 3:
                const element = message.find(x => x.id === e.target.value)
                setContent(element ? element.content : <div></div>);
                break;
        }

    };

    const onFinish = (values: any) => {
        console.log(values);
    };

  return (
    <Form 
        name="nest-messages" 
        form={form}
        labelAlign='left'
        onFinish={onFinish} 
        layout='vertical'
        validateMessages={validateMessages}
    >
    <Row>
        <Col span={12}>
            <Form.Item name={['order', 'name']} label="Họ và tên" wrapperCol={{span: 20 }} rules={[{ required: true }]}>
                <Input/>
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item name={['order', 'email']} label="Địa chỉ email" wrapperCol={{span: 20 }} rules={[{ type: 'email', required: true}]}>
                <Input/>
            </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col span={12}>
            <Form.Item name={['order', 'phone']} label="Số điện thoại" wrapperCol={{span: 20 }} rules={[{ required: true}]}>
                <Input/>
            </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item name={['order', 'province']} label="Thành phố" wrapperCol={{span: 20 }} rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="place1">Hà Nội</Select.Option>
                    <Select.Option value="place1">Hồ Chí Minh</Select.Option>
                    <Select.Option value="place1">Đà Nẵng</Select.Option>
                </Select>
            </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col span={22}>
            <Form.Item name={['order', 'address']} label="Địa chỉ giao hàng" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col span={22}>
            <Form.Item name={['order', 'instruction']} label="Ghi chú đơn hàng (Tùy chọn)">
                <Input.TextArea />
            </Form.Item>
        </Col>
    </Row>
        <Form.Item name={['order', 'purchase']} label="Phương thức thanh toán"  rules={[{ required: true }]}>
            <Radio.Group onChange={onChange} value={value}>
    <Row justify="space-between"> 
                <Col span={8}><Radio value={1}>Thanh toán khi nhận hàng(COD)</Radio></Col>
                <Col span={8}><Radio value={2}>Chuyển khoản ngân hàng</Radio></Col>
                <Col span={8}><Radio value={3}>Thanh toán qua ví MoMo</Radio></Col>
    </Row>
            </Radio.Group>
        </Form.Item>
    {content}
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default DeliveryForm;