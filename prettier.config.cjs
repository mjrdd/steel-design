module.exports = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-rust")],
	pluginSearchDirs: ["."],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } },
		{ files: ["tests/*.rs"], options: { printWidth: 80 } }
	]
};
