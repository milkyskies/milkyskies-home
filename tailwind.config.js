/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"NOTO SANS MONO CJK"', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			defaultFlavour: 'mocha',
			prefix: 'ctp'
		})
	]
};
