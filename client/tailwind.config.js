/** @type {import('tailwindcss').Config} */
module.exports = {
	backgroundImage: {
		mapbg:
			"url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
	},
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0 35px 60px -5px rgba(30, 51, 51, 100)",
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		],
	},
};
