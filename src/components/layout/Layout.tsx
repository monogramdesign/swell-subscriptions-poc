import Footer from './Footer'
import Header from './Header'

import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
