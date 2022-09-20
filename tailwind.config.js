/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['ui-serif', 'serif']
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
	content: [
		'./src/lib/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}'
	]
}
