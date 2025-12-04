import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["WO", "QE", "SE", "US", "MX", "ZA", "JP", "CN"];

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
              x: "2023",
              y: renderData[1].values[43].value,
              dy: "- 1.4em - 6px - 4px",
              text: "53% in 2023",
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[0].values[43].value,
              dy: "3px + 4px",
              text: "8% in 2023",
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in the world 🌎",
            },
          ],
        },
      ],
      description: {
        title: `Gap between rich and poor`,
        text: "The upper line represents the income share of the <span class='highlight' style='color:var(--color-global)'>global</span> richest 10%, the lower of the poorest 50%.",
        text2: "",
        text3:
          "Despite growth in emerging economies over recent decades, the <span class='highlight' style='color:var(--color-global)'>global</span> bottom half’s share remains historically low: underscoring how much of the world’s income continues to concentrate at the top.",
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
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-europe);'>${formatter.format(renderData[3].values[43].value)} in 2023</span>`,
              anchor: "end",
            },

            {
              x: "2023",
              y: renderData[2].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-europe);'>${formatter.format(renderData[2].values[43].value)} in 2023</span>`,
              anchor: "end",
            },

            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in Europe",
            },
            {
              x: "2008",
              text: "💰 GFC",
            },
          ],
        },
      ],
      description: {
        title: `Smallest gap in Europe`,
        text: "In <span class='highlight' style='color:var(--color-europe)'>Europe</span> the gap between the richest 10% and the poorest 50% was exceptionally small in the 80s. From the early 90s onward the distance between the two began to widen, driven mainly by a decline in the income share of the lower half.",
        text2:
          "A brief reversal appears around the financial crisis when top incomes fell slightly and the lower half recovered modestly. After this short period of adjustment the lines began to settle again.",
        text3:
          "Since then both lines have stabilized, yet the overall gap remains wider than it once was.",
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
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-europe);'>${formatter.format(renderData[5].values[43].value)} in 2023</span>`,
              anchor: "end",
            },

            {
              x: "2023",
              y: renderData[4].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-europe);'>${formatter.format(renderData[4].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in Sweden 🇸🇪",
            },
            {
              x: "2008",
              text: "💰 GFC",
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
        text: "While inequalities have risen in Europe since the 80s, <span class='highlight' style='color:var(--color-europe)'>Sweden</span> remains one of the most equal countries in the <span class='highlight' style='color:var(--color-global)'>world</span>.",
        text2: "",
        text3:
          "During the COVID-19 pandemic inequality briefly increased as low-income employment declined, but strong welfare support and recovery measures quickly reversed this effect, returning income shares to pre-pandemic levels.",
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
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-usa);'>${formatter.format(renderData[7].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[6].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-usa);'>${formatter.format(renderData[6].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in USA 🇺🇸",
            },
            {
              x: "2008",
              text: "💰 GFC",
            },
            {
              x: "2020",
              text: "🦠 Covid",
            },
          ],
        },
      ],
      description: {
        title: `USA 🇺🇸 with historical highs`,
        text: "The gap in the <span class='highlight' style='color:var(--color-usa)'>US</span> is huge, the top 10% earn on average 17 times more than the bottom 50%.",
        text2:
          "Since the early 80s deregulation, privatization, lower tax progressivity, and declining union coverage have contributed to a steady rise in the top 10% income share. During the COVID-19 pandemic the income of the richest 10% continued to rise, while the recovery for lower-income groups lagged.",
        text3:
          "Unlike in <span class='highlight' style='color:var(--color-europe)'>Sweden</span> where inequality fell after the initial shock, the post-pandemic increase in top incomes in the <span class='highlight' style='color:var(--color-usa)'>USA</span> persisted, reinforcing the long-term trend of widening inequality.",
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
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-south-america);'>${formatter.format(renderData[9].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[8].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-south-america);'>${formatter.format(renderData[8].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in Mexico 🇲🇽",
            },
            {
              x: "2008",
              text: "💰 GFC",
            },
            {
              x: "2020",
              text: "🦠 Covid",
            },
          ],
        },
      ],
      description: {
        title: `Mexico 🇲🇽 with postive recent trend`,
        text: "Yet during COVID-19, <span class='highlight' style='color:var(--color-south-america)'>Mexico</span> broke from the global pattern: the income share of the richest 10% <strong>fell noticeably</strong>, one of the few clear declines among major economies.",
        text2:
          "As the <a href='https://wid.world/document/income-inequality-series-for-latin-america-and-the-caribbean-world-inequality-lab-issue-brief-2022-07/' target='_blank'>World Inequality Lab</a> notes, <span class='highlight' style='color:var(--color-south-america)'>Mexico</span> is an <strong>exceptional case</strong> where the top’s losses outpaced those at the bottom.",
        text3:
          "The gap remains large, but this turn marks a rare departure from the region’s norm.",
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
              y: renderData[11].values[43].value,
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-africa);'>${formatter.format(renderData[11].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[10].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-africa);'>${formatter.format(renderData[10].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in South Africa 🇿🇦",
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
        text: "As seen before <span class='highlight' style='color:var(--color-africa)'>South Africa</span> stands as the most unequal country in the <span class='highlight' style='color:var(--color-global)'>world</span>. Inequality was already extreme in the 80s and from the early 90s onward it rose even further, reaching its highest levels around 2010.",
        text2:
          "The end of apartheid brought profound political change, but only limited economic redistribution. This reflects the deep structural legacy of apartheid, including persistent racial divides, stark spatial separation, limited land reform and concentrated ownership.",
        text3:
          "Social spending has softened some edges, but the underlying distribution has remained largely unchanged, leaving inequality at record levels today.",
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
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-asia);'>${formatter.format(renderData[13].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[12].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-asia);'>${formatter.format(renderData[12].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in Japan 🇯🇵",
            },
            {
              x: "1991",
              text: "Asset bubble",
            },
          ],
        },
      ],
      description: {
        title: `Japan 🇯🇵 remains rather stable`,
        text: "The chart shows that <span class='highlight' style='color:var(--color-asia)'>Japan's</span> income inequality has stayed among the lowest globally.",
        text2: "",
        text3: "Around the 1991 asset bubble, the top 10% share briefly declined, but long-term trends remained remarkably stable.",
      },
    },
    // --------------------------------------
    // 8. China
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "CN"),
          options: {
            stroke: ["var(--color-asia)", "var(--color-asia)"],
            strokeOpacity: 1,
            strokeWidth: 1.5,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2023",
              y: renderData[15].values[43].value,
              dy: "- 1.4em - 6px - 4px",
              text: `<span style='color: var(--color-asia);'>${formatter.format(renderData[15].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[14].values[43].value,
              dy: "3px + 4px",
              text: `<span style='color: var(--color-asia);'>${formatter.format(renderData[14].values[43].value)} in 2023</span>`,
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in China 🇨🇳",
            },
          ],
        },
      ],
      description: {
        title: `China 🇨🇳 with growing gap`,
        text: "The gap between these two income groups grew immensly in <span class='highlight' style='color:var(--color-asia)'>China</span> over these 4 four decades.",
        text2: `
          <video controls poster="assets/videos/China_2.jpeg" width="100%">
            <source src="assets/videos/China_2.mp4" type="video/mp4" />
          </video> <span class="text-extra-small"> Source:  <a
      target="_blank"
      href="https://www.imdb.com/title/tt5723056/"
      >Capital in the 21st Century (2019) by Justin Pemberton
    </a></span>
        `,
        text3: "",
      },
    },
    // --------------------------------------
    // 9. Global
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
              dy: "- 1.4em - 6px - 4px",
              text: "53% in 2023",
              anchor: "end",
            },
            {
              x: "2023",
              y: renderData[0].values[43].value,
              dy: "3px + 4px",
              text: "8% in 2023",
              anchor: "end",
            },
            {
              y: 0,
              dx: "8px",
              dy: "- 0.23em",
              text: "Income in the world 🌎",
            },
          ],
        },
      ],
      description: {
        title: `Where are we heading?`,
        text: "A rather negative continution of this development might look like...",
        text2: `
          <video controls poster="assets/videos/Negative_outcome.jpg" width="100%">
            <source src="assets/videos/Negative_outcome.mp4" type="video/mp4" />
          </video> <span class="text-extra-small"> Source:  <a
      target="_blank"
      href="https://www.imdb.com/title/tt5723056/"
      >Capital in the 21st Century (2019) by Justin Pemberton
    </a></span>
        `,
        text3: "",
      },
    },
  ],
};
