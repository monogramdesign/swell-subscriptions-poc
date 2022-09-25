import Breadcrumbs from '@components/layout/Breadcrumbs'
import ProductInfo from '@components/products/ProductInfo'
import ProductImage from '@components/products/ProductImage'

import type { GetStaticProps, NextPage } from 'next'
import { Product } from '@lib/types'

const ProductPage: NextPage = ({ product }: { product?: Product }) => {
	return (
		<section>
			{/* TODO: ADD BREADCRUMBS HERE. */}

			<div className="container py-24">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					{/* TODO: ADD PRODUCT IMAGE (RIGHT SIDE) */}

					{/* TODO: ADD PRODUCT INFO (LEFT SIDE) */}
				</div>
			</div>
		</section>
	)
}

export async function getStaticPaths() {
	// TODO: GET ALL PRODUCT PATHS FROM SWELL

	return {
		paths: 'blank',
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// TODO: GET PRODUCT BY SLUG FROM SWELL

	return {
		props: { product: null }
	}
}

export default ProductPage
