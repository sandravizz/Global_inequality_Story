<script>
	import { setContext } from "svelte";
	import { autoType } from "d3";

	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import version from "$utils/version.js";

	import countries from "$data/wid_countries.csv";
	import gini from "$data/gini_income.csv";

	import beeswarmScrollyCopy from "$data/beeswarmscrolly_copy.json";

	export let data;

	version();

	const preloadFont = [
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
		"https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2",
		"https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2"
	];

	const preprocessor = (data) =>
		data.map((row) => {
			const newRow = {};
			for (const key in row) {
				newRow[key] = row[key] !== undefined ? row[key].toString() : "";
			}
			return newRow;
		});

	setContext("data", data.data);

	setContext("gini", preprocessor(gini).map(autoType));
	setContext("countries", preprocessor(countries).map(autoType));
	setContext("beeswarmScrollyCopy", beeswarmScrollyCopy);
</script>

<Meta {preloadFont} />

<Index />
