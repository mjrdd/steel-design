<script lang="ts">
	import { WebviewWindow } from "@tauri-apps/api/window";
	import { AISC_ENGLISH, AISC_METRIC, type AiscType, type AiscUnits } from "$lib/aisc";

	let units: AiscUnits = "english";
	let types: AiscType = "W";
	$: shape = (units === "english" ? AISC_ENGLISH : AISC_METRIC)[types].at(0)?.EDI_Std_Nomenclature;

	async function openDatabase() {
		const database = new WebviewWindow("database", {
			title: "AISC Shapes Database v15.0",
			url: "/database"
		});

		await database.show();
	}
</script>

<h1>AISC Shape Properties</h1>

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
			{#each Object.keys(units === "english" ? AISC_ENGLISH : AISC_METRIC) as _type}
				<option value={_type}>{_type}</option>
			{/each}
		</select>
	</div>
	<div>
		<select bind:value={shape}>
			{#each (units === "english" ? AISC_ENGLISH : AISC_METRIC)[types] as shapes}
				<option value={shapes["EDI_Std_Nomenclature"]}>{shapes["EDI_Std_Nomenclature"]}</option>
			{/each}
		</select>
	</div>
	<div>
		<button on:click={openDatabase}>Open Database</button>
	</div>
</div>

<table>
	<tbody>
		{#each Object.entries((units === "english" ? AISC_ENGLISH : AISC_METRIC)[types].find((r) => r["EDI_Std_Nomenclature"] === shape) || []) as [key, value]}
			<tr>
				<th>{key}</th>
				<td>{value}</td>
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
