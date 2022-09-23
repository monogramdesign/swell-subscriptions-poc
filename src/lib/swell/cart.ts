import swell from '@lib/swell/store'
import type { CartProduct } from '@lib/types'

/**
 * Add a product to the cart
 * @param product -- Product to add to cart; format defined by Swell API
 * @returns returns the new cart
 */
export const addToCart = async (product: CartProduct) => {
	const cart = await swell.cart.addItem(product)
	return cart
}

/**
 * Remove a product from the cart
 * @param {string} id - Product id
 * @returns returns the new cart
 */
export const removeItemFromCart = async (itemId: string) => {
	const cart = await swell.cart.removeItem(itemId)
	return cart
}

/**
 *
 * @param itemId - Product id
 * @param quantity - Quantity to update
 * @returns returns the new cart
 */
export const updateQtyInCart = async (itemId: string, quantity: number) => {
	const cart = await swell.cart.updateItem(itemId, { quantity })
	return cart
}

/**
 * @returns returns the current cart from the Swell API
 */
export const getCart = async () => {
	const cart = await swell.cart.get()
	return cart
}
