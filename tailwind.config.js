/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['ui-serif', 'serif']
			}
		}
	},
	plugins: [],
	content: [
		'./src/lib/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}'
	]
}
