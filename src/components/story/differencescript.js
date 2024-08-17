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
				title: `Some countries have small differences`,
				text: `This is <span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>Sweden</span> 
						and this is  <span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px;'>Finland</span>`
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
				}
			],
			description: {
				title: `while others have large differences`,
				text: `<span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px;'>India</span> 
						is always better than <span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>Sweden</span>. 
						This is a fact!`
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
				title: "and some some have large differences that shrink over time",
				text: `But when it comes to <span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>USA</span> 
				and <span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px;'>Russia</span> they switch places
				many times.`
			}
		}
	]
};
