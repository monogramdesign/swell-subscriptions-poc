import Image from 'next/image'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { formatCurrency, getDeliveryFrequency } from '@lib/utils'
import { removeItemFromCart } from '@lib/swell/products'
import { useCart } from '@lib/context/useCart'

export default function CartProductRow({ cartItem }: { cartItem: any }) {
	const { updateCart } = useCart()

	const { quantity, price, purchase_option, variant } = cartItem || {}
	const { name, images, sale, sale_price, id } = cartItem?.product || {}

	function decrementQuantity() {
		// setQuantity((prev) => prev - 1)
	}

	function increaseQuantity() {
		// setQuantity((prev) => prev + 1)
	}

	const removeProduct = async () => {
		const cart = await removeItemFromCart(cartItem.id)
		updateCart(cart)
	}

	return (
		<div className="py-4 border-b border-[#E8E6E1] flex gap-x-8 justify-between" key={id}>
			<div className="max-w-[433px] flex gap-x-4">
				{/* Image */}
				{images?.[0]?.file?.url && (
					<div className="max-w-[112px] w-full">
						<Image
							src={images[0].file.url}
							alt={name}
							width={images[0].file.width}
							height={images[0].file.height}
						/>
					</div>
				)}

				<div>
					{/* Product name */}
					{name && <h3 className="text-xl text-[#1C1C18]">{name}</h3>}

					{/* Product description */}
					{purchase_option && (
						<p className="text-sm text-[#4F4F4F]">
							Subscribe &amp; save, {variant.name} every {getDeliveryFrequency(purchase_option)}
						</p>
					)}
				</div>
			</div>

			{/* Quantity */}
			<div className="border self-start relative justify-between border-[#E8E6E1] flex gap-x-5 items-center w-28">
				<button
					onClick={decrementQuantity}
					disabled={quantity <= 1}
					className="stroke-black p-2 disabled:stroke-[#86827E] hover:bg-zinc-100 disabled:hover:bg-white"
				>
					<MinusIcon className="w-4 stroke-inherit" />
				</button>

				<span className="absolute text-black -translate-x-1/2 left-1/2">{quantity}</span>

				<button onClick={increaseQuantity} className="p-2 hover:bg-zinc-100">
					<PlusIcon className="w-4 stroke-black" />
				</button>
			</div>

			{/* Price */}
			<div className="flex flex-col items-end w-28">
				{sale && sale_price ? (
					<>
						<p className="text-sm line-through decoration-1 text-zinc-400">
							{formatCurrency({ amount: price * quantity })}
						</p>
						<p className="">{formatCurrency({ amount: sale_price * quantity })}</p>
					</>
				) : (
					<p className="text-lg font-medium">{formatCurrency({ amount: price * quantity })}</p>
				)}

				{/* Remove from cart */}
				<button className="mt-auto text-[#DD4C79]" onClick={removeProduct}>
					Remove
				</button>
			</div>
		</div>
	)
}
