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

console.log(renderData);

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
              y: 0.73,
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
        text: "Looking at the<span class='highlight' style='color:var(--color-global)'>global</span>average, the Gini line sits high and stays almost perfectly flat across four decades. At first glance, that looks like stasis: unequal then, unequal now. But has the world really not changed at all in four decades? Has distribution stayed the same? Can a line so flat truly capture what’s happening underneath? Even the 2008 financial crisis left only a small mark before the line steadied again."
 
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
        text: "Break apart that smooth<span class='highlight' style='color:var(--color-global)'>global</span>line and you find many stories. In the 1980s, the gap between equal and unequal nations was wide. Since then, their distances have narrowed. Nevertheless, even with a smaller gap today, the variance between countries remains enormous and a single average, condensed into one number, misses much of the real picture. To understand what shapes it, let’s look at countries, regions, and the patterns that emerge between them."
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
        text: "In comparison to the<span class='highlight' style='color:var(--color-global)'>global</span>average<span class='highlight' style='color:var(--color-europe)'>Europe</span>represents a more economically equal continent. For decades, social welfare systems and labor protections maintained this balance. From the 1990s onward, the Gini coefficient increased gradually as markets liberalized and regulations eased. The distance between<span class='highlight' style='color:var(--color-europe)'>Europe</span>and the world narrowed, not because other regions became more equal, but because<span class='highlight' style='color:var(--color-europe)'>Europe’s</span>disparities widened slightly." 
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
        text: "Within<span class='highlight' style='color:var(--color-europe)'>Europe,</span>inequality patterns are similar but not uniform. Northern countries remain stable at lower Gini levels; parts of the south and east increase gradually. Together they form a compact cluster, below the<span class='highlight' style='color:var(--color-global)'>global</span>line. Changes are gradual, indicating that equality is maintained rather than settled once."
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
        text: "In the early 1980s, the<span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span>sat near<span class='highlight' style='color:var(--color-europe)'>Europe</span>on the Gini scale: lower, steadier, more balanced. Then, decade by decade, its line climbed. Today, the<span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span>sits among the highest of advanced economies, showing a widening income gap. The line that once traced broad prosperity now arcs toward polarization."
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
        text: "Across<span class='highlight' style='color:var(--color-south-america)'>South America,</span>Gini values have remained high. In the 2000s, social programs and wage reforms lowered inequality in some countries, but momentum later slowed. During the COVID-19 pandemic, inequality rose sharply as jobs and informal work were disrupted: a pattern confirmed by regional reports from other sources such as<a href='https://publications.iadb.org/en/higher-inequality-latin-america-collateral-effect-pandemic' target='_blank'>Inter-American Development Bank (IDB)</a> and the <a href='https://openknowledge.worldbank.org/entities/publication/07362ed8-ea20-5b1c-b32b-8a6e923efdc5' target='_blank'>World Bank</a>. Fiscal measures softened the impact, yet the Gini still increased. In contrast, the<span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span>showed a milder or briefly reversed effect, reflecting stronger policy buffers."
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
            {
              x: "2008",
              text: "💰 Financial crisis",
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
        text: "One of the most unequal countires remains<span class='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span>its Gini rose during economic reforms and trade liberalization in the 1990s, then eased in the 2000s and stabilized at a high level. During the COVID-19 pandemic, inequality first increased as urban and informal workers lost income, then declined sharply and has stayed lower since. Research by <a href='https://www.scielo.org.mx/scielo.php?pid=S0186-72022021000100007&script=sci_arttext' target='_blank'>Lustig</a> and the <a href='https://publications.iadb.org/en/higher-inequality-latin-america-collateral-effect-pandemic' target='_blank'>IADB</a> links this shift to labor market recovery and wage growth among lower-income workers. Next to the<span class='highlight' style='color:var(--color-usa)'>United States 🇺🇸</span>two connected economies shaped by very different social protections and post-crisis recoveries."

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
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
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
        text: "In<span class='highlight' style='color:var(--color-africa)'>South Africa 🇿🇦</span>inequality was already extreme in the 1980s, and from the early 1990s onward it rose even further, with a little downward trend just after the financial crises as being visisble for<span class='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span>. The end of apartheid brought profound political change, but only limited economic redistribution. Social spending has softened some edges, but the underlying distribution has remained largely unchanged, leaving inequality at record levels today."
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
            {
              x: "2008",
              text: "💰 Financial crisis",
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
        title: `Japan 🇯🇵: The Outlier of Equality`,
        text: "Using<span class='highlight' style='color:var(--color-africa)'>South Africa 🇿🇦</span>as a reference point at one extreme of global inequality,<span class='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span>sits at the other. Its income inequality has remained surprisingly stable over decades. Broad middle-income employment, cohesive labor structures, deep social norms around work, and progressive tax and inheritance systems helped<span class='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span>hold its line. At the same time, structural factors like demographic change, the rise of part-time employment and weak wage growth mean that modest inequality has slowly increased. Together,<span class='highlight' style='color:var(--color-africa)'>South Africa 🇿🇦</span>and<span class='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span>illustrate the breadth of global inequality trajectories: one marked by persistent extreme disparity, the other by relative stability and gradual change."
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
        title: `The flat line revisited`,
        text: "Seen up close, the flat<span class='highlight' style='color:var(--color-global)'>global</span>line is no longer a mystery. Opposite forces balanced each other out: countries drew closer together while internal gaps widened.The<span class='highlight' style='color:var(--color-global)'>world’s</span>line looks calm, but beneath it, everything moves."
      },
    },
  ],
};
