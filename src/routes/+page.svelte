<script lang="ts">
	import { onMount } from "svelte";
	import type { AISCShapes } from "$lib/aisc-shapes.types";

	let aiscShapesEnglish: AISCShapes[] | undefined;
	let aiscShapesMetric: AISCShapes[] | undefined;

	let activeUnits: "english" | "metric" = "english";
	let activeAiscShape = "W44X335";
	let activeAiscShapeData: AISCShapes | undefined;

	function getActiveAiscShapeData(units: typeof activeUnits, shape: string) {
		if (!(aiscShapesEnglish && aiscShapesMetric)) return;

		return (units === "english" ? aiscShapesEnglish : aiscShapesMetric).find(
			(item) => item["EDI_Std_Nomenclature"] === shape
		);
	}

	onMount(() => {
		const dep1 = import("$lib/data/aisc-shapes-english.json").then((res) => {
			aiscShapesEnglish = res.default;
			return res;
		});

		const dep2 = import("$lib/data/aisc-shapes-metric.json").then((res) => {
			aiscShapesMetric = res.default;
			return res;
		});

		Promise.allSettled([dep1, dep2]).then(() => {
			activeAiscShapeData = getActiveAiscShapeData(activeUnits, activeAiscShape);
		});
	});

	$: activeAiscShape = activeUnits === "english" ? "W44X335" : "W1100X499";
	$: activeAiscShapeData = getActiveAiscShapeData(activeUnits, activeAiscShape);
</script>

<div class="window">
	<div>
		<div class="section">
			<h3>Units</h3>

			<input
				type="radio"
				name="units"
				id="units-english"
				bind:group={activeUnits}
				value="english" />
			<label for="units-english">English</label>

			<input type="radio" name="units" id="units-metric" bind:group={activeUnits} value="metric" />
			<label for="units-metric">Metric</label>
		</div>

		{#if aiscShapesEnglish && aiscShapesMetric}
			<div class="section">
				<select bind:value={activeAiscShape}>
					{#if activeUnits === "english"}
						{#each aiscShapesEnglish as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>{shape["EDI_Std_Nomenclature"]}</option>
						{/each}
					{:else}
						{#each aiscShapesMetric as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>{shape["EDI_Std_Nomenclature"]}</option>
						{/each}
					{/if}
				</select>
			</div>

			<div class="section">
				{#if activeAiscShapeData}
					<table>
						{#each Object.entries(activeAiscShapeData) as [key, value]}
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
