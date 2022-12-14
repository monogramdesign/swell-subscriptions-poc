/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			colors: {
				'origin-citrus': '#9eb300',
				'origin-cyprus': '#0a403a'
			},
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
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
	content: [
		'./src/lib/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}'
	]
}
