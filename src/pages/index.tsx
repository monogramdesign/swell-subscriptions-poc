import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Swell + Monogram - Subscriptions POC</title>
				<meta
					name="description"
					content="POC by Monogram on using the headless ecommerce platform Swell."
				/>
			</Head>

			<main>
				<section>
					<div className="container">
						<h1 className="font-serif text-3xl">Swell x Monogram Subscriptions </h1>
						<p>Home</p>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
