import { createContext, useCallback, useContext, useReducer, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { getCart } from '@lib/swell/cart'
import { EMPTY_CART } from '@lib/constants'
import type { Cart } from '@lib/types'

type CartContextType = {
	cart: Cart
	loading: boolean
	updateCart: (cart: Cart) => Promise<void>
}

const CartContext = createContext<CartContextType>({
	cart: EMPTY_CART,
	loading: false,
	updateCart: async (cart: Cart) => {}
})

export function useCart() {
	return useContext(CartContext)
}

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<Cart>(EMPTY_CART)
	const [loading, setLoading] = useState(true)

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

	useEffect(() => {
		initCart()
	}, [])

	async function updateCart(cart: Cart) {
		setCart(cart)
		setLoading(false)
	}

	return (
		<CartContext.Provider value={{ cart, loading, updateCart }}>{children}</CartContext.Provider>
	)
}
