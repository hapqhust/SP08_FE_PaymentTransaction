export interface Product {
    id: number,
	name: string,
	image: string,
	price: number,
	quantity: number,
	type?: string,
    loading ?: boolean;
}