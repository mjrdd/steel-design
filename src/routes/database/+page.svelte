<script lang="ts">
	import aiscShapesDatabaseEnglish from "$lib/data/aisc-shapes-english.json";
	import aiscShapesDatabaseMetric from "$lib/data/aisc-shapes-metric.json";
	import { activeUnits } from "$lib/stores";
</script>

<div>
	<div class="toggle-units">
		<label>
			<input type="radio" name="units" bind:group={$activeUnits} value="english" />
			English
		</label>

		<label>
			<input type="radio" name="units" bind:group={$activeUnits} value="metric" />
			Metric
		</label>
	</div>

	<table>
		<tr>
			{#each Object.keys(($activeUnits === "english" ? aiscShapesDatabaseEnglish : aiscShapesDatabaseMetric)[0]) as key}
				<th>{key}</th>
			{/each}
		</tr>

		{#each $activeUnits === "english" ? aiscShapesDatabaseEnglish : aiscShapesDatabaseMetric as aiscShapesDatabase}
			<tr>
				{#each Object.values(aiscShapesDatabase) as value}
					<td>{value}</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style>
	.toggle-units {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
	}

	.toggle-units label {
		padding: 8px 16px;
		cursor: pointer;
	}

	.toggle-units label:hover {
		background-color: hsl(0, 0%, 90%);
	}
</style>
