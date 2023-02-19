<script lang="ts">
	import { WebviewWindow } from "@tauri-apps/api/window";
	import {
		AISC_ENGLISH,
		AISC_METRIC,
		latexFormat,
		type AiscType,
		type AiscUnits
	} from "$lib/aisc";
	import Katex from "$components/Katex.svelte";
	import { theme } from "$lib/theme";

	let units: AiscUnits = "english";
	let types: AiscType = "W";
	$: shape = (units === "english" ? AISC_ENGLISH : AISC_METRIC)[types].at(
		0
	)?.EDI_Std_Nomenclature;
	$: shapeData = Object.entries(
		(units === "english" ? AISC_ENGLISH : AISC_METRIC)[types].find(
			(item) => item["EDI_Std_Nomenclature"] === shape
		) || []
	);

	function openDatabase() {
		const database = new WebviewWindow("database", {
			title: "AISC Shapes Database v15.0",
			url: "/database"
		});

		database.once("tauri://created", async () => {
			await database.show();
		});

		database.once("tauri://error", async (e) => {
			if (e.id === -1) await database.setFocus();
		});
	}

	let darkMode = $theme === "dark";
	$: theme.set(darkMode ? "dark" : "light");
</script>

<header>
	<div>
		<span class="title">Steel Design</span>
	</div>
	<div>
		<input type="checkbox" id="darkmode" class="switch" bind:checked={darkMode} />
		<label for="darkmode">Dark Mode</label>
	</div>
</header>

<div class="header">
	<div>
		<input type="radio" id="english-unit" name="units" value="english" bind:group={units} />
		<label for="english-unit">English</label>

		<input type="radio" id="metric-unit" name="units" value="metric" bind:group={units} />
		<label for="metric-unit">Metric</label>
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
				<option value={shapes["EDI_Std_Nomenclature"]}
					>{shapes["EDI_Std_Nomenclature"]}</option>
			{/each}
		</select>
	</div>
	<div>
		<button on:click={openDatabase}>Open Database</button>
	</div>
</div>

<table>
	<tbody>
		{#each shapeData as [key, value]}
			<tr>
				<th>
					{#if latexFormat[key]}
						<Katex render={latexFormat[key] || ""} />
					{:else}
						{key}
					{/if}
				</th>
				<td>
					{value}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 24px;
		height: 48px;
	}

	.title {
		margin: 0 32px;
		font-weight: 600;
		font-size: 20px;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 16px;
		margin: 0 16px;
	}

	table {
		margin: 12px 16px;
		border-spacing: 0;
	}

	tr:hover {
		background-color: hsla(0 0% 0% / 0.05);
	}

	th,
	td {
		border-bottom: 1px solid #ddd;
		padding: 0 16px;
		height: 42px;
	}
</style>
