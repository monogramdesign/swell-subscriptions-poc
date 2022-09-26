import CartProductRow from '@components/cart/CartProductRow'
import CartSummary from '@components/cart/CartSummary'
import { useCart } from '@lib/context/useCart'
import Link from 'next/link'

export default function Cart() {
	const { cart, loading } = useCart()

	console.log('cart', cart)

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className="container flex items-start justify-between py-14 gap-x-8">
			{/* Products list */}
			<div className="w-full p-8 bg-white">
				{/* Cart Items */}
				{cart.item_quantity > 0 ? (
					<div className="flex pb-4 border-b border-[#E8E6E1] text-xs text-[#86827E]/80 justify-between">
						<p className="w-3/6">Product name</p>

						<p className="w-2/6 text-center">Quantity</p>

						<p className="w-1/6 text-end">Total</p>
					</div>
				) : (
					<div>
						Your cart is empty. Go ahead and{' '}
						<Link href="/products">
							<a className="text-origin-citrus">add some products</a>
						</Link>{' '}
						to it.
					</div>
				)}

				{cart?.items?.map((item) => (
					<CartProductRow cartItem={item} key={item?.id} />
				))}
			</div>

			<CartSummary {...cart} />
		</div>
	)
}
