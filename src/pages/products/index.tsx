import ProductGrid from '@components/products/ProductGrid'
import Breadcrumbs from '@components/layout/Breadcrumbs'

import type { GetStaticProps, NextPage } from 'next'
import type { Product } from '@lib/types'

// mock data
import { MOCK_PRODUCTS } from '@lib/swell/mock-data'

const Products: NextPage = ({ products = [] }: { products?: Product[] }) => {
	return (
		<>
			<section className="py-12 bg-white mb-6">
				<div className="container">
					<h2 className="text-6xl title">Coffee</h2>
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
