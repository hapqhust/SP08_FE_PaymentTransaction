import React from "react";
import { Avatar, Button, Col, Result, Row } from "antd";
import "./PaymentResult.scss"
import { useSearchParams } from "react-router-dom";
// import "../../assets/image/success.png";

const PaymentResult: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const payCode = searchParams.get("payment_code")
  const money = searchParams.get("money")
  const status = searchParams.get("status")
  const url_success = "https://cdni.iconscout.com/illustration/premium/thumb/payment-successful-6021234-4993177.png";
  const url_pending = "https://cdni.iconscout.com/illustration/premium/thumb/food-order-confirm-6853785-5639909.png";
  const url_fail = "https://img.freepik.com/premium-vector/payment-error-info-message-smartphone-customer-cross-marks-failure-vector-illustration_106788-3025.jpg?w=2000";

  console.log(payCode);
  console.log(money);
  console.log(status);
  
  const numberWithCommas = (x: string) => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return(
    <div className="container container-payment">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="payment">
            <div className="payment_header">
                {status === "successful"?
                  <div> 
                  <div className="check">
                    <Avatar size={200} src={url_success} />
                  </div>
                  <h1 className="success-text">
                    THANH TOÁN THÀNH CÔNG !
                  </h1>
                  <p>
                    Bạn đã thanh toán đơn hàng thành công
                  </p>
                </div>
                : status === "failed"?
                <div> 
                    <div className="check">
                      <Avatar size={200} src={url_fail} />
                    </div>
                    <h1 className="fail-text">
                      THANH TOÁN THẤT BẠI !
                    </h1>
                    <p>
                      Thanh toán cho đơn hàng không thành công
                    </p>
                    <Row justify="center">
                    <Col>
                    <button type="button" className="btn btn-home">
                      Trở về trang chủ
                    </button>
                    </Col>
                  </Row>
                  </div> :
                  <div> 
                  <div className="check">
                    <Avatar size={200} src={url_pending} />
                  </div>
                  <h1 className="pending-text">
                    ĐẶT HÀNG THÀNH CÔNG !
                  </h1>
                  <p>
                    Bạn đã đặt hàng thành công. Đơn hàng của bạn đang chờ phê duyệt và sẽ gửi tới bạn trong thời gian sớm nhất
                  </p>
                  <Row justify="center">
                  <Col>
                  <button type="button" className="btn btn-home">
                    Trở về trang chủ
                  </button>
                  </Col>
                </Row>
                </div>
                }
            </div>
            <div className="content">
            {status === "successful"?<>
              <Row className="content-detail" justify="space-between">
                <Col>
                  <p className="title">
                    Mã giao dịch:
                  </p>
                </Col>
                <Col>
                  <p>
                    {payCode}
                  </p>
                </Col>
              </Row>
              <Row className="content-detail" justify="space-between">
                <Col>
                  <p className="title">
                    Số tiền thanh toán:
                  </p>
                </Col>
                <Col>
                  <p>
                    {money?numberWithCommas(money):""} VND 
                  </p>
                </Col>
              </Row>
              <Row justify="center">
                  <Col>
                    <button type="button" className="btn btn-home">
                    Trở về trang chủ
                    </button>
                  </Col>
                </Row>
              </>:<></>
              }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
