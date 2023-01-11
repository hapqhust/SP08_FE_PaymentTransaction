import { PayMethodType } from "../type/PaymentMethod";

const list_pay_method: PayMethodType[] = [
    {
      id: 1,
      icon_url:
        "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg",
      title: "Thanh toán tiền mặt khi nhận hàng",
    },
    {
      id: 2,
      icon_url:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/255960970_670368094349493_6129625584296512415_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rg2B98oR5oQAX9gi9_a&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCyWE0hLZ7NAZN5azsKLqWc9Xj9OPoN88A3Erykg_ENhg&oe=63C40D16",
      title: "Thanh toán bằng mã VNPAY QR",
    },
    {
      id: 3,
      icon_url:
        "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg",
      title: "Thẻ ATM nội địa/ Internet banking",
    },
  ];

export {list_pay_method}