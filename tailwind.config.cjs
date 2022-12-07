const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["corporate"]
	}
};
