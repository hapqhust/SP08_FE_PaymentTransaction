export interface Transaction {
    id: string,
    amount: number,
    content?: string,
    createdAt: string
    
    name: string,
    from_bank: string,
    account_number?: string
}