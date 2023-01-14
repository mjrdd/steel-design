<script lang="ts">
	import "@mjrdd/inter";
	import "katex/dist/katex.css";
	import "../app.css";

	import { handleTheme } from "$lib/theme";

	handleTheme();
</script>

<slot />
