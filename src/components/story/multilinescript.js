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
		//1. Chart introduction
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0.7,
						strokeWidth: 0.4,
						fill: "#d5f2f2"
					},
					annotations: [
						{
							y: 0,
							dy: -18,
							text: "  >  Complete inequality"
						}
					]
				},
				{
					key: "country",
					componentIndex: 1,
					data: renderData.filter((d) => ["WO"].includes(d.country)),
					options: {
						stroke: "#7190feff",
						strokeWidth: 0
					}
				}
			],
			description: {
				title: `Gini by country 1980 - 2023`,
				text: "The most commonly used measurement for economic inequality is the Gini index, where 0 means complete equality, everyone has the same and 1 indicates complete inequality, one person has everything. In this line chart the basis for the Gini index is pretax income.  We look at the development over last 4 decades on a country level, meaning every line represents the development of one country."
			}
		},
		//2. Global average
		{
			charts: [
				{
					key: "country",
					componentIndex: 0,
					data: renderData,
					options: {
						stroke: "#d5f2f2",
						strokeOpacity: 0.5,
						strokeWidth: 0.4
					},
					annotations: [
						{
							y: 0,
							dy: -18,
							text: "  >  Complete inequality"
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
					componentIndex: 1,
					data: renderData.filter((d) => ["WO"].includes(d.country)),
					options: {
						stroke: "#7190feff",
						strokeWidth: 4
					}
				},
				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => ["WO"].includes(d.country)),
					options: {
						stroke: "#7190feff",
						strokeWidth: 0
					}
				},
				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) => d.region === "QE"),
					options: {
						stroke: "#fe5dbaff",
						strokeWidth: 0,
						strokeOpacity: 1
					}
				}
			],
			description: {
				title: `One flat line ?`,
				text: "Looking at the<span style='background: #020100ff; color: #7190feff; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Global average</span>we see a line rather flat meaning that there hasn’t been much change on this aggregated level. Someone might questioning if the world actually has become more unequal over the last decodes as commonly reported. So let’s investigate by decomposing the world. 🌎🤓"
			}
		},
		//3. Global vs. European average
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
							y: 0,
							dy: -18,
							text: "  >  Complete inequality"
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
					componentIndex: 1,
					data: renderData.filter((d) => ["QE"].includes(d.country)),
					options: {
						stroke: "#fe5dbaff",
						strokeWidth: 4
					}
				},
				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => ["WO"].includes(d.country)),
					options: {
						stroke: "#7190feff",
						strokeWidth: 4
					}
				},
				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) => d.region === "Europe"),
					options: {
						stroke: "#fe5dbaff",
						strokeWidth: 0,
						strokeOpacity: 1
					}
				}
			],
			description: {
				title: `Europe most equal`,
				text: "Let's have   <span style='background: #7190feff; color: #d5f2f2; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 0 2px;'> Global average </span> a look at the last <span style='background: #fe5dbaff; color: #d5f2f2; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 0 4px;'> European average </span>  4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		},
		//4. Global, European average and European countries
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
							y: 0,
							dy: -18,
							text: "  >  Complete inequality"
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
					componentIndex: 1,
					data: renderData.filter((d) => ["QE"].includes(d.country)),
					options: {
						stroke: "#fe5dbaff",
						strokeWidth: 4
					}
				},
				{
					key: "country",
					componentIndex: 2,
					data: renderData.filter((d) => ["WO"].includes(d.country)),
					options: {
						stroke: "#7190feff",
						strokeWidth: 4
					}
				},
				{
					key: "country",
					componentIndex: 3,
					data: renderData.filter((d) => d.region === "Europe"),
					options: {
						stroke: "#fe5dbaff",
						strokeWidth: 0.5,
						strokeOpacity: 1
					}
				}
			],
			description: {
				title: `Europe most equal`,
				text: "Let's have   <span style='background: #7190feff; color: #d5f2f2; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 0 2px;'> Global average </span> a look at the last <span style='background: #fe5dbaff; color: #d5f2f2; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 0 4px;'> European countries </span>  4 decades of economical development in the world. The Gini coefficient is a measure of inequality used to quantify how evenly income or wealth is distributed within a society. Named after the Italian statistician Corrado Gini, it is a number between 0 and 1, where a Gini coefficient of 0 means perfect equality, everyone has the same income or wealth, and a Gini coefficient of 1 indicates perfect inequality, one person has all the income or wealth, while everyone else has none."
			}
		}
		//The fourth step introduces all lines that made up the global average.
		// {
		// 	charts: [
		// 		{
		// 			key: "country",
		// 			componentIndex: 0,
		// 			data: renderData,
		// 			options: {
		// 				stroke: "#d5f2f2",
		// 				strokeOpacity: 0,
		// 				strokeWidth: 0.5
		// 			}
		// 		},

		// 		{
		// 			key: "country",
		// 			componentIndex: 1,
		// 			data: renderData.filter((d) => ["US"].includes(d.country)),
		// 			options: {
		// 				stroke: "red",
		// 				strokeWidth: 2,
		// 				strokeOpacity: 0.8
		// 			}
		// 		},

		// 		{
		// 			key: "country",
		// 			componentIndex: 2,
		// 			data: renderData.filter((d) => d.region === "Asia"),
		// 			options: {
		// 				stroke: "white",
		// 				strokeOpacity: 0.5,
		// 				strokeWidth: 0.5
		// 			}
		// 		},

		// 		{
		// 			key: "country",
		// 			componentIndex: 3,
		// 			data: renderData.filter((d) =>
		// 				["CN", "JP", "IN"].includes(d.country)
		// 			),
		// 			options: {
		// 				stroke: "white",
		// 				strokeWidth: 0
		// 			},
		// 			annotations: [
		// 				{
		// 					x: "2010",
		// 					z: "IN",
		// 					dy: 8,
		// 					text: "India"
		// 				},
		// 				{
		// 					x: "2012",
		// 					z: "JP",
		// 					dy: -28,
		// 					text: "Japan"
		// 				},
		// 				{
		// 					x: "2014",
		// 					z: "CN",
		// 					dy: 0,
		// 					text: "China"
		// 				}
		// 			]
		// 		}
		// 	],
		// 	description: {
		// 		title: `Asia`,
		// 		text: "While in Asia the story is more complex..."
		// 	}
		// }
	]
};
