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

export default {
	layout: "fullwidth",
	components: [MultilineChart, MultilineChart, MultilineChart, MultilineChart],
	steps: [
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#fff",
						strokeOpacity: 1,
						strokeWidth: 0.5,
						fill: "#fff"
					}
				}
			],
			description: {
				title: `World GINI Distribution`,
				text: "group by region, filter by 2010"
			}
		},
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#fff",
						strokeOpacity: 0.6,
						strokeWidth: 0.5
					}
				},
				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["US"].includes(d.country)),
					options: {
						stroke: "red",
						strokeWidth: 4
					},
					annotations: [
						{
							x: "1995",
							z: "US",
							dy: -24,
							text: "Global average"
						}
					]
				}
			],
			description: {
				title: `World GINI Distribution`,
				text: "group by region, filter by 2010"
			}
		},
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#fff",
						strokeOpacity: 0.6,
						strokeWidth: 0.5
					}
				},

				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) =>
						["SE", "DE", "NL"].includes(d.country)
					),
					options: {
						stroke: "lightblue",
						strokeWidth: 2
					},
					annotations: [
						{
							x: "2010",
							z: "SE",
							dy: -40,
							text: "Sweden"
						},
						{
							x: "2007",
							z: "DE",
							dy: 0,
							text: "Germany"
						},
						{
							x: "1995",
							z: "NL",
							dy: -24,
							text: "Netherlands"
						}
					]
				},

				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) => d.region === "Asia"),
					options: {
						stroke: "pink",
						strokeWidth: 2
					}
				}
			],
			description: {
				title: `Asia and Europe`,
				text: "group by region, filter by 2010"
			}
		}
	]
};
