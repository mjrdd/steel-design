<script lang="ts">
	import { WebviewWindow } from "@tauri-apps/api/window";
	import { AISC_ENGLISH, AISC_METRIC } from "$lib/aisc";

	let units = "english";
	let types = "_MC";
	let shape = "";

	async function openDatabase() {
		const databaseWindow = new WebviewWindow("database-window", {
			title: "AISC Shapes Database v15.0",
			url: "/database"
		});

		await databaseWindow.show();
	}
</script>

<div class="p-4">
	<div class="card w-96 bg-base-100 shadow-md">
		<div class="card-body">
			<h2 class="card-title">AISC Shape Properties</h2>

			<label class="flex items-center gap-4">
				<input
					type="radio"
					name="units"
					value="english"
					class="radio radio-xs"
					bind:group={units} />
				English
			</label>

			<label class="flex items-center gap-4">
				<input type="radio" name="units" value="metric" class="radio radio-xs" bind:group={units} />
				Metric
			</label>

			<button class="btn btn-sm btn-primary" on:click={openDatabase}>Open Database</button>

			<select bind:value={types}>
				{#each Object.keys(units === "english" ? AISC_ENGLISH : AISC_METRIC) as _type}
					<option value={_type}>{_type}</option>
				{/each}
			</select>

			<select class="select select-sm select-bordered w-full max-w-xs" bind:value={shape}>
				{#each (units === "english" ? AISC_ENGLISH : AISC_METRIC)[types] as shapes}
					<option value={shapes["EDI_Std_Nomenclature"]}>
						{shapes["EDI_Std_Nomenclature"]}
					</option>
				{/each}
			</select>

			<table class="table table-compact w-full">
				<tbody>
					{#each Object.entries((units === "english" ? AISC_ENGLISH : AISC_METRIC)[types].find((r) => r["EDI_Std_Nomenclature"] === shape) || []) as [key, value]}
						<tr>
							<th>{key}</th>
							<td>{value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
