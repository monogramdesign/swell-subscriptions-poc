import { useState } from 'react'
import { getCart } from '@lib/swell/cart'
import { EMPTY_CART } from '@lib/constants'
import type { Cart } from '@lib/types'

export default function useCart() {
	const [cart, setCart] = useState<Cart>(EMPTY_CART)
	const [loading, setLoading] = useState(true)

	console.log(cart)

	function initCart() {
		setLoading(true)

		return new Promise((resolve) => {
			getCart().then((cart) => {
				if (cart) {
					setCart(cart)
				}
				resolve(true)
			})

			setLoading(false)
		})
	}

	async function updateCart(cart: Cart) {
		setCart(cart)
		setLoading(false)
	}

	return { cart, loading, initCart, updateCart }
}
