<script lang="ts">
	import { aiscShapesDatabaseEnglish, aiscShapesDatabaseMetric, activeUnits } from "$lib/stores";
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

	{#if $aiscShapesDatabaseEnglish && $aiscShapesDatabaseMetric}
		<table>
			<tr>
				{#each Object.keys(($activeUnits === "english" ? $aiscShapesDatabaseEnglish : $aiscShapesDatabaseMetric)[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>

			{#each $activeUnits === "english" ? $aiscShapesDatabaseEnglish : $aiscShapesDatabaseMetric as aiscShapesDatabase}
				<tr>
					{#each Object.values(aiscShapesDatabase) as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}
		</table>
	{/if}
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
