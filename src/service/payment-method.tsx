import axios from "axios";

// const domain = "https://tungsnk.tech:8088";
const domain = "https://laravel-production-2cf3.up.railway.app";


function getListPaymentMethod() {
  const response = axios.get(`${domain}/api/admin/transactions/payment-method`);
  return response;
}

function changePaymentMethod(data: any) {
    const response = axios.put(`${domain}/api/admin/transactions/payment-change-status`, { ...data });
    return response;
  }
  

export {
  getListPaymentMethod,
  changePaymentMethod
};
