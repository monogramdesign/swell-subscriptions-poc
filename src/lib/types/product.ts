export type Product = {
	id: string
	currency: 'USD'
	description: string
	images: ProductImage[]
	name: string
	options: ProductOptions[]
	orig_price: number
	price: number
	purchase_options: ProductPurchaseOptions[]
	sale: boolean
	sku: string
	slug: string
	stock_status: null

	variants: {
		count: number
		results: ProductVariant[]
		page: number
	}
}

export type ProductVariant = {
	id: string
	currency: 'USD'
	images: ProductImage[]
	name: string
	option_value_ids: string[]
	price: number
	sku: string
	stock_level: number
	stock_status: string
}

export type ProductPurchaseOptions = {
	standard: {
		price: number
		sale: boolean
		sale_price: number
	}
}

export type ProductOption = {
	id: string
	name: string
	price: number | null
	shipment_weight: string | null
	description: string | null
}

export type ProductOptions = {
	id: string
	values: ProductOption[]
	name: string
	active: boolean
	input_type: string
	variant: boolean
	description: string
	required: boolean
	attribute_id: string
}

export type ProductImage = {
	id: string
	caption: string
	file: {
		md5: string
		url: string
		height: number
		width: number
	}
}

export type ProductResults = {
	count: number
	page: number
	pages: any
	results: Product[]
}
