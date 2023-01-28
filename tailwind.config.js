/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-picture': "url('/src/assets/bg.jpg)",
			},
			container: {
				center: true,
			},
			colors: {
				'weather-primary': '#00668A',
				'weather-secondary': '#004E71',
			},
		},
	},
	plugins: [],
};
