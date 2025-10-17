import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["WO", "QE", "SE", "US", "MX", "ZA", "JP"];

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
console.log(renderData[0].values[43]);
//World 0.08
console.log(renderData[1].values[43]);
//World 0.54
console.log(renderData[2].values[43]);
//Europe 0.18
console.log(renderData[3].values[43]);
//Europe 0.37
console.log(renderData[4].values[43]);
//Sweden 0.23
console.log(renderData[5].values[43]);
//Sweden 0.31
console.log(renderData[6].values[43]);
//USA 0.13
console.log(renderData[7].values[43]);
//USA 0.47
console.log(renderData[8].values[43]);
//Mexico 0.08
console.log(renderData[9].values[43]);
//Mexico 0.6
console.log(renderData[10].values[43]);
//South Afirca 0.06
console.log(renderData[11].values[43]);
//South Africa 0.65
console.log(renderData[12].values[43]);
//Japan 0.18
console.log(renderData[13].values[43]);
//Japan 0.44

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
              x: "2023",
              y: "0.58",
              dy: 0,
              dx: 0,
              text: "54% in 2023",
            },
            {
              x: "2023",
              y: "0.075",
              dy: 0,
              dx: 0,
              text: "8% in 2023",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🌎 Income</span>",
            }
          ],
        },
      ],
      description: {
        title: `Gap between rich and poor`,
        text: "The upper line represents the income share of the <span class='highlight' style='color:var(--color-global)'>global</span> richest 10%. The lower line represents the income share of the <span class='highlight' style='color:var(--color-global)'>global</span> poorest 50%. In 2023, the top 10% received about 54% of total income, while the bottom 50% received only 8%. Despite growth in emerging economies over recent decades, the <span class='highlight' style='color:var(--color-global)'>global</span> bottom half’s share remains historically low — underscoring how much of the world’s income continues to concentrate at the top."

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
              x: "2023",
              y: "0.41",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-europe)'>37% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.175",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-europe)'>18% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - Europe income</span>",
            },
          ],
        },
      ],
      description: {
        title: `Smallest gap in Europe`,
text: "In <span class='highlight' style='color:var(--color-europe)'>Europe</span>, the movements shown refer to <em>income inequality</em> (Gini and income shares), not wealth. For details, see <a href='https://www.eurofound.europa.eu/en/publications/all/developments-income-inequality-and-middle-class-eu' target='_blank'>Eurofound</a>, the <a href='https://wid.world/document/inequality-trends-in-europe-world-inequality-lab-issue-brief-2022-04/' target='_blank'>World Inequality Lab</a>, <a href='https://cepr.org/voxeu/columns/capturing-top-incomes-and-measuring-inequality-europe' target='_blank'>CEPR/VoxEU</a>, and <a href='https://www.intereconomics.eu/contents/year/2016/number/2/article/income-inequality-in-europe-since-the-crisis.html' target='_blank'>Intereconomics</a>."
 
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
              x: "2023",
              y: "0.37",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-europe)'>31% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.22",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-europe)'>23% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇸🇪 Income</span>",
            },      
            {
              x: "2020",
              text: "🦠 Covid",
            },
          ],
        },
      ],
      description: {
        title: `Sweden had a reverse ratio`,
        text: "While inequalities have risen in Europe since the 1980s.<span class ='highlight' style='color:var(--color-europe)'>Sweden 🇸🇪</span>is one of the least unequal countries in terms of income in Europe and the world, with the top 10% of the population earning just over 30% of total national income and the bottom 50% earning almost 24% of national income. ",
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
              x: "2023",
              y: "0.51",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-usa)'>47% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.12",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-usa)'>13% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇺🇸 Income</span>",
            },
            {
              x: "2001",
              text: "🌐 Dot.com",
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
          ],
        },
      ],
      description: {
        title: `USA with historical highs`,
        text: "Income inequality in the<span class ='highlight' style='color:var(--color-usa)'>USA 🇺🇸</span>is among the highest among, as seen in the chart before. The top 10% earns on average 17 times more than the bottom 50%, which is significantly higher than in Europe. From the early 1980s onward, deregulation, privatizations, decreases in tax progressivity and a decline in union coverage all contributed to a formidable rise in the top 10% income share.",
      },
    },
    // --------------------------------------
    // 5. Mexico
    // --------------------------------------
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
              x: "2023",
              y: "0.585",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-south-america)'>60% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.125",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-south-america)'>0.8% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇲🇽 Income</span>",
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
          ],
        },
      ],
      description: {
        title: `Mexico 🇲🇽`,
        text: "Huge cap, meaning the rich earn a lot the poorer half nothing, but last years postive development gap becoming smaller.",
      },
    },
    // --------------------------------------
    // 6. South Africa
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "ZA"),
          options: {
            stroke: ["var(--color-africa)", "var(--color-africa)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2023",
              y: "0.645",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-africa)'>65% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.1",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-africa)'>0.6% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇿🇦 Income</span>",
            },
            {
              x: "1991",
              text: "End of apartheid",
            },
          ],
        },
      ],
      description: {
        title: `South Africa biggest gap`,
        text: "Income inequality in the<span class ='highlight' style=var(--color-africa)'>South Africa 🇿🇦</span>is the highest globally and over the last 4 decades.",
      },
    },
    // --------------------------------------
    // 7. Japan
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "JP"),
          options: {
            stroke: ["var(--color-asia)", "var(--color-asia)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2023",
              y: "0.425",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-asia)'>44% in 2023</span>",
            },
            {
              x: "2023",
              y: "0.23",
              dy: 0,
              dx: 0,
              text: "<span style='color: var(--color-asia)'>18% in 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇯🇵 Income</span>",
            },
            {
              x: "1991",
              text: "Asset bubble",
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
          ],
        },
      ],
      description: {
        title: `Japan`,
        text: "Income inequality in<span class ='highlight' style=var(--color-asia)'>Japan 🇯🇵</span>is the one of the lowest globally.",
      },
    },
  ],
};
