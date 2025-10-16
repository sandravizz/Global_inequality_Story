import { group } from "d3";
import MultilineChart from "$components/charts/MultilineChart.svelte";
import data from "$data/data_all.csv";

const formattedData = 
data.map((d) => ({ ...d, value: +d.gini_pretaxes }));

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
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'><span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "var(--color-global)",
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `The Inequality Spectrum`,
        text: "Let’s start with one simple number the<span class='highlight'>Gini coefficient.</span> It tells us how income is shared within a country or across the world. A Gini of 0 means everyone earns the same; a Gini of 1 means one person earns everything. You can imagine that extreme, one Musk holding all the world’s money. This single number will guide us through more than four decades, from the 1980s to today. The line may look simple, but it hides a lot of motion beneath it."
      },
    },
    // --------------------------------------
    //2. Global average
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
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'><span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
            {
              x: "2022",
              y: 0.74,
              text: "The global Gini was<br/>0.67 in 2023",
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
      ],
      description: {
        title: `One flat line 🤔`,
        text: "Looking at the<span class='highlight' style='color:var(--color-global)'>global</span>average, the Gini line sits high and stays almost perfectly flat across four decades. At first glance, that looks like stasis — unequal then, unequal now. But the stillness is deceptive: inequality within countries has grown while inequality between countries has fallen. Even the 2008 crisis left only a small mark before the line steadied again. This apparent flatness is not silence — it’s tension held in balance."
      },
    },
    // --------------------------------------
    //3. Global average all countries
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.8,
            strokeWidth: 0.4,
            yTickFormat: yTickFormatter,
          },        
         annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        text: "Break apart that smooth<span class='highlight' style='color:var(--color-global)'>global</span> line and you find many stories. In the 1980s, the gap between rich and poor nations was wide; since then, incomes have drawn closer. This convergence helps the <span class='highlight' style='color:var(--color-global)'>global</span> average look flatter today. Yet inside many countries, new divides deepened over time.The <span class='highlight' style='color:var(--color-global)'>world</span> became more even across borders — but less equal within them."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
         annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        text: "<span class='highlight' style='color:var(--color-europe)'>Europe’s</span> line lies far below the <span class='highlight' style='color:var(--color-global)'>global</span> average. For decades, social welfare and labor protections kept inequality comparatively low.From the 1990s onward, the Gini edged up as markets opened and regulation softened.The distance between <span class='highlight' style='color:var(--color-europe)'>Europe</span> and the <span class='highlight' style='color:var(--color-global)'>world</span>narrowed — not because others became fairer, but because <span class='highlight' style='color:var(--color-europe)'>Europe</span> grew slightly less equal. Even the continent of equality shows small cracks beneath its calm surface. ⚖️" 
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.6,
            strokeWidth: 0.4,
            yTickFormat: yTickFormatter,
          },
       annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `Even Among Equals`,
        text: "Within <span class='highlight' style='color:var(--color-europe)'>Europe</span>, equality looks like a family resemblance — but not an identical twin. Northern countries hold steady with lower Ginis - parts of the south and east rise gently over time. Together they form a compact cluster, well below the <span class='highlight' style='color:var(--color-global)'>global</span> line. Here, the Gini moves slowly — reminding us that equality is maintained, not won once."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
         annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `The United States of rising Inequality`,
        text: "In the early 1980s, the <span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span> sat near <span class='highlight' style='color:var(--color-europe)'>Europe</span> on the Gini scale — lower, steadier, more balanced. Then, decade by decade, its line climbed. Today, the <span class='highlight' style='color:var(--color-usa)'>U.S. 🇺🇸</span> sits among the highest of advanced economies, showing a widening income gap. The line that once traced broad prosperity now arcs toward polarization."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
        annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `South America’s Uneven Paths`,
        text: "Across <span class='highlight' style='color:var(--color-south-america)'>South America</span>, Gini lines have long stood high. In the 2000s, social programs and wage reforms bent some of those lines downward — small but meaningful progress.Momentum later slowed, and the region remains one of inequality’s strongholds.The pattern softened, but it did not break."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
         annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `The unequal neighbor Mexico 🇲🇽`,
        text: "<span class='highlight' style='color:var(--color-south-america)'>Mexico’s 🇲🇽</span> Gini line swings with time. It rose during reforms and trade liberalization in the 1990s, then eased somewhat in the 2000s. Recently, it stabilized — still high, but less extreme than before. In the neighborhood of the <span class='highlight' style='color:var(--color-usa)'>U.S.</span>, it remains a study in contrasts."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
          data: renderData,
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
        text: "<span class='highlight' style='color:var(--color-africa)'>South Africa’s 🇸🇸</span> line rises steeply, among the highest on Earth. In the 1980s it was already immense; after apartheid, it climbed even higher. Political change reshaped institutions, but the Gini stayed extreme. Freedom alone couldn’t flatten the line."
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
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
           {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
          data: renderData,
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
        title: `Japan: The Outlier of Equality`,
        text: "<span class='highlight' style='color:var(--color-asia)'>Japan’s 🇯🇵</span> Gini barely changes, from the 1980s to today. It remains low and steady.Broad middle incomes and cohesive labor structures kept inequality in check.While others rose and fell, <span class='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span> held its line."
      },
    },
    // --------------------------------------
    // 11. South Africa vs. Japan to global
    // --------------------------------------
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter(d => d.country != "QB" &&
            d.country != "QA" &&
            d.country != "QD" &&
            d.country != "QC" &&
            d.country != "QF"),
          options: {
            stroke: "var(--color-global)",
            strokeOpacity: 0,
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
          annotations: [
           {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
          data: renderData,
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
        title: `The flat line revisited 🔄`,
        text: "Seen up close, the flat <span class='highlight' style='color:var(--color-global)'>global</span> line is no longer a mystery.Opposite forces balanced each other out: countries drew closer together while internal gaps widened.The <span class='highlight' style='color:var(--color-global)'>world’s</span> line looks calm, but beneath it, everything moves. 🌍"
      },
    },
  ],
};
