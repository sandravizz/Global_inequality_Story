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
            stroke: ["#7190feff", "#7190feff"],
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
        title: `One flat line ?`,
        text: "Looking at the<span style='background: #020100ff; color: #7190feff; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>Global average</span>we see a line rather flat, meaning that there hasn’t been much change on this aggregated level. Someone might questioning if the world actually has become more unequal over the last decodes as commonly reported. Since 1980, domestic inequality has grown, but inter-national inequality started to decline thanks to fast growth in the large so-called emerging economies. These two effects balance each other out so that in past few decades, global inequality has been basically stable, albeit at a very high level. So let’s investigate by decomposing the world. 🤓 🌎",
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
