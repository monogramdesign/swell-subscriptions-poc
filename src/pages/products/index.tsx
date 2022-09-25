import ProductGrid from '@components/products/ProductGrid'
import Breadcrumbs from '@components/layout/Breadcrumbs'

import type { GetStaticProps, NextPage } from 'next'
import type { Product } from '@lib/types'

const Products: NextPage = ({ products = [] }: { products?: Product[] }) => {
	return (
		<>
			<section className="page-title">
				<div className="container">
					<h1>Products</h1>
				</div>
			</section>

			{/* TODO: ADD BREADCRUMBS HERE. */}
			{/* TODO: ADD PRODUCT GRID */}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	// TODO: FETCH PRODUCTS FROM SWELL
	return {
		props: { products: [] }
	}
}

export default Products
