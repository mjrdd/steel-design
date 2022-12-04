<script lang="ts">
	import { onMount } from "svelte";
	import {
		aiscShapesDatabaseEnglish,
		aiscShapesDatabaseMetric,
		activeUnits,
		activeAiscShape,
		activeAiscShapeData,
		subscriptions
	} from "$lib/stores";

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

<div class="window">
	<div>
		<div class="section">
			<h3>Units</h3>

			<input
				type="radio"
				name="units"
				id="units-english"
				bind:group={$activeUnits}
				value="english" />
			<label for="units-english">English</label>

			<input type="radio" name="units" id="units-metric" bind:group={$activeUnits} value="metric" />
			<label for="units-metric">Metric</label>
		</div>

		{#if $aiscShapesDatabaseEnglish && $aiscShapesDatabaseMetric}
			<div class="section">
				<select bind:value={$activeAiscShape}>
					{#if $activeUnits === "english"}
						{#each $aiscShapesDatabaseEnglish as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>
								{shape["EDI_Std_Nomenclature"]}
							</option>
						{/each}
					{:else}
						{#each $aiscShapesDatabaseMetric as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>
								{shape["EDI_Std_Nomenclature"]}
							</option>
						{/each}
					{/if}
				</select>
			</div>

			<div class="section">
				{#if $activeAiscShapeData}
					<table>
						{#each Object.entries($activeAiscShapeData) as [key, value]}
							<tr>
								<th>{key}</th>
								<td>{value}</td>
							</tr>
						{/each}
					</table>
				{/if}
			</div>
		{:else}
			<p>Loading AISC Shapes data...</p>
		{/if}
	</div>
</div>

<style>
	.window {
		padding: 16px;
		display: grid;
	}

	.section {
		margin: 16px 0;
	}
</style>
