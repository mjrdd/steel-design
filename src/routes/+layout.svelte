<script lang="ts">
	import "@fontsource/inter/variable.css";
	import "katex/dist/katex.css";
	import "../app.css";

	import { handleTheme } from "$lib/theme";

	handleTheme();
</script>

<slot />
