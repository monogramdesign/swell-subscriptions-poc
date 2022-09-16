import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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

				{/* Pricing cards concept */}
				<section>
					<div className="container flex gap-x-6">
						<Link href="/">
							<a className="pricing-card">
								<div>
									<div className="relative w-full aspect-square">
										<span className="frequency-label">Monthly</span>

										<Image src="/coffee.jpg" alt="coffee" layout="fill" />
									</div>

									<div className="price-container">
										<span className="text-sm font-bold">$</span>
										<p className="text-6xl font-bold">50</p>
										<span className="self-end mb-1 text-xs font-bold">/per month</span>
									</div>

									<span className="py-1.5 px-3 bg-gray-300 rounded-full flex justify-center mt-10 text-black">
										Subscribe
									</span>
								</div>
							</a>
						</Link>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
