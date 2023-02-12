import axios from "axios";

// const domain = "https://tungsnk.tech:8088";
const domain = "https://laravel-production-2cf3.up.railway.app";

function doTransactions(data: any) {
  const response = axios.post(`${domain}/api/transactions`, { ...data });
  return response;
}

export { doTransactions };
