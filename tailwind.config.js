const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
				content: ['"Inter"', ...defaultTheme.fontFamily.sans],
				retro: ['"Silkscreen"', ...defaultTheme.fontFamily.sans],
				mono: ['"Jetbrains Mono"', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};
