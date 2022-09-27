/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			teal: "#54BAB9",
			darkGrey: "#444444",
			lightGrey: "#ACB3C0",
			red: "#CD211D",
			green: "#1AB45D",
		},
	},
	plugins: [],
};
