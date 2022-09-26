/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	images: {
		domains: ['cdn.schema.io', 'cdn.raster.app']
	}
}

module.exports = nextConfig
