import { Product } from './product'

export type CartProduct = {
	product_id: string
	quantity: number
	options?: Record<string, unknown>
}

export type Cart = {
	id: string | null
	taxes: number | null
	tax_total: number
	tax_included_total: number
	sub_total: number
	shipping: any
	shipment_total: number
	shipment_rating: number | null
	shipment_price: number | 0
	shipment_discount: number | 0
	promotion_ids: any[]
	items: Product[]
	item_tax: number
	item_shipment_weight: number
	item_quantity: number
	item_discount: number
	guest: boolean
	grand_total: number
	giftcard_total: number
	discounts: null
	discount_total: number
	date_created?: string
	date_abandoned?: string
	currency: string
	checkout_url: string | null
	checkout_id?: string
	capture_total: number
	billing?: any
	auth_total: number
	account_logged_in?: string | null
	abandoned?: boolean
	coupon?: string
	promotions?: any
}
