import { Transaction } from "../type/Transaction";

const list_transaction:Transaction[] = [
{
    id: "10000001",
    amount: 215000,
    content: "Thanh toán đơn hàng xxxx",
    createdAt: "18:24 07/11/2022",
    
    name: "Cao Bá Quát",
    from_bank: "Momo",
},
{
    id: "10000234",
    amount: 99000,
    content: "Thanh toán đơn hàng xxxx",
    createdAt: "19:45 08/11/2022",
    
    name: "Nguyễn Thị Sáu",
    from_bank: "VNPay",
},
{
    id: "12000153",
    amount: -79000,
    content: "Hoàn tiền cho đơn hàng xxx",
    createdAt: "08:35 02/12/2022",
    
    name: "Nguyễn Thị Sáu",
    from_bank: "Techcombank",
}
]

export { list_transaction };