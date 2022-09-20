/* eslint-disable @next/next/no-img-element */
import SaleBadge from './SaleBadge'
import { formatCurrency } from '@lib/utils'

import type { Product } from '@lib/types'

const ProductItem = ({ product }: { product: Product }) => {
	return (
		<div key={product.id} className="group relative">
			{product.sale && <SaleBadge />}
			<div className="product-img-wrapper">
				<img
					src={product.images[0].file.url}
					alt={product.name}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="mt-4">
				<h3 className="text-lg">
					<a href={`products/${product.slug}`}>
						<span aria-hidden="true" className="absolute inset-0" />
						{product.name}
					</a>
				</h3>
				{product.sale ? (
					<div className="text-lg font-medium flex gap-3 items-center">
						<p className="text-[#A2B22D]">{formatCurrency({ amount: product.sale_price })}</p>
						<p className="text-sm decoration-1 line-through text-zinc-400">
							{formatCurrency({ amount: product.price })}
						</p>
					</div>
				) : (
					<p className="text-lg font-medium">{formatCurrency({ amount: product.price })}</p>
				)}
			</div>
		</div>
	)
}

export default ProductItem
