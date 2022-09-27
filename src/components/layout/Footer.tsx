const Footer = () => {
	return (
		<footer className="bg-[#EDEAE3] py-20">
			<div className="container">
				<h5 className="text-lg">ORIGIN COFFEE CO.</h5>
				<p className="text-sm text-[#6F6F6F] mt-4">
					© 2022 Origin Coffee Co., a Family-Owned Company
				</p>
				<p className="text-sm text-gray-400">
					Designed and developed by{' '}
					<a
						className="text-origin-citrus"
						href="https://monogram.io/"
						rel="noreferrer"
						target="_blank"
					>
						monogram.io
					</a>{' '}
					for{' '}
					<a
						className="text-origin-citrus"
						href="https://www.swell.is/"
						rel="noreferrer"
						target="_blank"
					>
						Swell
					</a>
					.
				</p>
			</div>
		</footer>
	)
}

export default Footer
