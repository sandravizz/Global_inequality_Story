<script>
	import { getContext } from "svelte";
	import Swarm from "./Swarm.svelte";
	import HighlightScrolly from "./Highlight.Scrolly.svelte";
	
	const giniData = getContext("gini");
	const countryData = getContext("countries");
	const beeswarmScrollyCopy = getContext("beeswarmScrollyCopy");

	const merge = (arr1, arr2, prop) => {
		const mapping = new Map(arr1.map((item) => [item[prop], item]));
		return arr2.map((d) => ({ ...d, ...mapping.get(d[prop]) }));
	};

	const beeswarmData = merge(countryData, giniData, "country").filter(
		(d) => d.year === 2021
	);

</script>

<div id="main">
	<section>
		<h1>Global inequality</h1>
		<p>
		When looking at the current state of global inequality on a country level, we can 
		identify a big variance. 
		</p>

		<HighlightScrolly
			component={Swarm}
			data={beeswarmData}
			copy={beeswarmScrollyCopy}
			highligtValues={[null, "Asia", "Europe", "Africa", "Americas", "Oceania"]}
			highlightKey={"region"}
		/>

		<p>
		When looking at the current state of global inequality on a country level, we can 
		identify a big variance. 
		</p>
	</section>
</div>

<style>
	#main {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
	}

	:global(#main section) {
		margin: 32px auto;
		padding-top: 32px;
	}

	:global(#main h2 span) {
		background-color: #F2EBDF;
		padding: 0 8px;
	}
</style>
