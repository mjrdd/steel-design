<script lang="ts">
	import aiscShapesDatabaseEnglish from "$lib/data/aisc-shapes-english.json";
	import aiscShapesDatabaseMetric from "$lib/data/aisc-shapes-metric.json";
	import { activeUnits } from "$lib/stores";

	import { AISC_ENGLISH, AISC_METRIC } from "$lib/aisc";

	let units = "english";
	let types = "_W";
</script>

<div class="p-8">
	<h2 class="text-xl font-bold">AISC Shapes Database v15.0</h2>

	<div>
		<label>
			<input type="radio" name="units" bind:group={units} value="english" />
			English
		</label>

		<label>
			<input type="radio" name="units" bind:group={units} value="metric" />
			Metric
		</label>

		<select bind:value={types}>
			{#each Object.keys(units === "english" ? AISC_ENGLISH : AISC_METRIC) as TYPES}
				<option value={TYPES}>{TYPES}</option>
			{/each}
		</select>
	</div>

	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				{#each Object.keys((units === "english" ? AISC_ENGLISH[types] : AISC_METRIC[types])[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each units === "english" ? AISC_ENGLISH[types] : AISC_METRIC[types] as aiscShapesDatabase, index}
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
