import { MOCK_PRODUCTS } from '@lib/swell/mock-data'
import CartProductRow from '@components/cart/CartProductRow'
import CartSummary from '@components/cart/CartSummary'
import useCart from '@lib/hooks/useCart'

export default function Cart() {
	const { cart } = useCart()

	return (
		<div className="container flex items-start justify-between py-14 gap-x-8">
			{/* Products list */}
			<div className="w-full p-8 bg-white">
				<div className="flex pb-4 border-b border-[#E8E6E1] text-xs text-[#86827E]/80 justify-between">
					<p className="max-w-[433px] w-full">Product name</p>

					<p className="text-center w-28">Quantity</p>

					<p className="w-28 text-end">Total</p>
				</div>

				{cart?.items?.map((product) => (
					<CartProductRow {...product} key={product?.id} />
				))}

				{/* {MOCK_PRODUCTS.map((product) => (
					// TODO: fix type?
					<ProductRow {...(product as any)} key={product?.id} />
				))} */}
			</div>

			<CartSummary />
		</div>
	)
}
