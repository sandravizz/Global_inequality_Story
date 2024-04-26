<script>
	import { setContext } from "svelte";
	import { autoType } from "d3";
	import { preprocessor } from "$utils/data";

	import Index from "$components/Index.svelte";

	import countries from "$data/wid_countries.csv";
	import gini from "$data/gini_income.csv";
	import beeswarmScrollyCopy from "$data/beeswarmscrolly_copy.json";

	export let data;

	setContext("data", data.data);
	setContext("gini", preprocessor(gini).map(autoType));
	setContext("countries", preprocessor(countries).map(autoType));
	setContext("beeswarmScrollyCopy", beeswarmScrollyCopy);
</script>

<Index />
