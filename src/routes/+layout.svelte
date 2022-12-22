<script lang="ts">
	import "@fontsource/inter";
	import "katex/dist/katex.css";
	import "../app.css";

	import { handleTheme } from "$lib/theme";

	handleTheme();
</script>

<slot />
