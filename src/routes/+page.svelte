<script lang="ts">
	import { onMount } from "svelte";

	interface AISCShapes {
		Type: string;
		EDI_Std_Nomenclature: string;
		AISC_Manual_Label: string;
		T_F: string;
		W: number;
		A: number;
		d: number;
		ddet: number;
		Ht: number | string;
		h: number | string;
		OD: number | string;
		bf: number;
		bfdet: number;
		B: number | string;
		b: number | string;
		ID: number | string;
		tw: number;
		twdet: number;
		"twdet/2": number;
		tf: number;
		tfdet: number;
		t: number | string;
		tnom: number | string;
		tdes: number | string;
		kdes: number;
		kdet: number;
		k1: number;
		x: number | string;
		y: number | string;
		eo: number | string;
		xp: number | string;
		yp: number | string;
		"bf/2tf": number;
		"b/t": number;
		"b/tdes": number | string;
		"h/tw": number;
		"h/tdes": number | string;
		"D/t": number | string;
		Ix: number;
		Zx: number;
		Sx: number;
		rx: number;
		Iy: number;
		Zy: number;
		Sy: number;
		ry: number;
		Iz: number | string;
		rz: number | string;
		Sz: number | string;
		J: number;
		Cw: number;
		C: number | string;
		Wno: number;
		Sw1: number;
		Sw2: number | string;
		Sw3: number | string;
		Qf: number;
		Qw: number;
		ro: number | string;
		H: number | string;
		"tan(a)": number | string;
		Iw: number | string;
		zA: number | string;
		zB: number | string;
		zC: number | string;
		wA: number | string;
		wB: number | string;
		wC: number | string;
		SwA: number | string;
		SwB: number | string;
		SwC: number | string;
		SzA: number | string;
		SzB: number | string;
		SzC: number | string;
		rts: number;
		ho: number;
		PA: number;
		PA2: number | string;
		PB: number;
		PC: number;
		PD: number;
		T: number;
		WGi: number;
		WGo: number | string;
	}

	let aiscShapesEnglish: AISCShapes[] | undefined;
	let aiscShapesMetric: AISCShapes[] | undefined;

	let activeUnits: "english" | "metric" = "english";
	let activeAiscShape = "W44X335";
	let activeAiscShapeData: AISCShapes | undefined;

	function getActiveAiscShapeData(
		units: typeof activeUnits,
		shape: string
	): AISCShapes | undefined {
		if (!(aiscShapesEnglish && aiscShapesMetric)) return;

		return (units === "english" ? aiscShapesEnglish : aiscShapesMetric).find(
			(item) => item["EDI_Std_Nomenclature"] === shape
		);
	}

	onMount(() => {
		const dep1 = import("$lib/data/aisc-shapes-english.json").then((res) => {
			aiscShapesEnglish = res.default;
			return res;
		});

		const dep2 = import("$lib/data/aisc-shapes-metric.json").then((res) => {
			aiscShapesMetric = res.default;
			return res;
		});

		Promise.allSettled([dep1, dep2]).then(() => {
			activeAiscShapeData = getActiveAiscShapeData(activeUnits, activeAiscShape);
		});
	});

	$: activeAiscShape = activeUnits === "english" ? "W44X335" : "W1100X499";
	$: activeAiscShapeData = getActiveAiscShapeData(activeUnits, activeAiscShape);
</script>

<div class="window">
	<div>
		<div class="section">
			<h3>Units</h3>

			<input
				type="radio"
				name="units"
				id="units-english"
				bind:group={activeUnits}
				value="english" />
			<label for="units-english">English</label>

			<input type="radio" name="units" id="units-metric" bind:group={activeUnits} value="metric" />
			<label for="units-metric">Metric</label>
		</div>

		{#if aiscShapesEnglish && aiscShapesMetric}
			<div class="section">
				<select bind:value={activeAiscShape}>
					{#if activeUnits === "english"}
						{#each aiscShapesEnglish as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>{shape["EDI_Std_Nomenclature"]}</option>
						{/each}
					{:else}
						{#each aiscShapesMetric as shape}
							<option value={shape["EDI_Std_Nomenclature"]}>{shape["EDI_Std_Nomenclature"]}</option>
						{/each}
					{/if}
				</select>
			</div>

			<div class="section">
				{#if activeAiscShapeData}
					<table>
						{#each Object.entries(activeAiscShapeData) as [key, value]}
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
		min-width: 100vw;
		min-height: 100vh;
		padding: 16px;
		display: grid;
	}

	.section {
		margin: 16px 0;
	}
</style>
