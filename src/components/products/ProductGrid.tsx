import { Product } from '@lib/types'
import ProductItem from './ProductItem'

const ProductGrid = ({ products }: { products: Product[] }) => {
	return (
		<section className="section">
			<div className="container">
				<div className="product-grid">
					{products.map((product: Product) => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductGrid
