import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["WO", "QE", "US", "DE", "FR", "SE", "MX"];

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
              x: "2017",
              y: "0.5",
              dy: -10,
              dx: 10,
              text: "10% richest owned 40% of national income",
            },
            {
              x: "2017",
              y: "0.17",
              dy: -10,
              dx: 10,
              text: "50% poorest owned 40% of national income",
            },
            {
              y: 0,
              dy: 2,
              text: "= Global income",
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
              x: "2017",
              y: "0.5",
              dy: -10,
              dx: 10,
              text: "10% richest owned 40% of national income",
            },
            {
              x: "2017",
              y: "0.17",
              dy: -10,
              dx: 10,
              text: "50% poorest owned 40% of national income",
            },
            {
              y: 0,
              dy: 2,
              text: "= European income",
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
              y: "0.5",
              dy: -10,
              dx: 10,
              text: "10% richest owned 40% of national income",
            },
            {
              x: "2017",
              y: "0.17",
              dy: -10,
              dx: 10,
              text: "50% poorest owned 40% of national income",
            },
            {
              y: 0,
              dy: -18,
              text: "- Swedish income",
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
              dy: -18,
              text: "- USA income",
            },
            {
              x: "2017",
              y: "0.5",
              dy: -10,
              dx: 10,
              text: "10% richest owned 40% of national income",
            },
            {
              x: "2017",
              y: "0.17",
              dy: -10,
              dx: 10,
              text: "50% poorest owned 40% of national income",
            },
          ],
        },
      ],
      description: {
        title: `USA with historical highs`,
        text: "Income inequality in the <span class ='highlight' style='color:var(--color-usa)'>USA</span> is among the highest among rich countries. The top 10% earns on average 17 times more than the bottom 50%, which is significantly higher than in Europe. From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "MX"),
          options: {
            stroke: [
              "var(--color-south-america)",
              "var(--color-south-america)",
            ],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "- Mexico income",
            },
            {
              x: "2017",
              y: "0.5",
              dy: -10,
              dx: 10,
              text: "10% richest owned 40% of national income",
            },
            {
              x: "2017",
              y: "0.17",
              fill: "red",
              dy: -10,
              dx: 10,
              text: "50% poorest owned 40% of national income",
            },
          ],
        },
      ],
      description: {
        title: `USA with historical highs`,
        text: "Income inequality in the <span class ='highlight' style='color:var(--color-south-america)'>USA</span> is among the highest among rich countries. The top 10% earns on average 17 times more than the bottom 50%, which is significantly higher than in Europe. From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },
  ],
};
