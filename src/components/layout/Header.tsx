import Link from 'next/link'

const Header = () => {
	return (
		<header className="bg-white text-lg py-12">
			<nav className="container flex justify-between gap-12">
				<div>
					<Link href="/">
						<a>ORIGIN</a>
					</Link>
				</div>
				<ul className="grow flex gap-6">
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/products">
							<a>Products</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
				</ul>
				<Link href="/cart">
					<a>Cart</a>
				</Link>
			</nav>
		</header>
	)
}

export default Header
