import { useState } from 'react'
import SelectElement from '@components/ui/SelectElement'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { Product } from '@lib/types'
import { formatCurrency } from '@lib/utils'

const ProductPurchaseOptions = ({ product }: { product?: Product }) => {
	const sizeOptions = product?.options.find((option) => option.name === 'Size')?.values
	const [selectedSize, setSelectedSize] = useState(sizeOptions?.[0])

	const purchaseOptions = product?.purchase_options
		? Object.keys(product?.purchase_options)?.map((option) => ({
				id: option,
				title:
					option === 'standard'
						? 'One-time purchase'
						: option === 'subscription'
						? 'Subscribe & save'
						: 'Trial'
		  }))
		: []

	const [selectedPurchaseOption, setSelectedPurchaseOption] = useState(purchaseOptions[0])

	return (
		<form className="mt-6">
			<div className="flex flex-col gap-6">
				{/* Price */}
				{(!selectedPurchaseOption || selectedPurchaseOption?.id === 'standard') && (
					<div className="mt-6">
						<h3 className="sr-only">Product price</h3>
						{product?.sale ? (
							<div className="text-2xl font-medium flex gap-3 items-center">
								<p className="text-[#A2B22D]">{formatCurrency({ amount: product?.price })}</p>
								<p className="text-lg decoration-1 line-through text-zinc-400">
									{formatCurrency({ amount: product.orig_price })}
								</p>
							</div>
						) : (
							<p className="text-2xl font-medium">
								{formatCurrency({ amount: product?.price || 0 })}
							</p>
						)}
					</div>
				)}

				{/* Purchase option */}
				<fieldset>
					<legend className="sr-only">Purchase method</legend>
					<div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
						{purchaseOptions.map((option) => (
							<div key={option.id} className="flex items-center">
								<input
									id={option.id}
									name="notification-method"
									type="radio"
									checked={option.id === selectedPurchaseOption.id}
									onChange={() => setSelectedPurchaseOption(option)}
									className="h-4 w-4 border-gray-300 text-[#A2B22D] focus:ring-[#A2B22D]"
								/>
								<label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
									{option.title}
								</label>
							</div>
						))}
					</div>
				</fieldset>

				{/* Quantity */}
				<SelectElement
					label="Quantity"
					options={sizeOptions}
					selected={selectedSize}
					onSelect={setSelectedSize}
				/>

				<button
					type="submit"
					className="self-start flex items-center gap-4 px-6 py-2.5 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A2B22D] focus:ring-offset-2 focus:ring-offset-gray-50"
				>
					<span>Add to Cart</span>
					<ShoppingCartIcon className="w-5 h-5" />
				</button>
			</div>
		</form>
	)
}

export default ProductPurchaseOptions
