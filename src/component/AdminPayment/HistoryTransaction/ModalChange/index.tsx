import { Button, Checkbox, Col, Form, Input, Row, Space } from "antd";
import React from "react";
import { pushNotification } from "../../../../common/notification";
import { NOTIFICATION_TYPE } from "../../../../const/notification";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const ModalChange = (props: any) => {
  const { handleOK } = props;

  const handleSubmitForm = (value: any) => {
    console.log(value);
    pushNotification("Thành công", "Bạn vừa thay đổi phương thức thanh toán", NOTIFICATION_TYPE.SUCCESS);
    handleOK()
  };

  const [formAddUser] = Form.useForm();
  return (
    <Form
      className="api-page__list-filter"
      {...formItemLayout}
      colon={false}
      form={formAddUser}
      onFinish={handleSubmitForm}
      preserve={false}
    >
      <Form.Item name="checkbox-group" label="Danh sách phương thức:  ">
        <Checkbox.Group>
          <Row>
            <Col span={24}>
              <Checkbox value="shipcod" style={{ lineHeight: "32px" }}>
                Thanh toán bằng tiền mặt khi nhận hàng
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="vnpay" style={{ lineHeight: "32px" }}>
                Thanh toán bằng mã VNPAY QR
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="atm" style={{ lineHeight: "32px" }}>
                Thẻ ATM nội địa/ Internet banking
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="button-addNewpi"
          loading={props.loading}
          style={{width: "50%"}}
        >
          Thay đổi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModalChange;
