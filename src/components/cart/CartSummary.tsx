import { formatCurrency } from '@lib/utils'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CartSummary() {
	return (
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
	)
}
