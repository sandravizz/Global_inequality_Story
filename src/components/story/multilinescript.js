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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
            text: "Let’s start with one simple number the<span class='highlight'>Gini coefficient.</span> It tells us how income is shared within a country or across the<span class='highlight' style='color:var(--color-global)'>world. 🌎</span> A Gini of 0 means everyone earns the same; a Gini of 1 means one person earns everything. You can imagine that extreme, one Musk holding all the<span class='highlight' style='color:var(--color-global)'>world’s 🌎</span>money. This single number will guide us through more than four decades, from the 1980s to today. The line may look simple, but it hides a lot of motion beneath it."
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "2008",
              text: "💰 Financial crisis",
            },
            {
              x: "2022",
              y: 0.77,
              text: "The global Gini was<br/>0.71 in 2024",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        text: "Although the average offers a concise summary, it causes us to lose detailed information and may even lead to misinterpretation. Examining all countries collectively reveals a wider range in the Gini coefficient, prompting the question: why do some countries exhibit lower inequality than others? 🧐 One<span class ='highlight' style='color:var(--color-global)'>global 🌎</span>trend evident in this chart is the reduction in the gap between countries, indicating that the differences among countries were larger in the 1980s than they are today in the 2020s.",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
            },
            {
              x: "1991",
              text: "<img src='./assets/SovietUnion.png' style='display: inline-block; width: 1.2em;' /> Collapse",
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
        title: `Europe most equal 🥳`,
        text: "The region with the lowest inequality level, far below the<span class ='highlight' style='color:var(--color-global)'>global 🌎</span>average is<span class ='highlight' style='color:var(--color-europe)'>Europe.</span>Even though we can identify especially in the early 90s a slight trend towards inequality, it is still the region with the lowest gini on average. ",
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
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
       annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        text: "When decomposing the<span class ='highlight' style='color:var(--color-europe)'>European</span>average on a country level, someone can observe the differences. Nevertheless are all countries in a the lower Gini level compared to the rest of the world. 🌍",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `The United States of Inequality`,
        text: "The<span class ='highlight' style='color:var(--color-usa)'>USA 🇺🇸</span>was similar to<span class ='highlight' style=color:var(--color-europe)>European</span>standards in the 80s. Over the last four decades the US has become steadily more unequal, currently reached the highest level.",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `USA vs. Central/South America`,
        text: "The<span class ='highlight' style='color:var(--color-usa)'>USA 🇺🇸</span>is today rather similar to inequality levels observed in<span class ='highlight' style='color:var(--color-south-america)'>Central and South America,</span>which is one the most unequal regions.",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `Mexico: The Unequal Neighbor`,
        text: "Available data suggest that<span class ='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span>did not experience a strong reduction in inequality over the 20th century. In fact, income inequality has been extreme throughout the past and present centuries. 😕",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        title: `South Africa’s Climb to the Top of Inequality`,
        text: "Even more unequal than <span class ='highlight' style='color:var(--color-south-america)'>Mexico 🇲🇽</span>is<span class ='highlight' style='color:var(--color-africa)'>South Africa 🇸🇸.</span>While democratic rights were extended to the totality of the population after the end of apartheid in 1991, extreme economic inequalities have persisted and been exacerbated. 😔",
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
              text: "<div style='transform: translateY(-15%); display:flex; align-items: center'> <span> = Complete Inequality ~ </span><img src='./assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
        text: "Even though Europe is the most equal region, its </span><span class ='highlight' style='color:var(--color-asia)'>Japan 🇯🇵</span> which is the most equal country. The contrast to<span class ='highlight' style='color:var(--color-africa)'>South Africa 🇸🇸</span>is enorm.",
      },
    },
  ],
};
