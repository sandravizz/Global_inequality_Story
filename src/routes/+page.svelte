<script>
	import { setContext } from "svelte";
	import { group, autoType } from "d3";

	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import mapData from "$data/map_data.json";

	import areaData from "$data/area_data.json";
	import areaCopy from "$data/area_copy.json";

	import countries from "$data/wid_countries.csv";
	import gini from "$data/gini_1995-2022_all.csv";

	import beeswarmScrollyCopy from "$data/beeswarmscrolly_copy.json";

	export let data;

	version();

	const preloadFont = [
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
		"https://pudding.cool/assets/fonts/national/National2Web-Regular.woff2",
		"https://pudding.cool/assets/fonts/national/National2Web-Bold.woff2"
	];

	// converting all values to strings or assigning an empty string if the value is undefined
	const preprocessor = (data) =>
		data.map((row) => {
			const newRow = {};
			for (const key in row) {
				newRow[key] = row[key] !== undefined ? row[key].toString() : "";
			}
			return newRow;
		});

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
	setContext("mapData", mapData);
	setContext(
		"areaData",
		Array.from(
			group(areaData, (d) => d.category),
			([_, value]) => value
		)
	);
	setContext("areaCopy", areaCopy);
	setContext("gini", preprocessor(gini).map(autoType));
	setContext("countries", preprocessor(countries).map(autoType));
	setContext("beeswarmScrollyCopy", beeswarmScrollyCopy);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />

<Index />
