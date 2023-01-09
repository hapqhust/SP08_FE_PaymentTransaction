import axios from "axios";

const domain = "http://103.179.173.95:8088";

function getListTransaction(data:{}) {
  const response = axios.get(`${domain}/api/admin/transactions`,{params:data});
  return response;
}

function getStatistic() {
  const response = axios.get(`${domain}/api/admin/transactions/statistic`);
  return response;
}

function getStatisticByMonth() {
  const response = axios.get(`${domain}/api/admin/transactions/statistic-by-month`);
  return response;
}

function getStatisticByPayAndRefund() {
  const response = axios.get(`${domain}/api/admin/transactions/statistic-pay-and-refund`);
  return response;
}

export { getListTransaction, getStatistic, getStatisticByMonth, getStatisticByPayAndRefund };
