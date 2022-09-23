import Breadcrumbs from '@components/layout/Breadcrumbs'
import ProductInfo from '@components/products/ProductInfo'
import ProductImage from '@components/products/ProductImage'

import type { GetStaticProps, NextPage } from 'next'
import { Product } from '@lib/types'

// mock data
import { MOCK_PRODUCTS } from '@lib/swell/mock-data'

const ProductPage: NextPage = ({ product }: { product?: Product }) => {
	return (
		<section>
			<Breadcrumbs />
			<div className="container py-24">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					<ProductImage images={product?.images} />
					<ProductInfo product={product} />
				</div>
			</div>
		</section>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// TODO: get product by slug
	const slug = params?.slug
	return {
		props: { product: MOCK_PRODUCTS.find((product) => product.slug === slug) }
	}
}

export async function getStaticPaths() {
	// TODO: get All products

	return {
		paths: MOCK_PRODUCTS.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	}
}

export default ProductPage
