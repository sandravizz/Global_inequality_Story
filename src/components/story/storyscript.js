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
	layout: "wide",
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
				title: `World GINI Distribution`
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
						strokeOpacity: 0.3,
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
							x: "1998",
							z: "US",
							dy: -32,
							text: "Global average"
						}
					]
				}
			],
			description: {
				title: `Global average`,
				text: "(faked... using US as a proxy for global average... have not calculated the global average yet)"
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
						strokeOpacity: 0.05,
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
					data: renderData.filter((d) => d.region === "Europe"),
					options: {
						stroke: "white",
						strokeOpacity: 0.3,
						strokeWidth: 1
					}
				},

				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) =>
						["SE", "DE", "NL"].includes(d.country)
					),
					options: {
						stroke: "white",
						strokeWidth: 3
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
				}
			],
			description: {
				title: `Europe`,
				text: "All countries in Europe are more equal than the global average."
			}
		}
	]
};
