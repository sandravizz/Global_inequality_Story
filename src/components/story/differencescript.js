import DifferenceChart from "$components/charts/DifferenceChart.svelte";
import data from "$data/data_diff.csv";

const formatter = new Intl.NumberFormat("en-US", {
  style: "percent",
});

const yTickFormatter = (val) => formatter.format(val);

const countryCodes = ["US", "SE", "DE"];

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
          data: renderData.filter((d) => d.country === "US"),
          options: {
            stroke: ["#4da6ff", "#ff4d4d"],
            strokeOpacity: 1,
            strokeWidth: 2,
            yTickFormat: yTickFormatter,
          },
          annotations: [
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
        title: ``,
        text: ``,
      },
    },
    {
      charts: [
        {
          key: "country",
          componentIndex: 0,
          data: renderData.filter((d) => d.country === "SE"),
          options: {
            stroke: ["#4da6ff", "#ff4d4d"],
            strokeOpacity: 1,
            strokeWidth: 2,
            yTickFormat: yTickFormatter,
          },
        },
      ],
      description: {
        title: ``,
        text: ``,
      },
    },
  ],
};
