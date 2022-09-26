import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
