import type { AppProps } from 'next/app'
import Layout from '@components/layout/Layout'
import '@styles/globals.scss'
import { CartProvider } from '@lib/context/useCart'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	)
}

export default MyApp
