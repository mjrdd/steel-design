/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	bracketSameLine: true,
	pluginSearchDirs: ["."],
	plugins: [require("prettier-plugin-css-order"), require("prettier-plugin-svelte")],
	overrides: [
		{
			files: ["*.svelte"],
			options: {
				parser: "svelte"
			}
		},
		{
			files: ["*.rs"],
			options: {
				plugins: [require("prettier-plugin-rust")]
			}
		}
	]
};
