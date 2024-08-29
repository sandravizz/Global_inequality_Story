import { group } from "d3";
import MultilineChart from "$components/charts/LineChart/MultilineChart.svelte";
import data from "$data/data_all.csv";

const formattedData = data.map((d) => ({ ...d, value: +d.gini_pretaxes }));

const groupedByCountry = group(formattedData, (d) => d.country).entries();
const renderData = Array.from(groupedByCountry, ([key, value]) => ({
  country: key,
  region: value[0].region,
  region2: value[0].region2,
  values: value.map((item) => ({ ...item })),
}));

export default {
  components: [
    MultilineChart,
    MultilineChart,
    MultilineChart,
    MultilineChart,
    MultilineChart,
  ],
  steps: [
    //1. Chart introduction
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.7,
            strokeWidth: 0.4,
            fill: "#d5f2f2",
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "  >  Complete inequality",
            },
          ],
        },
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#7190feff",
            strokeWidth: 0,
          },
        },
      ],
      description: {
        title: `Gini by country 1980 - 2023`,
        text: "The most commonly used measurement for economic inequality is the Gini index, where 0 means complete equality, everyone has the same and 1 indicates complete inequality, one person has everything. In this line chart the basis for the Gini index is pretax income. We look at the development over last 4 decades on a country level, meaning every line represents the development of one country.",
      },
    },
    //2. Global average
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.5,
            strokeWidth: 0.4,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "  >  Complete inequality",
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
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#7190feff",
            strokeWidth: 4,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0,
            strokeOpacity: 1,
          },
        },
      ],
      description: {
        title: `One flat line ?`,
        text: "Looking at the <span style='background: #020100ff; color: #7190feff; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Global average</span> we see a line rather flat meaning that there hasn’t been much change on this aggregated. Someone might questioning if the world actually has become more unequal over the last decodes as commonly reported. So let’s investigate by decomposing the world. 🤓 🌎",
      },
    },
    //3. Global vs. European average
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.4,
            strokeWidth: 0.4,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "  >  Complete inequality",
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
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E",
            strokeWidth: 4,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#7190feff",
            strokeWidth: 4,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0,
            strokeOpacity: 1,
          },
        },
      ],
      description: {
        title: `🇪🇺 Europe most equal`,
        text: "The region with the lowest inequality, far below the <span style='background: #020100ff; color: #7190feff; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>Global average</span> is and was <span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>European</span>. Even though we can identify especially after the fall of the Soviet Union a slight trend towards inequality. ",
      },
    },
    //4. European countries
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.4,
            strokeWidth: 0.4,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "  >  Complete inequality",
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
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#7190feff",
            strokeWidth: 0,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0.8,
            strokeOpacity: 1,
          },
        },
      ],
      description: {
        title: `European countries ...`,
        text: "",
      },
    },
    //5. USA vs. Europe
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData,
          options: {
            stroke: "#d5f2f2",
            strokeOpacity: 0.4,
            strokeWidth: 0.4,
          },
          annotations: [
            {
              y: 0,
              dy: -18,
              text: "  >  Complete inequality",
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
        {
          key: "country",
          componentIndex: 1,
          data: renderData.filter((d) => ["QE"].includes(d.country)),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0,
          },
        },
        {
          key: "country",
          componentIndex: 2,
          data: renderData.filter((d) => ["WO"].includes(d.country)),
          options: {
            stroke: "#7190feff",
            strokeWidth: 0,
          },
        },
        {
          key: "country",
          componentIndex: 3,
          data: renderData.filter((d) => d.region === "Europe"),
          options: {
            stroke: "#F7885E",
            strokeWidth: 0.4,
            strokeOpacity: 1,
          },
        },
        {
          key: "country",
          componentIndex: 4,
          data: renderData.filter((d) =>
            [
              // "UZ",
              // "UA",
              // "AZ",
              // "AM",
              // "MM",
              // "KA",
              "US",
              // "SE",
              // "DK",
              // "CR",
              // "CZ",
              // "HU",
              // "BT",
              // "MV",
              // "CI",
              // "IE",
              // "RU"
            ].includes(d.country),
          ),
          options: {
            stroke: "#99F75E",
            strokeWidth: 4,
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
        text: "Income distribution was similar to <span style='background: #020100ff; color: #F7885E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>European</span> standards in the 80s but through the last 4 decades the <span style='background: #020100ff; color:#99F75E; font-family: Montserrat Alternates3; padding: 4px 4px 4px 4px; margin: 2px 2px;'>USA</span> has become more unequal currently reached the highest level. In particular the COVID years had an impact on the labor inequality.",
      },
    },
  ],
};
