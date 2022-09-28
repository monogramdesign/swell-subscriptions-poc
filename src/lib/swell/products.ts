import type { ProductResults } from '@lib/types'
import { PRODUCTS_PER_PAGE } from '@lib/constants'
import swell from '@lib/swell/store'

/**
 * Get a list of products
 * @param {number} [limit=PRODUCTS_PER_PAGE] - Number of products per page from constant. Max. 100
 * @param {number} [page=1] - Page number
 * @returns Product + pagination details
 */
export const getProducts = async (limit = PRODUCTS_PER_PAGE, page = 1): Promise<ProductResults> => {
	const products = await swell.products.list({
		limit, // Max. 100
		page,
		expand: ['variants']
	})

	return products
}

export const getProductBySlug = async (slug: string): Promise<ProductResults | null> => {
	const product = await swell.products.get({
		slug,
		expand: ['variants']
	})

	return product.results[0]
}
