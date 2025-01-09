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
            fill: "#d5f2f2",
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-41%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 9em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
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
        title: `Gini by country 1980 to 2023`,
        text: "The most commonly used measurement for economic inequality is the Gini index, which varies from 0 = complete equality to 1 = complete inequality. In this line chart we look at the development over the last 4 decades on a country level, meaning each line represents a country.",
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
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
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
        title: `One flat line ?`,
        text: "Looking at the<span class ='highlight' style='color:var(--color-global)'>global 🌎</span>average we see a line rather flat, meaning that there hasn’t been much change on this aggregated level. Someone might questioning if the world actually has become more unequal over the last decodes as commonly reported. So let’s investigate by decomposing the world. 🤓",
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
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.8,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
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
        title: `Average can be misleading`,
        text: "Looking at the<span class ='highlight' style='color:var(--color-global)'>global 🌎</span>average we see a line rather flat, meaning that there hasn’t been much change on this aggregated level. Someone might questioning if the world actually has become more unequal over the last decodes as commonly reported. So let’s investigate by decomposing the world. 🤓",
      },
    },

    // --------------------------------------
    // 3. Global vs. European average
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
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
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //    --color-europe: #F7885E;
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `Europe most equal`,
        text: "The region with the lowest inequality, far below the<span style='background: #020100ff; color: #d5f2f2; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>global 🌎</span>average is<span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Europe.</span>Even though we can identify especially after the fall of the Soviet Union a slight trend towards inequality, it is still the region with the lowest gini on average. ",
      },
    },

    // --------------------------------------
    // 4. European countries
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0.8,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `European countries vary`,
        text: "When decomposing the<span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Europe</span>average on a country level, someone can observe the differences. Nevertheless are all countries in a the lower Gini level compared to the rest of the world.",
      },
    },

    // --------------------------------------
    // 5. USA vs. Europe
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
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
            stroke: "#99F75E", // --color-usa: #99F75E;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2022",
              z: "US",
              dy: -10,
              dx: 10,
              text: "🇺🇸",
            },
          ],
        },
      ],
      description: {
        title: `USA towards ineqaulity `,
        text: "The<span style='background: #020100ff; color:#99F75E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>USA</span>was similar to<span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>European</span>standards in the 80s. Over the last 4 decades has become more unequal, currently reached the highest level. In particular the COVID years had an impact on labor inequality.",
      },
    },

    // --------------------------------------
    // 6. USA vs. South America
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region2 === "South America"),
          options: {
            stroke: "#F5EF62", // --color-south-america:#F5EF62;
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
            stroke: "#99F75E", // --color-usa: #99F75E;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2022",
              z: "US",
              dy: -10,
              dx: 10,
              text: "🇺🇸",
            },
          ],
        },
      ],
      description: {
        title: `USA inline with South America `,
        text: "The<span style='background: #020100ff; color:#99F75E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>USA</span>was similar to<span style='background: #020100ff; color: #F5EF62; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>South America</span>standards in the 80s. Over the last 4 decades has become more unequal, currently reached the highest level. In particular the COVID years had an impact on labor inequality.",
      },
    },

    // --------------------------------------
    // 6. USA - Mexico
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region2 === "South America"),
          options: {
            stroke: "#F5EF62", // --color-south-america:#F5EF62;
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
            stroke: "#F5EF62", // --color-south-america:#F5EF62;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2022",
              z: "MX",
              dy: -10,
              dx: 10,
              text: "🇲🇽",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 5,
          data: renderData.filter((d) => ["US"].includes(d.country)),
          options: {
            stroke: "#99F75E", // --color-usa: #99F75E;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              x: "2022",
              z: "US",
              dy: -10,
              dx: 10,
              text: "🇺🇸",
            },
          ],
        },
      ],
      description: {
        title: `Mexico with extrem inquality `,
        text: "The<span style='background: #020100ff; color:#99F75E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>USA</span>was similar to<span style='background: #020100ff; color: #F5EF62; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>South America</span>standards in the 80s. Over the last 4 decades has become more unequal, currently reached the highest level. In particular the COVID years had an impact on labor inequality.",
      },
    },

    // --------------------------------------
    // 7. China, Japan und India
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Asia"),
          options: {
            stroke: "#0CBFF5", // --color-asia: #0CBFF5;
            strokeWidth: 0,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["CH", "IN"].includes(d.country)),
          options: {
            stroke: "#0CBFF5", // --color-asia: #0CBFF5;
            strokeWidth: 4,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `In Asia...`,
        text: "The<span style='background: #020100ff; color:#0CBFF5; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>China</span>,<span style='background: #020100ff; color:#0CBFF5; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Japan</span>was similar to<span style='background: #020100ff; color: #F5EF62; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>South America</span> and <span style='background: #020100ff; color:#0CBFF5; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>India</span>standards in the 80s. Over the last 4 decades has become more unequal, currently reached the highest level. In particular the COVID years had an impact on labor inequality.",
      },
    },

    // --------------------------------------
    // 8. Africa
    // --------------------------------------

    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2", //  --color-global: #d5f2f2;
            strokeOpacity: 0.4,
            strokeWidth: 0.3,
            yTickFormat: yTickFormatter,
          },
          annotations: [
            {
              y: 0,
              dy: -5,
              text: "<div style='transform: translateY(-14%); display:flex; align-items: center'> <span> = Complete Inequality</span><img src='/assets/Musk_face.png' style='display: inline-block; width: 2em;' /></div>",
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
              x: "2001",
              text: "Internet Bubble",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E", //   --color-europe: #F7885E;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#d5f2f2", //   --color-global: #d5f2f2;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Africa"),
          options: {
            stroke: "#F562EB", // --color-africa: #F562EB;
            strokeWidth: 0.5,
            strokeOpacity: 1,
            yTickFormat: yTickFormatter,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) => ["SA"].includes(d.country)),
          options: {
            stroke: "#F562EB", // --color-africa: #F562EB;
            strokeWidth: 0,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: `In Africa...`,
        text: "The<span style='background: #020100; color:#F562EB; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Africa</span>,<span style='background: #020100ff; color:#0CBFF5; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Japan</span>was similar to<span style='background: #020100ff; color: #F5EF62; font-family: Montserrat Alternates3; padding: 3px 3px 3px 3px; margin: 2px 2px;'>South America</span> and <span style='background: #020100ff; color:#0CBFF5; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>India</span>standards in the 80s. Over the last 4 decades has become more unequal, currently reached the highest level. In particular the COVID years had an impact on labor inequality.",
      },
    },
  ],
};
