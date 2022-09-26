// import Breadcrumbs from '@components/layout/Breadcrumbs'
import ProductInfo from '@components/products/ProductInfo'
import ProductImage from '@components/products/ProductImage'

import type { GetStaticProps, NextPage } from 'next'
import { Product } from '@lib/types'

import { getProductBySlug, getProducts } from '@lib/swell/products'

const ProductPage = ({ product }: { product: Product }) => {
	return (
		<section>
			{/* <Breadcrumbs /> */}

			<div className="container py-24">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					<ProductImage images={product?.images} />
					<ProductInfo product={product} />
				</div>
			</div>
		</section>
	)
}

export async function getStaticPaths() {
	const { results: products } = await getProducts()

	return {
		paths: products.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string
	const product = await getProductBySlug(slug)

	return {
		props: { product }
	}
}

export default ProductPage
