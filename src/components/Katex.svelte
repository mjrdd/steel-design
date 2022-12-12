<script lang="ts">
	import katex from "katex";
	import { dev } from "$app/environment";

	export let render = "";
	export let displayMode = false;
</script>

{@html katex.renderToString(render, { displayMode, throwOnError: dev })}
