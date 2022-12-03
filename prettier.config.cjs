/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	bracketSameLine: true,
	endOfLine: "crlf",
	plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-rust")],
	pluginSearchDirs: ["."],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } },
		{ files: ["tests/*.rs"], options: { printWidth: 80 } }
	]
};
