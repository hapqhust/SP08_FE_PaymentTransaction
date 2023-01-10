import axios from "axios";
import moment from "moment";

const domain = "http://tungsnk.tech:8088";

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
  const response = axios.get(
    `${domain}/api/admin/transactions/statistic-pay-and-refund?start_at=${moment()
      .subtract(7, "days")
      .format("YYYY-MM-DD")}&end_at=${moment().format("YYYY-MM-DD")}`
  );
  return response;
}

export {
  getListTransaction,
  getStatistic,
  getStatisticByMonth,
  getStatisticByPayAndRefund,
};
