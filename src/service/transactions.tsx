import axios from "axios";

const domain = "http://103.179.173.95:8088";

function doTransactions(data:any){
    const response = axios.post(`${domain}/api/transactions`,{...data})
    return response;
}

export { doTransactions }