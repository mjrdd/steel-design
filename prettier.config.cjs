/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	pluginSearchDirs: ["."],
	overrides: [
		{
			files: ["*.svelte"],
			options: {
				parser: "svelte",
				bracketSameLine: true,
				plugins: [require("prettier-plugin-svelte")]
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
