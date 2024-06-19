<script>
	import { setContext } from "svelte";
	import { autoType } from "d3";
	import { preprocessor } from "$utils/data";

	import Body from "$components/Body.svelte";

	import countries from "$data/wid_countries.csv";
	import gini from "$data/gini_income.csv";
	// import beeswarmScrollyCopy from "$data/beeswarmscrolly_copy.json";
	// import visualisationscript from "$data/multilinescript";

	export let data;

	setContext("data", data.data);
	setContext("gini", preprocessor(gini).map(autoType));
	setContext("countries", preprocessor(countries).map(autoType));
	// setContext("visualisationscript", visualisationscript);
</script>

<Body />
