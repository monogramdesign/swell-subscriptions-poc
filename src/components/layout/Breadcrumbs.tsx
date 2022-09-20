import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { capitalize } from '@lib/utils'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
	const router = useRouter()
	const paths = router?.asPath?.split('?')[0].split('/').filter(Boolean)
	const pages = paths.map((path, index) => ({
		href: '/' + paths.slice(0, index + 1).join('/'),
		title: capitalize(path)
	}))

	return (
		<section className="pt-6">
			<nav className="flex container" aria-label="Breadcrumb">
				<ol role="list" className="flex items-center space-x-4">
					{pages.map((page, index) => (
						<li key={page.title}>
							<div className="flex items-center">
								{index !== 0 && (
									<ChevronRightIcon
										className="h-5 w-5 flex-shrink-0 text-gray-400"
										aria-hidden="true"
									/>
								)}
								<a
									href={page.href}
									className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
								>
									{page.title}
								</a>
							</div>
						</li>
					))}
				</ol>
			</nav>
		</section>
	)
}

export default Breadcrumbs