import { onDestroy } from "svelte";
import { writable } from "svelte/store";

export const theme = writable<string>();

export function handleTheme() {
	theme.set(localStorage.getItem("theme") || "light");
	const app = document.querySelector<HTMLElement>("#app");

	const unsubscribe = theme.subscribe((state) => {
		if (app) {
			app.dataset.theme = state;
		}

		localStorage.setItem("theme", state);
	});

	onDestroy(() => {
		unsubscribe();
	});
}
