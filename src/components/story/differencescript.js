import DifferenceChart from "$components/charts/DifferenceChart/Chart.svelte";
import data from "$data/data_diff.csv";

const countryCodes = ["US", "SE", "DE"];

const renderData = countryCodes.flatMap((countryCode) => {
	const countryData = data.filter((d) => d.country === countryCode);
	return [
		{
			country: countryCode,
			type: "lowest50",
			values: countryData.map((d) => ({ year: d.year, value: +d.lowest_50 }))
		},
		{
			country: countryCode,
			type: "highest10",
			values: countryData.map((d) => ({ year: d.year, value: +d.highest_10 }))
		}
	];
});

export default {
	components: [DifferenceChart],
	steps: [
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter((d) => d.country === "US"),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					}
				}
			],
			description: {
				title: `The income gap grows`,
				text: `The USA is a good case where the 
						<span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>top 10%</span> 
						have massively increased their portion of the total wealth compared to the 
						<span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px; white-space: nowrap;'>lower 50%</span>
						of the population.`
			}
		},
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter((d) => d.country === "SE"),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					},
					annotations: [
						{
							x: "1990",
							text: "Housing bubble"
						},
						{
							x: "2000",
							text: "Dot-com bubble"
						},
						{
							x: "2009",
							text: "Global financial crisis"
						}
					]
				}
			],
			description: {
				title: `The financial effects`,
				text: `In Sweden the 
						<span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>top 10%</span> 
						have switched places with the 
						<span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px;'>lower 50%</span>
						during the housinig and banking crisis of 1990-1994, the dot-com bubble of 2000 and the global financial crisis of 2009.`
			}
		},

		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData.filter((d) => d.country === "DE"),
					options: {
						stroke: ["#ff4d4d", "#4da6ff"],
						strokeOpacity: 1,
						strokeWidth: 2
					},
					annotations: [
						{
							x: "1989",
							text: "Fall of Berlin wall"
						},
						{
							x: "2004",
							text: "What happend here?"
						},
						{
							x: "2019",
							text: "Covid"
						}
					]
				}
			],
			description: {
				title: `Political effects`,
				text: `Germany saw a COVID effect with large spending to keep people working. Here the difference between the
						<span style='background: #ff4d4d; color: #fff; padding: 2px 4px; margin: 0 2px;'>top 10%</span> 
						and the
						<span style='background: #4da6ff; color: #fff; padding: 2px 4px; margin: 0 2px;'>lower 50%</span>
						have decresed since the pandemic. The same, but smaller happend after the re-unification of East and West Germany in the 1990s
						after the fall of the Berlin wall.`
			}
		}
	]
};
