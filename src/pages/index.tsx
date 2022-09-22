import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<section className="section" id="home">
			<Head>
				<title>Swell + Monogram - Subscriptions POC</title>
				<meta
					name="description"
					content="POC by Monogram on using the headless ecommerce platform Swell."
				/>
			</Head>

			<div className="container hero">
				<h2>Origin Coffee, An Absolute Treat</h2>

				<div className="image-block">
					<div>
						<Image
							src="https://cdn.raster.app/swell-monogram/LKZEz83V2H?ixlib=js-3.6.0&s=222484a9f105425eb766f0606937cfc8"
							width="520"
							height="436"
							alt="Coffee box"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
