/* eslint-disable @next/next/no-img-element */
import { Tab } from '@headlessui/react'
import { ProductImage } from '@lib/types'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const ProductImage = ({ images }: { images?: ProductImage[] }) => {
	return (
		<Tab.Group as="div" className="flex flex-col-reverse">
			<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
				<Tab.List className="grid grid-cols-4 gap-6">
					{images?.map((image) => (
						<Tab
							key={image.id}
							className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-[#A2B22D] focus:ring-opacity-50 focus:ring-offset-4"
						>
							{({ selected }) => (
								<>
									<span className="sr-only"> {image.file.metadata} </span>
									<span className="absolute inset-0 overflow-hidden rounded-md">
										<img
											src={image.file.url}
											alt=""
											className="h-full w-full object-cover object-center"
										/>
									</span>
									<span
										className={classNames(
											selected ? 'ring-[#A2B22D]' : 'ring-transparent',
											'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
										)}
										aria-hidden="true"
									/>
								</>
							)}
						</Tab>
					))}
				</Tab.List>
			</div>

			<Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
				{images?.map((image) => (
					<Tab.Panel key={image.id}>
						<img
							src={image.file.url}
							alt={image.file.metadata}
							className="h-full w-full object-cover object-center sm:rounded-lg"
						/>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}

export default ProductImage
