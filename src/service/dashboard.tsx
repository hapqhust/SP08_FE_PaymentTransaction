import axios from "axios";
import moment from "moment";

// const domain = "https://tungsnk.tech:8088";
const domain = "https://laravel-production-2cf3.up.railway.app";


function getListTransaction(data: {}) {
  const response = axios.get(`${domain}/api/admin/transactions`, {
    params: data,
  });
  return response;
}

function getStatistic() {
  const response = axios.get(`${domain}/api/admin/transactions/statistic`);
  return response;
}

function getStatisticByMonth() {
  const response = axios.get(
    `${domain}/api/admin/transactions/statistic-by-month`
  );
  return response;
}

function getStatisticByPayAndRefund() {
  // const response = axios.get(
  //   `${domain}/api/admin/transactions/statistic-pay-and-refund?start_at=${moment()
  //     .subtract(7, "days")
  //     .format("YYYY-MM-DD")}&end_at=${moment().format("YYYY-MM-DD")}`
  // );
  const response = axios.get(
    `${domain}/api/admin/transactions/statistic-pay-and-refund`
  );
  return response;
}

export {
  getListTransaction,
  getStatistic,
  getStatisticByMonth,
  getStatisticByPayAndRefund,
};
