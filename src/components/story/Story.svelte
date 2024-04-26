<script>
	import { getContext } from "svelte";
	import * as aq from "arquero";

	import { transformData } from "$utils/arqueroHelpers";

	import BeeswarmForceApplied from "./BeeswarmForce.applied.svelte";
	// import HighlightScrolly from "./Highlight.Scrolly.svelte";
	import FilterScrolly from "./Filter.Scrolly.svelte";
	import Tooltip from "../Tooltip.html.svelte";

	const giniData = getContext("gini");
	const countryData = getContext("countries");

	const merge = (arr1, arr2, prop) => {
		const mapping = new Map(arr1.map((item) => [item[prop], item]));
		return arr2.map((d) => ({ ...d, ...mapping.get(d[prop]) }));
	};

	const beeswarmData = merge(countryData, giniData, "country");

	const getDecadeFromYear = (year) => Math.floor(year / 10) * 10;

	const table = aq.table(transformData(beeswarmData));

	const tableWithId = table
		.derive({
			decade: aq.escape((d) => getDecadeFromYear(d.year)),
			orgValue: (d) => d.value
		})
		.select(aq.not(["year", "value"]));

	const data = tableWithId
		.groupby(["decade", "country", "region"])
		.select(aq.not("value"))
		.rollup({
			value: aq.op.mean("orgValue")
		})
		.derive({
			id: aq.op.row_number()
		})
		.objects();

	const script = {
		components: [
			BeeswarmForceApplied,
			BeeswarmForceApplied,
			BeeswarmForceApplied
		],
		steps: [
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 1980)
					}
				],
				description: {
					title: "1980s",
					text: "The era of 'Reaganomics' and 'Thatcherism' marked a global shift toward neoliberal policies, with deregulation, privatization, and tax cuts driving economic growth but also widening income inequality."
				}
			},
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 1990)
					}
				],
				description: {
					title: "1990s",
					text: "Globalization and the rise of the Internet fueled rapid economic expansion, with the fall of the Soviet Union opening up new markets and technology companies beginning to transform the way business was conducted."
				}
			},
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 2000)
					}
				],
				description: {
					title: "2000s",
					text: "The decade was characterized by the dot-com boom and bust, followed by a housing bubble, leading to a financial crisis in 2008 that triggered a global recession and prompted unprecedented government intervention to stabilize economies."
				}
			},
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 2010)
					}
				],
				description: {
					title: "2010s",
					text: "The aftermath of the financial crisis saw a period of slow recovery, central bank stimulus, and the rise of new technologies like smartphones and social media, with continued globalization alongside a growing backlash against income inequality and global trade agreements."
				}
			},
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 2020)
					}
				],
				description: {
					title: "2020s",
					text: "The COVID-19 pandemic disrupted global economies, leading to massive government stimulus and shifts toward remote work, while renewed focus on climate change and social equity began to reshape business practices and international cooperation."
				}
			},
			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: null,
						excludeIds: [],
						data: data.filter((d) => d.decade === 2020 && d.region === "Europe")
					}
				],
				description: {
					title: "Only europe",
					text: "Testing out filtering."
				}
			},

			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: data
							.filter((d) => d.decade === 2020 && d.region === "Europe")
							.map((d) => d.id)
							.slice(0, 5),
						excludeIds: [],
						data: data.filter((d) => d.decade === 2020 && d.region === "Europe")
					}
				],
				description: {
					title: "Some highlights",
					text: "These countries are highlighted because I am trying out some new functionality."
				}
			},

			{
				layers: [
					{
						componentIndex: 0,
						visible: true,
						highlightIds: [],
						excludeIds: [],
						data: data.filter((d) => d.decade === 2020 && d.region === "Europe")
					},
					{
						componentIndex: 1,
						visible: true,
						highlightIds: [0],
						highlightColor: "#ADDFFF",
						animation: false,
						excludeIds: [],
						data: [
							{
								id: 0,
								country: "mean",
								value:
									data
										.filter((d) => d.decade === 2020 && d.region === "Europe")
										.reduce((acc, cur) => acc + cur.value, 0) /
									data.filter((d) => d.decade === 2020 && d.region === "Europe")
										.length
							}
						],
						radius: 8
					},
					{
						componentIndex: 2,
						visible: true,
						highlightIds: [0],
						highlightColor: "#ADDFFF90",
						animation: false,
						excludeIds: [],
						data: [
							{
								id: 0,
								country: "mean",
								value:
									data
										.filter((d) => d.decade === 1980 && d.region === "Europe")
										.reduce((acc, cur) => acc + cur.value, 0) /
									data.filter((d) => d.decade === 1980 && d.region === "Europe")
										.length
							}
						],
						radius: 8
					}
				],
				description: {
					title: "The mean",
					text: "Could have been calculated but this randomly picks a country from the data set and calls it the mean. I also set the color and radius manually."
				}
			}
		]
	};

	$: console.log(
		"mean",
		data
			.filter((d) => d.decade === 2020 && d.region === "Europe")
			.reduce((acc, cur) => acc + cur.value, 0),
		data.filter((d) => d.decade === 2020 && d.region === "Europe").length
	);
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

		<FilterScrolly {script} />

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
