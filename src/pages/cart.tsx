import { useState } from 'react'
import Image from 'next/image'
import { MOCK_PRODUCTS } from './products'
import { PlusIcon, MinusIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { formatCurrency } from '@lib/utils'

export default function Cart() {
	console.log(MOCK_PRODUCTS)

	const [quantity, setQuantity] = useState(1)

	function decrementQuantity() {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1)
		}
	}

	function increaseQuantity() {
		setQuantity((prev) => prev + 1)
	}

	return (
		<div className="container flex items-start justify-between py-14 gap-x-8">
			{/* Products list */}
			<div className="w-full p-8 bg-white">
				<div className="flex pb-4 border-b border-[#E8E6E1] text-xs text-[#86827E]/80">
					<p>Product name</p>

					<p>Quantity</p>

					<p>Total</p>
				</div>

				{MOCK_PRODUCTS.map(({ name, images, meta_description, sale, sale_price, price, id }) => (
					<div className="py-4 border-b border-[#E8E6E1] flex" key={id}>
						<div className="flex justify-between gap-x-4">
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

							<div className="pr-8">
								{/* Product name */}
								{name && <h3 className="text-xl text-[#1C1C18]">{name}</h3>}

								{/* Product description */}
								{meta_description && <p className="text-sm text-[#4F4F4F]">{meta_description}</p>}
							</div>

							{/* Quantity */}
							<div className="border self-start relative justify-between border-[#E8E6E1] flex gap-x-5 items-center w-36">
								<button
									onClick={decrementQuantity}
									disabled={quantity <= 1}
									className="stroke-black p-2 disabled:stroke-[#86827E] hover:bg-zinc-100"
								>
									<MinusIcon className="w-4 stroke-inherit" />
								</button>

								<span className="absolute text-black -translate-x-1/2 left-1/2">{quantity}</span>

								<button onClick={increaseQuantity} className="p-2 hover:bg-zinc-100">
									<PlusIcon className="w-4 stroke-black" />
								</button>
							</div>

							{/* Price */}
							<div className="flex flex-col items-end pl-16">
								{sale && sale_price ? (
									<>
										<p className="text-sm line-through decoration-1 text-zinc-400">
											{formatCurrency({ amount: price })}
										</p>
										<p className="">{formatCurrency({ amount: sale_price })}</p>
									</>
								) : (
									<p className="text-lg font-medium">{formatCurrency({ amount: price })}</p>
								)}

								{/* Remove from cart */}
								<button className="mt-auto text-[#DD4C79]">Remove</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Cart summary */}
			<div className="bg-[#1C3F3A] max-w-[367px] w-full p-8 text-white flex flex-col">
				<h2 className="text-3xl">Summary</h2>

				{/* Subtotal */}
				<div className="flex items-center justify-between mt-6">
					<p>Subtotal</p>

					<p>{formatCurrency({ amount: 1000 })}</p>
				</div>

				{/* Sales tax */}
				<div className="flex items-center justify-between mt-4">
					<p>Sales tax</p>

					<p>{formatCurrency({ amount: 20 })}</p>
				</div>

				{/* Shipping */}
				<div className="flex items-center justify-between py-4 mt-14">
					<p>Shipping</p>

					<p>{formatCurrency({ amount: 50 })}</p>
				</div>

				{/* Total */}
				<div className="flex items-center justify-between py-4 font-medium border-t border-white">
					<p>Total</p>

					<p className="text-xl">{formatCurrency({ amount: 1060 })}</p>
				</div>

				{/* Proceed to checkout */}
				<button className="flex items-center justify-center w-full py-3 mt-20 bg-white rounded-full gap-x-4 text-slate-800">
					Proceed to Checkout <ArrowRightIcon className="w-4 stroke-slate-800" />
				</button>
			</div>
		</div>
	)
}
