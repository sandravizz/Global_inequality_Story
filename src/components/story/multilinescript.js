import { group } from "d3";
import MultilineChart from "$components/charts/MultilineChart.svelte";
import data from "$data/data_all.csv";

const formattedData = data.map((d) => ({ ...d, value: +d.gini_pretaxes }));

const groupedByCountry = group(formattedData, (d) => d.country).entries();

const renderData = Array.from(groupedByCountry, ([key, value]) => ({
  country: key,
  region: value[0].region,
  region2: value[0].region2,
  values: value.map((item) => ({ ...item })),
}));

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

const yTickFormatter = (val) => formatter.format(val);

// --------------------------------------
// How to add a video

// --------------------------------------

export default {
  components: [
    MultilineChart,
    MultilineChart,
    MultilineChart,
    MultilineChart,
    MultilineChart,
    MultilineChart,
  ],
  steps: [
    // --------------------------------------
    // 1. Chart introduction
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0,
            strokeWidth: 0,
            fill: "var(--color-global)",
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
      ],
      description: {
        title: `The Inequality Spectrum`,
        text: "Let’s start with one simple number, the <span class='highlight'>Gini coefficient.</span> It tells us how income is shared within a country or across the world.",
        text2:
          "A Gini of 1 means one person earns everything <img src='./assets/Musk_face.png' style='display: inline-block; width: 1.8em;' /> and a Gini of 0 means everyone earns the same.",
        text3:
          "This single number will guide us through more than four decades, starting in the 80s until 2023.",
      },
    },

    // --------------------------------------
    // 2. Global average
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0,
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2023",
              y: 0.67,
              dy: "- 4em",
              text: "The global Gini was<br/>0.67 in 2023",
              anchor: "end",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
            drawFade: true,
          },
        },
      ],
      description: {
        title: `One flat line 🤔`,
        text: "Looking at the <span class='highlight' style='color:var(--color-global)'>global</span> average, the Gini line sits high and stays almost perfectly flat across the four decades. At first glance that looks like unequal then and unequal now.",
        text2:
          "But has the world really not changed at all in four decades? Has distribution stayed the same? Can a line so flat truly capture what is happening underneath?",
        text3: "",
      },
    },
    // --------------------------------------
    // 3. Global average all countries
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.8,
            strokeWidth: 0.4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `Average can be misleading 🤯`,
        text: "Comparing the <span class='highlight' style='color:var(--color-global)'>global</span> average line to all countries (backgorund lines), we can clearly identify variance.",
        text2:
          "There is also another trend visible in this chart, the variance between countries has narrowed since 1980. Nevertheless a smaller gap today remains enormous and a single average, condensed into one number, misses much of this pattern.",
        text3:
          "Now let's look at specific countries and regions and how they've changed in context.",
      },
    },
    // --------------------------------------
    // 4. Global vs. European average
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `Europe most equal continent 🥳`,
        text: "<span class='highlight' style='color:var(--color-europe)'>Europe</span> is the most economically equal continent. Nevertheless Inequality rose slightly from the early 90s into the mid 2000s. This was largely due to labour market liberalization and the growing role of capital income.",
        text2:
          "Even with these changes the region continued to compress disparities more effectively than most other parts of the world because of its welfare systems and progressive taxes<span class='fn' tabindex='0' data-note='Sauer et al. (2020)'><sup>1</sup></span>.",
        text3:
          "Overall, <span class='highlight' style='color:var(--color-europe)'>Europe</span> shows a stable pattern with small movements but no major breaks. This reflects long standing redistributive institutions that continue to keep inequality in check<span class='fn' tabindex='0' data-note='IFS Deaton Review (2024)'><sup>2</sup></span>.",
      },
    },
    // --------------------------------------
    // 5. European countries
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.6,
            strokeWidth: 0.4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0.8,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `Even among equals`,
        text: "Within <span class='highlight' style='color:var(--color-europe)'>Europe</span>, inequality levels differ. Northern countries maintain especially low and stable Gini values supported by cohesive labour markets and strong social protections<span class='fn' tabindex='0' data-note='EU (2024)'><sup>1</sup></span>.",
        text2:
          "Parts of Southern and Eastern <span class='highlight' style='color:var(--color-europe)'>Europe</span> show gradual increases in inequality starting in the 90s, because of weaker labour institutions and more volatile capital income<span class='fn' tabindex='0' data-note='Sauer et al. (2020)'><sup>2</sup></span>.",
        text3:
          "Despite these differences, all European countries remain far below the <span class='highlight' style='color:var(--color-global)'>global</span> inequality level. Together they form a compact cluster held together by a shared commitment to redistribution<span class='fn' tabindex='0' data-note='Gradín (2023)'><sup>3</sup></span>.",
      },
    },
    // --------------------------------------
    // 6. USA vs. Europe
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2008",
              text: "💰 GFC",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0.6,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["US"].includes(d.country)),
          options: {
            stroke: "var(--color-usa)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `United States of rising inequality`,
        text: "In the early 80s the <span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span> stood close to <span class='highlight' style='color:var(--color-europe)'>Europe</span> in terms of inequality<span class='fn' tabindex='0' data-note='Sauer et al. (2020)'><sup>1</sup></span>. From that point onward inequality increased steadily. This was driven by financialization, technological change that favored skilled workers and a declining labour share<span class='fn' tabindex='0' data-note='UNCTAD (2023)'><sup>2</sup></span>.",
        text2:
          " ",
        text3:
          "Today the <span class='highlight' style='color:var(--color-usa)'>US</span> stands among the most unequal advanced economies<span class='fn' tabindex='0' data-note='IFS Deaton Review (2024)'><sup>3</sup></span>.",
      },
    },
    // --------------------------------------
    // 7. USA vs. South America
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2020",
              text: "🦠 Covid",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter(
            (d) =>
              d.region2 === "South America" || d.region2 === "Central America",
          ),
          options: {
            stroke: "var(--color-south-america)",
            strokeWidth: 1,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["US"].includes(d.country)),
          options: {
            stroke: "var(--color-usa)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `South America's uneven paths`,
        text: "Across <span class='highlight' style='color:var(--color-south-america)'>South America</span> inequality remained high throughout the 80s and 90s. Many countries saw a decline during the 2000s due to stronger labour markets, improved education and expanded social programs<span class='fn' tabindex='0' data-note='UNCTAD (2023)'><sup>1</sup></span>. From the mid 2010s onward progress slowed as growth weakened and labour markets became more fragile<span class='fn' tabindex='0' data-note='ILO (2023)'><sup>2</sup></span>.",
        text2:
          "",
        text3:
          "Inequality rose sharply during the COVID 19 pandemic especially for informal and urban workers. Although fiscal support softened the impact it remained above pre pandemic levels in several countries<span class='fn' tabindex='0' data-note='IDB and World Bank COVID 19 reports'><sup>3</sup></span>.",
      },
    },
    // --------------------------------------
    // 8. USA - Mexico
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2020",
              text: "🦠 Covid",
            }
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter(
            (d) =>
              d.region2 === "South America" || d.region2 === "Central America",
          ),
          options: {
            stroke: "var(--color-south-america)",
            strokeWidth: 0.4,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["MX"].includes(d.country)),
          options: {
            stroke: "var(--color-south-america)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["US"].includes(d.country)),
          options: {
            stroke: "var(--color-usa)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The unequal neighbour 🇲🇽`,
        text: "<span class='highlight' style='color:var(--color-south-america)'>Mexico</span> is one of the most inequal countries and a direct neighbour to the US.",
        text2: "",
        text3:
          "During and after the COVID 19 pandemic inequality kept falling, while in the <span class='highlight' style='color:var(--color-usa)'>US</span> the opposite was the case, bringing the two geographical neighbors closer together in terms of iniquality levels.",
      },
    },
    // --------------------------------------
    // 9. Africa - Mexico and South Africa
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "1991",
              text: "End of apartheid",
            }
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter(
            (d) =>
              d.region2 === "South America" || d.region2 === "Central America",
          ),
          options: {
            stroke: "var(--color-africa)",
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["MX"].includes(d.country)),
          options: {
            stroke: "var(--color-south-america)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["ZA"].includes(d.country)),
          options: {
            stroke: "var(--color-africa)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The peak of inequality`,
        text: "<span class='highlight' style='color:var(--color-africa)'>South Africa 🇿🇦</span> is one of the most unequal countries in the world. It was already extreme in the 80s and increased further after the end of apartheid<span class='fn' tabindex='0' data-note='Sauer et al. (2020)'><sup>1</sup></span>.",
        text2:
          "High unemployment, strong divides between skilled and unskilled work and large spatial and educational inequalities keep distribution highly polarized<span class='fn' tabindex='0' data-note='UNCTAD (2023)'><sup>2</sup></span>.",
        text3:
          "Social grants reduce poverty but cannot compensate for the deep structural inequality generated in the labour market.<span class='fn' tabindex='0' data-note='Gradín (2023)'><sup>3</sup></span>.",
      },
    },
    // --------------------------------------
    // 10. South Africa vs. Japan
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2008",
              text: "💰 GFC",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter(
            (d) =>
              d.region2 === "South America" || d.region2 === "Central America",
          ),
          options: {
            stroke: "var(--color-africa)",
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["JP"].includes(d.country)),
          options: {
            stroke: "var(--color-asia)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["ZA"].includes(d.country)),
          options: {
            stroke: "var(--color-africa)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The outlier of equality 🇯🇵`,
        text: "<span class='highlight' style='color:var(--color-asia)'>Japan</span> remains one of the lowest inequality countries. It increased gradually during the 90s until the burst of the financial crises.",
        text2:
          "Stable labour institutions, broad middle income employment and progressive taxation helped hold inequality at a comparatively low level<span class='fn' tabindex='0' data-note='Sauer et al. (2020)'><sup>2</sup></span>.",
        text3:
          "Demographic change and the rise of non regular work added modest upward pressure but <span class='highlight' style='color:var(--color-asia)'>Japan</span> still shows one of the most stable long term inequality trajectories in the world<span class='fn' tabindex='0' data-note='IFS Deaton Review (2024)'><sup>3</sup></span>.",
      },
    },
    // --------------------------------------
    // 11. Japan vs. China
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.3,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",
              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Asia"),
          options: {
            stroke: "var(--color-asia)",
            strokeWidth: 0.3,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["CN"].includes(d.country)),
          options: {
            stroke: "var(--color-asia)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["CN"].includes(d.country)),
          options: {
            stroke: "var(--color-asia)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The rise of China 🇨🇳`,
        text: "<span class='highlight' style='color:var(--color-asia)'>China</span> is neither one of the most equal nor unequal countries but what stands out is it's enormous economic grows in the last decades affecting other countries. The graph reveals the rise of productivity goes hand in hand with the rise of inequality.",
        text2: `
          <video controls poster="assets/videos/China_1.jpeg" width="100%">
            <source src="assets/videos/China_1.mp4" type="video/mp4" />
          </video> <span class="text-extra-small"> Source:  <a
      target="_blank"
      href="https://www.imdb.com/title/tt5723056/"
      >Capital in the Twenty-First Century by Justin Pemberton
    </a></span>
        `,
        text3: "",
      },
    },

    // --------------------------------------
    // 11. Global average
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(
            (d) =>
              d.country != "QB" &&
              d.country != "QA" &&
              d.country != "QD" &&
              d.country != "QC" &&
              d.country != "QF",
          ),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0,
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 1,
              dy: "- 0.5em",

              dx: "8px",
              text: "<div style='display:flex; align-items: center; gap: 0.5em;'><span></span>Complete Inequality<img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "var(--color-europe)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "world"),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 3,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The flat line revisited`,
        text: "Seen up close, the flat <span class='highlight' style='color:var(--color-global)'>global</span> line is no longer a mystery. Opposite forces balanced each other out.",
        text2: "countries drew closer together while internal gaps widened. The <span class='highlight' style='color:var(--color-global)'>world’s</span> line looks calm, but beneath it, everything moves.",
        text3: "",
      },
    },
  ],
};
