<script>
	import "../app.css";

	import { onMount } from "svelte";
	import { aiscShapesDatabaseEnglish, aiscShapesDatabaseMetric, subscriptions } from "$lib/stores";

	onMount(() => {
		Promise.allSettled([
			import("$lib/data/aisc-shapes-english.json"),
			import("$lib/data/aisc-shapes-metric.json")
		]).then(([res1, res2]) => {
			if (res1.status === "fulfilled" && res2.status === "fulfilled") {
				$aiscShapesDatabaseEnglish = res1.value.default;
				$aiscShapesDatabaseMetric = res2.value.default;
			}
		});

		return () => {
			subscriptions.forEach((subscription) => subscription());
		};
	});
</script>

<slot />
