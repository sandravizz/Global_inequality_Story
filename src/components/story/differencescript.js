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
//World 0.084
console.log(renderData[1].values[43]);
//World 0.53

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
              y: renderData[1].values[43].value,
              dy: -50,
              dx: 20,
              text: "53% in <br> 2023",
            },
            {
              x: "2023",
              y: renderData[0].values[43].value,
              dy: -50,
              dx: 20,
              text: "8% in <br> 2023",
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
        text: "The upper line represents the income share of the<span class='highlight' style='color:var(--color-global)'>global</span>richest 10%. The lower line represents the income share of the<span class='highlight' style='color:var(--color-global)'>global</span>poorest 50%. In 2023, the top 10% received about 54% of total income, while the bottom 50% received only 8%. Despite growth in emerging economies over recent decades, the<span class='highlight' style='color:var(--color-global)'>global</span>bottom half’s share remains historically low: underscoring how much of the world’s income continues to concentrate at the top.",
        text2: "", 
        text3: ""
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
              y: renderData[3].values[43].value,
              dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-europe)'>36% in <br> 2023</span>",
            },
            {
              x: "2023",
              y: renderData[2].values[43].value,
              dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-europe)'>19% in <br> 2023</span>",
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
        text: "In <span class='highlight' style='color:var(--color-europe)'>Europe</span> the gap between the richest 10% and the poorest 50% was exceptionally small in the 1980s. From the early 1990s onward the distance between the two began to widen, driven mainly by a decline in the income share of the lower half.",
        text2: "A brief reversal appears around the 2008 financial crisis when top incomes fell slightly and the lower half recovered modestly. After this short period of adjustment the lines began to settle again.",  
        text3: "Since then both lines have stabilized, yet the overall gap remains wider than it once was, though still smaller than the <span class='highlight' style='color:var(--color-global)'>global</span> average."
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
              y: renderData[5].values[43].value,
              dy: -60,
              dx: 20,
              text: "<span style='color: var(--color-europe)'>30% in <br> 2023</span>",
            },
            {
              x: "2023",
              y: renderData[4].values[43].value,
              dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-europe)'>25% in <br> 2023</span>",
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
        title: `Sweden 🇸🇪 had a reverse ratio`,
        text: "While inequalities have risen in Europe since the 1980s, <span class='highlight' style='color:var(--color-europe)'>Sweden 🇸🇪</span> remains one of the most equal countries in the <span class='highlight' style='color:var(--color-global)'>world</span>.",
        text2: "The top 10% of the population earn just over 30% of total national income, while the bottom 50% receive around 24%.",
        text3: "During the COVID-19 pandemic inequality briefly increased as low-income employment declined, but strong welfare support and recovery measures quickly reversed this effect, returning income shares to pre-pandemic levels."
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
              y: renderData[7].values[43].value,
                    dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-usa)'>47% in <br> 2023</span>",
            },
            {
              x: "2023",
              y: renderData[6].values[43].value,
                   dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-usa)'>13% in <br> 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇺🇸 Income</span>",
            },
            {
              x: "2020",
              text: "🦠 Covid",
            },  
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
            {
              x: "2001",
              text: "🌐 Dot.com",
            },
          ],
        },
      ],
      description: {
        title: `USA 🇺🇸 with historical highs`,
        text: "Now let’s compare to the <span class='highlight' style='color:var(--color-usa)'>USA 🇺🇸</span>. The gap is clear when set against <span class='highlight' style='color:var(--color-europe)'>Sweden 🇸🇪</span>. The top 10% earn on average 17 times more than the bottom 50%.",
        text2: "Since the early 1980s deregulation, privatization, lower tax progressivity, and declining union coverage have contributed to a steady rise in the top 10% income share. During the COVID-19 pandemic the income of the richest 10% continued to rise, while the recovery for lower-income groups lagged.",
        text3: "Unlike in <span class='highlight' style='color:var(--color-europe)'>Sweden 🇸🇪</span> where inequality fell after the initial shock, the post-pandemic increase in top incomes in the <span class='highlight' style='color:var(--color-usa)'>USA 🇺🇸</span> persisted, reinforcing the long-term trend of widening inequality."
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
              y: renderData[9].values[43].value,
              dy: -60,
              dx: 20,
              text: "<span style='color: var(--color-south-america)'>60% in <br> 2023</span>",
            },
            {
              x: "2023",
              y: renderData[8].values[43].value,
                   dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-south-america)'>8% in <br> 2023</span>",
            },
            {
              y: 0,
              dy: 0,
              text: "<div style='transform: translateY(0%); display:flex; align-items: center'> <span> - 🇲🇽 Income</span>",
            },
            {
              x: "2020",
              text: "🦠 Covid",
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
        text: "In <span class='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span> inequality has long been among the highest in the <span class='highlight' style='color:var(--color-global)'>world</span>. Yet during COVID-19, <span class='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span> broke from the global pattern: the income share of the richest 10% <strong>fell noticeably</strong>, one of the few clear declines among major economies.",
        text2: "As the <a href='https://wid.world/document/income-inequality-series-for-latin-america-and-the-caribbean-world-inequality-lab-issue-brief-2022-07/' target='_blank'>World Inequality Lab</a> notes, <span class='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span> is an <strong>exceptional case</strong> where the top’s losses outpaced those at the bottom.",
        text3: "The gap remains large, but this turn marks a rare departure from the region’s norm."
      }
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
              y: renderData[11].values[43].value,
                 dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-africa)'>65% in <br> 2023</span>",
            },
            {
              x: "2023",
              y: renderData[10].values[43].value,
                 dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-africa)'>6% in <br> 2023</span>",
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
        title: `South Africa 🇿🇦 biggest gap`,
        text: "As seen before <span class='highlight' style='color:var(--color-africa)'>South Africa 🇿🇦</span> stands as the most unequal country in the <span class='highlight' style='color:var(--color-global)'>world</span>. Inequality was already extreme in the 1980s and from the early 1990s onward it rose even further, reaching its highest levels around 2010.",
        text2: "The end of apartheid brought profound political change, but only limited economic redistribution. This reflects the deep structural legacy of apartheid, including persistent racial divides, stark spatial separation, limited land reform and concentrated ownership.",
        text3: "Social spending has softened some edges, but the underlying distribution has remained largely unchanged, leaving inequality at record levels today." 
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
              y: renderData[13].values[43].value,
                 dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-asia)'>43% in <br>2023</span>",
            },
            {
              x: "2023",
              y: renderData[12].values[43].value,
              dy: -50,
              dx: 20,
              text: "<span style='color: var(--color-asia)'>19% in <br> 2023</span>",
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
        text: "Income inequality in <span class='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span> is one of the lowest globally.",
        text2: "",
        text3: ""
      },
    },
  ],
};
