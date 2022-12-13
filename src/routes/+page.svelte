<script lang="ts">
	import { WebviewWindow } from "@tauri-apps/api/window";
	import {
		aiscShapesDatabaseEnglish,
		aiscShapesDatabaseMetric,
		activeUnits,
		activeAiscShape,
		activeAiscShapeData
	} from "$lib/stores";
	import { AISC_ENGLISH, AISC_METRIC } from "$lib/data/json";
	console.log(AISC_ENGLISH, AISC_METRIC);

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
					bind:group={$activeUnits} />
				English
			</label>

			<label class="flex items-center gap-4">
				<input
					type="radio"
					name="units"
					value="metric"
					class="radio radio-xs"
					bind:group={$activeUnits} />
				Metric
			</label>

			<button class="btn btn-sm btn-primary" on:click={openDatabase}>Open Database</button>

			{#if $aiscShapesDatabaseEnglish && $aiscShapesDatabaseMetric}
				<select
					class="select select-sm select-bordered w-full max-w-xs"
					bind:value={$activeAiscShape}>
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

				{#if $activeAiscShapeData}
					<table class="table table-compact w-full">
						<tbody>
							{#each Object.entries($activeAiscShapeData) as [key, value]}
								<tr>
									<th>{key}</th>
									<td>{value}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			{:else}
				<p>Loading AISC Shapes data...</p>
			{/if}
		</div>
	</div>
</div>
