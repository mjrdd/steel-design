<script lang="ts">
	import katex from "katex";

	export let render = "";
	export let displayMode = false;
</script>

{@html katex.renderToString(render, { displayMode, throwOnError: false })}
