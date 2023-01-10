import axios from "axios";

const domain = "https://tungsnk.tech:8088";

function doTransactions(data:any){
    const response = axios.post(`${domain}/api/transactions`,{...data})
    return response;
}

export { doTransactions }