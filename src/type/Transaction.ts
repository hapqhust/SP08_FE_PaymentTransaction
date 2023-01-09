export interface Transaction {
    id: number,
    customer_id: number,
    order_id: number
    payment_code: string,
    money: number,
    method: string,
    type: string,
    status: string,
    bank_code ?: string,
    created_at: string,
    updated_at: string,
    payment_date?: string|null
}
