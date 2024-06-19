/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}'
	],
	theme: {
		extend: {},
		screens: {
			m98: '999px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1792px'
		}
	},
	plugins: []
};
