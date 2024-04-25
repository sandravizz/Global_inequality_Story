<script>
	import { getContext } from "svelte";
	import * as aq from "arquero";

	import { transformData } from "$utils/arqueroHelpers";

	import BeeswarmForceApplied from "./BeeswarmForce.applied.svelte";
	import HighlightScrolly from "./Highlight.Scrolly.svelte";
	import FilterScrolly from "./Filter.Scrolly.svelte";
	import Tooltip from "../Tooltip.html.svelte";

	const giniData = getContext("gini");
	const countryData = getContext("countries");
	const beeswarmScrollyCopy = getContext("beeswarmScrollyCopy");

	const merge = (arr1, arr2, prop) => {
		const mapping = new Map(arr1.map((item) => [item[prop], item]));
		return arr2.map((d) => ({ ...d, ...mapping.get(d[prop]) }));
	};

	const beeswarmData = merge(countryData, giniData, "country");

	const getDecadeFromYear = (year) => Math.floor(year / 10) * 10;

	const orgTable = aq
		.table(transformData(beeswarmData))
		.derive({
			decade: aq.escape((d) => getDecadeFromYear(d.year)),
			orgValue: (d) => d.value
		})
		.select(aq.not(["year", "value"]));

	const filterSwarmData = orgTable
		.groupby(["decade", "country", "region"])
		.select(aq.not("value"))
		.rollup({
			value: aq.op.mean("orgValue")
		});
</script>

<div id="main">
	<section>
		<h1>Global inequality</h1>
		<p>
			Rising inequality in <Tooltip>income distribution</Tooltip> is one of the most
			persistent global challenges. When looking at the current state of global inequality
			on a country level, we can identify a big variance. Inequality creates instability,
			recession and depression when too much of national income is grabbed by too
			few people, and too much income is taken from the real economy and is accumulated
			between too few people.

			<br />

			By the same token, rising inequality enables the affluent countries,
			global corporations and even individuals to shape the global rules of
			resource allocation in their favour via their more powerful bargaining
			power. Such rules help them to get the lion’s share of global economic
			growth, making them more powerful and further tilting international rules
			to their benefit, fuel- ling rising global inequality (Pogge, 2007)

			<br />

			Ultimately, the research on income inequality is research about the
			political economy of modern capi- talism and helps to reveal where it
			leads humanity.
		</p>

		<FilterScrolly
			component={BeeswarmForceApplied}
			data={filterSwarmData}
			copy={beeswarmScrollyCopy}
			filters={[
				(d) => d.decade === 1980,
				(d) => d.decade === 1990,
				(d) => d.decade === 2000,
				(d) => d.decade === 2010,
				(d) => d.decade === 2020
			]}
		/>

		<h4>The Global Debate on Finance Capitalism</h4>
		<p>
			There has been a wave of neoliberal policies implemented worldwide
			beginning in the 1970s. Policies like deregulation, privatisation and the
			withdrawing of the state from social protection and welfare delivery
			became a common trend across different countries. Probably for the first
			time in economic history in the USA, the share of the national income of
			the top 1% fell from the 16% of pre-World War II rate, to less than 8% in
			the post-war era and stayed at the same level for almost three decades
			(Harvey, 2005). However, by the beginning of the 1970s a combination of
			slowing economic growth, the breakdown of the Bretton Woods system of
			fixed exchange rates, ‘stagflation’ and high unemployment put severe
			strains on state budgets. ‘Keynesian compromise’ appeared to have reached
			its limits and other alternatives to overcome the emerging crisis were
			called on. For its proponents, the moment of neoliberalism had arrived.
			The Austro-German Marxist theoretician was the first to introduce the term
			‘finance capitalism’ and warned of the dangers associated with
			concentration of capital and the transformation of competitive capitalism
			into monopolistic finance capi- talism, thus anticipating the process of
			contemporary financialisation. In the latter, he writes of
			financialisation as ‘a prolonged split between the divergent real and
			financial economies’
		</p>
	</section>
</div>

<style>
	#main {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
	}
</style>
