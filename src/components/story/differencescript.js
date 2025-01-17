import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["WO", "QE", "SE", "US", "MX"];

const renderData = countryCodes.flatMap((countryCode) => {
  const countryData = data.filter((d) => d.country === countryCode);
  return [
    {
      country: countryCode,
      type: "lowest50",
      values: countryData.map((d) => ({ year: d.year, value: +d.lowest_50 })),
    },
    {
      country: countryCode,
      type: "highest10",
      values: countryData.map((d) => ({ year: d.year, value: +d.highest_10 })),
    },
  ];
});
console.log(renderData);
console.log(renderData[0].values[42]);
//World 0.08
console.log(renderData[1].values[42]);
//World 0.53
console.log(renderData[2].values[42]);
//Europe 0.18
console.log(renderData[3].values[42]);
//Europe 0.36
console.log(renderData[4].values[42]);
//Sweden 0.2
console.log(renderData[5].values[42]);
//Sweden 0.3
console.log(renderData[6].values[42]);
//USA 0.10
console.log(renderData[7].values[42]);
//USA 0.48

export default {
  components: [DifferenceChart],
  steps: [
    // --------------------------------------
    // 1. Global
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "WO"),
          options: {
            stroke: ["var(--color-global)", "var(--color-global)"],
            strokeOpacity: 1,
            strokeWidth: 2,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2018",
              y: "0.51",
              dy: 0,
              dx: 0,
              text: "Top 10% owned 53% in 2022",
            },
            {
              x: "2018",
              y: "0.16",
              dy: 0,
              dx: 0,
              text: "Bottom 50% owned 8% in 2022",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> = Global income</span>",
            },
          ],
        },
      ],
      description: {
        title: `Gap between rich and poor`,
        text: "The upper line represents the income share of the<span class ='highlight' style='color:var(--color-global)'>Global 🌎</span>10 richest %. The lower line represents the income share of the<span class ='highlight' style='color:var(--color-global)'>Global 🌎</span>poorest 50%. The global bottom 50% income share remains historically low despite growth in the emerging world in the past decades.",
      },
    },
    // --------------------------------------
    // 2. Europe
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "QE"),
          options: {
            stroke: ["var(--color-europe)", "var(--color-europe)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2018",
              y: "0.45",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-europe)'>Top 10% owned 36% in 2022</span>",
            },
            {
              x: "2018",
              y: "0.16",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-europe)'>Bottom 50% owned 18% in 2022</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> = European income</span>",
            },
          ],
        },
      ],
      description: {
        title: `Smallest gap in Europe`,
        text: "In<span class ='highlight' style='color:var(--color-europe)'>Europe</span>deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },
    // --------------------------------------
    // 3. Sweden
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "SE"),
          options: {
            stroke: ["var(--color-europe)", "var(--color-europe)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2017",
              y: "0.4",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-europe)'>10% Top owned 30% in 2022</span>",
            },
            {
              x: "2017",
              y: "0.21",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-europe)'>50% Bottom owned 20% in 2022</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> = National income</span>",
            },
          ],
        },
      ],
      description: {
        title: `Sweden had a reverse ratio`,
        text: "While inequalities have risen in Europe since the 1980s.<span class ='highlight' style='color:var(--color-europe)'>Sweden</span>is one of the least unequal countries in terms of income in Europe and the world, with the top 10% of the population earning just over 30% of total national income and the bottom 50% earning almost 24% of national income. ",
      },
    },
    // --------------------------------------
    // 4. USA
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "US"),
          options: {
            stroke: ["var(--color-usa)", "var(--color-usa)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> = National income</span>",
            },
            {
              x: "2017",
              y: "0.55",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-usa)'>10% Top owned 48% in 2022</span>",
            },
            {
              x: "2017",
              y: "0.22",
              dy: -10,
              dx: 10,
              text: "<span style='color: var(--color-usa)'>50% Bottom owned 10% in 2022</span>",
            },
          ],
        },
      ],
      description: {
        title: `USA with historical highs`,
        text: "Income inequality in the <span class ='highlight' style='color:var(--color-usa)'>USA</span> is among the highest among rich countries. The top 10% earns on average 17 times more than the bottom 50%, which is significantly higher than in Europe. From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },
  ],
};
