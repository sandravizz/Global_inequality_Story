import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["WO", "QE", "US", "DE", "FR", "SE"];

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
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "WO"),
          options: {
            stroke: ["#d5f2f2", "#d5f2f2"],
            strokeOpacity: 1,
            strokeWidth: 2,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "= National income",
            },
            {
              x: "2009",
              text: "Financial crisis",
            },
            {
              x: "2019",
              text: "Covid",
            },
            {
              x: "1989",
              text: "Fall of Berlin wall",
            },
          ],
        },
      ],
      description: {
        title: `10% richest vs. 50% poorest`,
        text: "The upper line represents the income share of the<span style='background: #020100ff; color:#d5f2f2; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>global 🌎</span>10 richest %. The lower line represents the income share of the<span style='background: #020100ff; color:#d5f2f2; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>global 🌎</span>poorest 50%.",
      },
    },
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "QE"),
          options: {
            stroke: ["#F7885E", "#F7885E"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: 2,
              text: "= National income",
            },
            {
              x: "2009",
              text: "Financial crisis",
            },
            {
              x: "2019",
              text: "COVID",
            },
          ],
        },
      ],
      description: {
        title: `Smallest gap in Europe`,
        text: "In<span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Europe.</span>From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "SE"),
          options: {
            stroke: ["#F7885E", "#F7885E"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "= National income",
            },
            {
              x: "2009",
              text: "Financial crisis",
            },
            {
              x: "2019",
              text: "COVID",
            },
          ],
        },
      ],
      description: {
        title: `Sweden had a reverse ratio`,
        text: "While inequalities have risen in <span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Sweden</span> since the 1980s. Sweden is one of the least unequal countries in terms of income in Europe and the world, with the top 10% of the population earning just over 30% of total national income and the bottom 50% earning almost 24% of national income. ",
      },
    },
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "US"),
          options: {
            stroke: ["#99F75E", "#99F75E"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "= National income",
            },
            {
              x: "2009",
              text: "Financial crisis",
            },
            {
              x: "2019",
              text: "COVID",
            },
            {
              x: "2001",
              text: "Dot.com bubble",
            },
          ],
        },
      ],
      description: {
        title: `US back to historical highs`,
        text: "Income inequality in the<span style='background: #020100ff; color:#99F75E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>US</span>is among the highest among rich countries. The top 10% earns on average 17 times more than the bottom 50%, which is significantly higher than in<span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Europe.</span>From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share",
      },
    },
  ],
};
