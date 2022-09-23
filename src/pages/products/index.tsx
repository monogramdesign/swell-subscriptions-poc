import ProductGrid from '@components/products/ProductGrid'
import Breadcrumbs from '@components/layout/Breadcrumbs'
import { getProducts } from '@lib/swell/products'

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

			<Breadcrumbs />
			<ProductGrid products={products} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { results: products } = await getProducts()

	return {
		props: { products: products || [] }
	}
}

export default Products
