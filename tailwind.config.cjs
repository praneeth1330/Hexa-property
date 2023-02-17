/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": " 5px 4px 24px rgba(0, 0, 0, 0.25);",
			},
		},
	},
	plugins: [],
};
