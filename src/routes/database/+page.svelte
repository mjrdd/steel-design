<script lang="ts">
	import aiscShapesDatabaseEnglish from "$lib/data/aisc-shapes-english.json";
	import aiscShapesDatabaseMetric from "$lib/data/aisc-shapes-metric.json";
	import { activeUnits } from "$lib/stores";
</script>

<div class="p-8">
	<h2 class="text-xl font-bold">AISC Shapes Database v15.0</h2>

	<label>
		<input type="radio" name="units" bind:group={$activeUnits} value="english" />
		English
	</label>

	<label>
		<input type="radio" name="units" bind:group={$activeUnits} value="metric" />
		Metric
	</label>

	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				{#each Object.keys(($activeUnits === "english" ? aiscShapesDatabaseEnglish : aiscShapesDatabaseMetric)[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each $activeUnits === "english" ? aiscShapesDatabaseEnglish : aiscShapesDatabaseMetric as aiscShapesDatabase, index}
				<tr>
					<th>{index}</th>
					{#each Object.values(aiscShapesDatabase) as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
