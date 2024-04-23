<script>
	import { setContext } from "svelte";
	import { autoType } from "d3";
	import Index from "$components/Index.svelte";

	import countries from "$data/wid_countries.csv";
	import gini from "$data/gini_income.csv";
	import beeswarmScrollyCopy from "$data/beeswarmscrolly_copy.json";

	export let data;

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


<Index />
