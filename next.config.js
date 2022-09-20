/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.schema.io']
	}
}

module.exports = nextConfig
