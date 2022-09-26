/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.schema.io', 'cdn.raster.app']
	}
}

module.exports = nextConfig
