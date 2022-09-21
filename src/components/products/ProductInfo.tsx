import { Product } from '@lib/types'
import { formatCurrency } from '@lib/utils'
import ProductPurchaseOptions from './ProductPurchaseOptions'

const ProductInfo = ({ product }: { product?: Product }) => {
	return (
		<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
			<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product?.name}</h1>

			<div className="mt-6">
				<h3 className="sr-only">Description</h3>
				<div
					className="space-y-6 text-base text-gray-700"
					dangerouslySetInnerHTML={{ __html: product?.description || '' }}
				/>
			</div>

			<ProductPurchaseOptions product={product} />
		</div>
	)
}

export default ProductInfo
