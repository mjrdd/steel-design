import { derived, writable, type Unsubscriber } from "svelte/store";
import type { AISCShapes } from "./aisc-shapes.types";

const subscriptions: Unsubscriber[] = [];

const aiscShapesDatabaseEnglish = writable<AISCShapes[] | undefined>();
const aiscShapesDatabaseMetric = writable<AISCShapes[] | undefined>();

const activeUnits = writable<"english" | "metric">("english");
const activeAiscShape = writable<string>("W44X335");

subscriptions.push(
	activeUnits.subscribe((value) => {
		activeAiscShape.set(value === "english" ? "W44X335" : "W1100X499");
	})
);

const activeAiscShapeData = derived(
	[aiscShapesDatabaseEnglish, aiscShapesDatabaseMetric, activeUnits, activeAiscShape],
	([aiscShapesEnglish, aiscShapesMetric, units, shape]) => {
		if (!(aiscShapesEnglish && aiscShapesMetric)) return;

		return (units === "english" ? aiscShapesEnglish : aiscShapesMetric).find(
			(item) => item["EDI_Std_Nomenclature"] === shape
		);
	}
);

export {
	aiscShapesDatabaseEnglish,
	aiscShapesDatabaseMetric,
	activeUnits,
	activeAiscShape,
	activeAiscShapeData,
	subscriptions
};
