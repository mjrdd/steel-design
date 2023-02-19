/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	bracketSameLine: true,
	plugins: [
		require("prettier-plugin-svelte"),

		// https://github.com/tailwindlabs/prettier-plugin-tailwindcss
		require("prettier-plugin-tailwindcss")
	],
	pluginSearchDirs: false,
	overrides: [
		{ files: ["*.svelte"], options: { parser: "svelte" } },
		{
			files: ["*.rs"],
			options: {
				bracketSameLine: false,
				plugins: [require("prettier-plugin-rust")]
			}
		}
	]
};
