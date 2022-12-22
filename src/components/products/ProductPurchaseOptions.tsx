import { useEffect, useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { addToCart } from '@lib/swell/cart'
import type { Product } from '@lib/types'
import { formatCurrency, getDeliveryFrequencyDisplay } from '@lib/utils'
import { useCart } from '@lib/context/useCart'

const ProductPurchaseOptions = ({ product }: { product: Product }) => {
	const { updateCart } = useCart()

	/**
	 * Storing the price in a state variable
	 * so we can update it when the user changes the purchase option.
	 */
	const [price, setPrice] = useState(product?.price)

	/**
	 * We're just going to make it simpler for coding/display purposes.
	 * We are using these size options to display the box sizes.
	 * (eg. "Standard bag (12oz)" or "Bulk bag (5lbs)").
	 */
	const sizeOptions = product?.options.find((option) => option.name === 'Size')?.values

	/**
	 * User-selected size. (eg. "Standard bag (12oz)" or "Bulk bag (5lbs)").
	 * Initialized to the first size option in the list.
	 */
	const [selectedSize, setSelectedSize] = useState(sizeOptions?.[0])

	/**
	 * Simplifying the purchase options for this demo.
	 *
	 * Used in the purchase options radio buttons
	 * ('One-time purchase' vs. 'Subscribe & save')
	 */
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

	/**
	 * If we have products that do not offer a subscription
	 * always initialize the state variable to the standard purchase option.
	 */
	const [selectedPurchaseOption, setSelectedPurchaseOption] = useState(
		purchaseOptions[0] || { id: 'standard' }
	)

	/**
	 * User-selected "subscription plan" (eg. "Every 4 weeks" or "Every 2 months").
	 * Initialized to the first delivery option in the list.
	 */
	const [subscriptionPlan, setSubscriptionPlan] = useState(
		product?.purchase_options?.subscription ? product.purchase_options.subscription.plans[0] : null
	)

	/**
	 * Update price when the user makes their selection:
	 * from the purchase options ("standard" vs. "subscription") and the size offered.
	 */
	useEffect(() => {
		// STANDARD
		if (selectedPurchaseOption.id === 'standard') {
			setPrice(product?.price + (selectedSize?.price ? selectedSize?.price : 0))

			// SUBSCRIPTION
		} else {
			setPrice(subscriptionPlan?.price + (selectedSize?.price ? selectedSize?.price : 0))
		}
	}, [product?.price, subscriptionPlan?.price, selectedPurchaseOption, selectedSize])

	// Helper: Get the plan object from the selected plan ID
	const subscriptionPlanFromId = (id: string) => {
		return product.purchase_options.subscription.plans.find((plan: any) => plan.id === id)
	}

	// Helper: Get the size from the selected size ID
	const sizeFromId = (id: string) => {
		return sizeOptions && sizeOptions.find((size: any) => size.id === id)
	}

	/**
	 * Called when the "Add to Cart" button is clicked.
	 *
	 * Handles two types of purchase options:
	 * 1. Standard
	 * 2. Subscription
	 */
	const handleAddToCart = async () => {
		// STANDARD
		const currentCart = await addToCart({
			product_id: product?.id,
			quantity: 1,
			// @ts-ignore
			options: [
				{
					name: 'Size',
					value: selectedSize?.name
				}
			],
			// SUBSCRIPTION
			...(selectedPurchaseOption.id === 'subscription' && {
				purchase_option: {
					type: 'subscription',
					plan_id: subscriptionPlan?.id
				}
			})
		})

		// Update the cart context
		updateCart(currentCart)
	}

	//
	return (
		<div className="flex flex-col gap-6 mt-6">
			{/* Price */}
			<div className="mt-6">
				<h2 className="sr-only">Product price</h2>
				<p className="text-2xl font-medium">{formatCurrency({ amount: price || 0 })}</p>
			</div>

			{/* Box size */}
			<div>
				<label htmlFor="size" className="block text-sm font-medium text-gray-700">
					Size
				</label>
				<select
					id="size"
					name="size"
					className="drop-down"
					defaultValue={selectedSize && selectedSize.id}
					onChange={(e) => setSelectedSize(sizeFromId(e.target.value))}
				>
					{sizeOptions &&
						sizeOptions.map((option: any) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
						))}
				</select>
			</div>

			{/* Purchase option */}
			{purchaseOptions.length > 1 && (
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
								<label htmlFor={option.id} className="block ml-3 text-sm font-medium text-gray-700">
									{option.title}
								</label>
							</div>
						))}
					</div>
				</fieldset>
			)}

			{/* Subscription frequency */}
			{selectedPurchaseOption?.id === 'subscription' && (
				<div>
					<label htmlFor="plan" className="block text-sm font-medium text-gray-700">
						Delivery
					</label>
					<select
						id="plan"
						name="plan"
						className="drop-down"
						defaultValue={subscriptionPlan.id}
						onChange={(e) => setSubscriptionPlan(subscriptionPlanFromId(e.target.value))}
					>
						{product?.purchase_options.subscription.plans.map((plan: any) => (
							<option key={plan.id} value={plan.id}>
								{getDeliveryFrequencyDisplay(plan)}
							</option>
						))}
					</select>
				</div>
			)}

			{/* Add to cart */}
			<button className="button add-to-cart" onClick={handleAddToCart}>
				Add to Cart
				<ShoppingCartIcon className="w-5 h-5" />
			</button>
		</div>
	)
}

export default ProductPurchaseOptions
