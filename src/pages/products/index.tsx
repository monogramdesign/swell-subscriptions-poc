import ProductGrid from '@components/products/ProductGrid'
import Breadcrumbs from '@components/layout/Breadcrumbs'

import type { GetStaticProps, NextPage } from 'next'
import type { Product } from '@lib/types'

// mock data
import { MOCK_PRODUCTS } from '@lib/swell/mock-data'

const Products: NextPage = ({ products = [] }: { products?: Product[] }) => {
	return (
		<>
			<section className="page-title">
				<div className="container">
					<h1>Products</h1>
				</div>
			</section>

			<Breadcrumbs />
			<ProductGrid products={products} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	// TODO: fetch products from swell
	return {
		props: { products: MOCK_PRODUCTS }
	}
}

export default Products
