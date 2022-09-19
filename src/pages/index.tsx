import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<section className="section">
			<Head>
				<title>Swell + Monogram - Subscriptions POC</title>
				<meta
					name="description"
					content="POC by Monogram on using the headless ecommerce platform Swell."
				/>
			</Head>

			<div className="container">
				<h2 className="font-medium">Origin Coffee Co. - An Absolute Treat</h2>
			</div>
		</section>
	)
}

export default Home
