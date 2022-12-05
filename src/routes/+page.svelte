<script lang="ts">
	import { WebviewWindow } from "@tauri-apps/api/window";
	import {
		aiscShapesDatabaseEnglish,
		aiscShapesDatabaseMetric,
		activeUnits,
		activeAiscShape,
		activeAiscShapeData
	} from "$lib/stores";

	async function openDatabase() {
		const databaseWindow = new WebviewWindow("database-window", {
			title: "AISC Shapes Database v15.0",
			url: "/database"
		});

		await databaseWindow.show();
	}
</script>

<div class="window">
	<div>
		<div class="section">
			<h3>Units</h3>

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
		</div>

		<div class="section">
			<button on:click={openDatabase}>Open Database</button>
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
		grid-template-columns: repeat(auto-fill, 320px);
	}

	.section {
		margin: 16px 0;
	}

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

	select {
		width: 100%;
	}

	table {
		background-color: inherit;
		border-spacing: 0;
		width: 100%;
	}

	tr {
		height: 36px;
	}

	th,
	td {
		padding-left: 16px;
		border-bottom: 1px solid #d1d5d9;
		text-align: left;
	}

	tr:hover {
		background-color: hsl(0, 0%, 90%);
	}
</style>
