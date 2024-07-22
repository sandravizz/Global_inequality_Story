import { group } from "d3";
import DifferenceChart from "$components/charts/DifferenceChart/Chart.svelte";
import data from "$data/data_all.csv";

const formattedData = data.map((d) => ({ ...d, value: +d.gini_pretaxes }));

const groupedByCountry = group(formattedData, (d) => d.country).entries();
const renderData = Array.from(groupedByCountry, ([key, value]) => ({
	country: key,
	region: value[0].region,
	values: value.map((item) => ({ ...item }))
}));

export default {
	components: [DifferenceChart],
	steps: [
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter(
						(d) => d.country === "DK" || d.country === "FI"
					),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					}
				}
			],
			description: {
				title: `Difference chart`,
				text: "Step 1"
			}
		},
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter(
						(d) => d.country === "SE" || d.country === "IN"
					),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					}
				}
			],
			description: {
				title: `Difference chart`,
				text: "Step 2"
			}
		},
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter(
						(d) => d.country === "US" || d.country === "RU"
					),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					}
				}
			],
			description: {
				title: `Difference chart`,
				text: "Step 3"
			}
		}
	]
};
