<script lang="ts">
	import { AISC_ENGLISH, AISC_METRIC, type AiscType, type AiscUnits } from "$lib/aisc";

	let units: AiscUnits = "english";
	let types: AiscType = "W";
</script>

<h1>AISC Shapes Database v15.0</h1>

<div class="header">
	<div>
		<label>
			<input type="radio" name="units" value="english" bind:group={units} />
			English
		</label>
		<label>
			<input type="radio" name="units" value="metric" bind:group={units} />
			Metric
		</label>
	</div>
	<div>
		<select bind:value={types}>
			{#each Object.keys(units === "english" ? AISC_ENGLISH : AISC_METRIC) as TYPES}
				<option value={TYPES}>{TYPES}</option>
			{/each}
		</select>
	</div>
</div>

<table>
	<thead>
		<tr>
			{#each Object.keys((units === "english" ? AISC_ENGLISH[types] : AISC_METRIC[types])[0]) as key}
				<th>{key}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each units === "english" ? AISC_ENGLISH[types] : AISC_METRIC[types] as aiscShapesDatabase}
			<tr>
				{#each Object.values(aiscShapesDatabase) as value}
					<td>{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.header {
		display: flex;
		align-items: center;
		gap: 16px;
		margin: 16px 0;
	}
</style>
