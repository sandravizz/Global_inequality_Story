import { group } from "d3";
import MultilineChart from "$components/charts/LineChart/MultilineChart.svelte";
import data from "$data/data_all.csv";

const formattedData = data.map((d) => ({ ...d, value: +d.gini_pretaxes }));

const groupedByCountry = group(formattedData, (d) => d.country).entries();
const renderData = Array.from(groupedByCountry, ([key, value]) => ({
	country: key,
	region: value[0].region,
	values: value.map((item) => ({ ...item }))
}));

// console.log(groupedByCountry);
// console.log(renderData);

export default {
	components: [
		MultilineChart,
		MultilineChart,
		MultilineChart,
		MultilineChart,
		MultilineChart
	],
	steps: [
		//The 1. step is to introduce the two many variables which are time and gini.
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 1,
						strokeWidth: 0.4,
						fill: "#d5f2f2"
					},
					annotations: [
						{
							y: 0,
							dy: 10,
							text: "Gini 0 | Equality"
						},
						{
							y: 1,
							dy: -25,
							text: "Gini 1 | Inequality"
						}
					]
				},
				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["US"].includes(d.country)),
					options: {
						stroke: "#FE5DBA",
						strokeWidth: 0
					}
				}
			],
			description: {
				title: `4 Decades of analysis`,
				text: "Let's have a look at the last 4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		},
		//The 2. step is to introduce the global average line as a flat line.
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0.8,
						strokeWidth: 0.4
					},
					annotations: [
						{
							x: "2009",
							text: "Financial crisis"
						},
						{
							x: "2019",
							text: "Covid"
						},
						{
							x: "1989",
							text: "Fall of Berlin wall"
						}
					]
				},
				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["US"].includes(d.country)),
					options: {
						stroke: "#FE5DBA",
						strokeWidth: 0
					}
				}
			],
			description: {
				title: `World GINI Distribution`,
				text: "Let's have a look at the last 4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		},
		//The third step introduces all lines that made up the global average.
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0.7,
						strokeWidth: 0.4
					}
				},
				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["US"].includes(d.country)),
					options: {
						stroke: "#FE5DBA",
						strokeWidth: 4
					},
					annotations: [
						{
							x: "1998",
							z: "US",
							dy: -32,
							text: "Global average"
						},
						{
							x: "2009",
							text: "Financial crisis"
						},
						{
							x: "2019",
							text: "Covid"
						},
						{
							x: "1989",
							text: "Fall of Berlin wall"
						}
					]
				},
				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => d.region === "Europe"),
					options: {
						stroke: "red",
						strokeWidth: 0,
						strokeOpacity: 1
					}
				}
			],
			description: {
				title: `Global average`,
				text: "Let's have a look at the last 4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		},
		//The fourth step introduces all lines that belong to Europe.
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0.4,
						strokeWidth: 0.4
					},
					annotations: [
						{
							x: "2009",
							text: "Financial crisis"
						},
						{
							x: "2019",
							text: "Covid"
						},
						{
							x: "1989",
							text: "Fall of Berlin wall"
						}
					]
				},
				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => d.region === "Europe"),
					options: {
						stroke: "red",
						strokeWidth: 1,
						strokeOpacity: 1
					}
				}
			],
			description: {
				title: `Europe`,
				text: "Let's have a look at the last 4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		},
		//The fourth step introduces all lines that made up the global average.
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0,
						strokeWidth: 0.5
					}
				},

				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["US"].includes(d.country)),
					options: {
						stroke: "red",
						strokeWidth: 2,
						strokeOpacity: 0.8
					}
				},

				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => d.region === "Asia"),
					options: {
						stroke: "white",
						strokeOpacity: 0.5,
						strokeWidth: 0.5
					}
				},

				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) =>
						["CN", "JP", "IN"].includes(d.country)
					),
					options: {
						stroke: "white",
						strokeWidth: 0
					},
					annotations: [
						{
							x: "2010",
							z: "IN",
							dy: 8,
							text: "India"
						},
						{
							x: "2012",
							z: "JP",
							dy: -28,
							text: "Japan"
						},
						{
							x: "2014",
							z: "CN",
							dy: 0,
							text: "China"
						}
					]
				}
			],
			description: {
				title: `Asia`,
				text: "While in Asia the story is more complex..."
			}
		}
	]
};
