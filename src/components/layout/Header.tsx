import { useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import useCart from '@lib/hooks/useCart'

const Header = () => {
	const {
		initCart,
		cart: { item_quantity }
	} = useCart()

	useEffect(() => {
		initCart()
	}, [])

	return (
		<header className="py-12 text-lg bg-white">
			<nav className="container flex justify-between gap-12">
				<div>
					<Link href="/">
						<a className="text-xl font-bold tracking-widest uppercase">ORIGIN</a>
					</Link>
				</div>
				<ul className="flex gap-6 grow">
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
					<a className="relative">
						{item_quantity && (
							<span className="rounded-full p-1 absolute -right-full top-0 aspect-square w-6 h-6 flex place-content-center text-xs bg-[#A2B22D] font-bold text-white">
								{item_quantity}
							</span>
						)}
						<ShoppingCartIcon className="w-7 h-7" />
					</a>
				</Link>
			</nav>
		</header>
	)
}

export default Header
