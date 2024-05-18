import * as aq from "arquero";
import { transformData, } from "$utils/arqueroHelpers";
import BeeswarmForceApplied from "$components/story/BeeswarmForce.applied.svelte";

import { autoType, extent } from "d3";
import { preprocessor, merge } from "$utils/data";

import countries from "$data/wid_countries.csv";
import gini from "$data/gini_income.csv";


function getRandomSample(dataset, sampleSize) {
    let sample = [];
    while (sample.length < sampleSize) {
      const randomIndex = Math.floor(Math.random() * dataset.length);
      sample.push(dataset[randomIndex]);
      dataset.splice(randomIndex, 1);
    }
  
    return sample;
  }

const giniData = preprocessor(gini).map(autoType);
const countryData = preprocessor(countries).map(autoType);

const beeswarmData = merge(countryData, giniData, "country");

const getDecadeFromYear = (year) => Math.floor(year / 10) * 10;

const table = aq.table(transformData(beeswarmData));

const tableWithId = table
    .derive({
        decade: aq.escape((d) => getDecadeFromYear(d.year)),
        orgValue: (d) => d.value
    })
    .select(aq.not(["year", "value"]));

const data = tableWithId
    .groupby(["decade", "country", "region"])
    .select(aq.not("value"))
    .rollup({
        value: aq.op.mean("orgValue")
    })
    .derive({
        id: aq.op.row_number()
    })
    .objects();

const dataRegionMeansPerDecade = tableWithId
    .groupby(["decade", "region"])
    .select(aq.not("value"))
    .rollup({
        value: aq.op.mean("orgValue")
    })
    .derive({
        id: aq.op.row_number()
    })
    .objects();


const dataMedianPerDecade = tableWithId
    .groupby(["decade"])
    .select(aq.not("value"))
    .rollup({
        value: aq.op.median("orgValue")
    })
    .derive({
        id: aq.op.row_number()
    })
    .objects();

const renderData = data; 

export default {
    components: [
        BeeswarmForceApplied,
    ],
    steps: [
        {
            layers: [
                {
                    visible: true,
                    componentIndex: 0,
                    key: "id",
                    data: renderData.filter((d) => d.decade === 2010),
                    highlightIds: renderData.filter((d) => d.decade === 2010).map(d => d.id),
                    groupby: "region",
                    layout: "row",
                    radius: 6,
                    annotations: [
                        {

                            x: 132.0428459278524,
                            y: 150.50184660981873,
                            dy: -80,
                            dx: -20,
                            title: "Sweden",
                            label: "this is where i live"
                        }
                    ]
                },                
            ],
            description: {
                title: `World GINI Distribution`,
                text: "group by region, filter by 2010"
            }
        },
        {
            layers: [
                {
                    visible: true,
                    componentIndex: 0,
                    key: "id",
                    data: renderData,
                    groupby: "decade",
                    radius: 2,
                    layout: "row"
                },
            ],
            description: {
                title: `World GINI Distribution`,
                text: "group by decade"
            }
        },
        {
            layers: [
                {
                    visible: true,
                    componentIndex: 0,
                    key: "id",
                    data: renderData,
                    highlightIds: renderData.filter((d) => d.decade === 2020).map(d => d.id),
                    groupby: "decade",
                    radius: 2,
                    layout: "row"
                },
            ],
            description: {
                title: `World GINI Distribution`,
                text: "highlight the 2020s"
            }
        },

        {
            layers: [
                {
                    visible: true,
                    componentIndex: 0,
                    key: "id",
                    data: renderData.filter((d) => d.decade === 2020),
                    highlightIds: renderData.filter((d) => d.decade === 2020).map(d => d.id),
                    groupby: "region",
                    radius: 6,
                    layout: "row"
                },
            ],
            description: {
                title: `World GINI Distribution`,
                text: " filter 2020s, split by region"
            }
        },
   
        {
            layers: [
                {
                    visible: true,
                    componentIndex: 0,
                    key: "id",
                    highlightIds: renderData.filter((d) => d.decade === 2020).map(d => d.id),
                    data: data.filter((d) => d.decade === 2020),
                    groupby: "decade",
                    layout: "row",
                    radius: 4,
                },
            ],
            description: {
                title: `1990s (${data
                    .filter((d) => d.decade === 1990 && !!d.value)
                    .reduce((acc, cur) => acc + cur.value, 0) /
                    data.filter((d) => d.decade === 1990)
                        .length})`,
                text: "Globalization and the rise of the Internet fueled rapid economic expansion, with the fall of the Soviet Union opening up new markets and technology companies beginning to transform the way business was conducted."
            }
        },
        // {
        //     layers: [
        //         {
        //             componentIndex: 0,
        //             key: "country",
        //             visible: true,
        //             highlightIds: null,
        //             excludeIds: [],
        //             data: data.filter((d) => d.decade === 2000),
        //             groupby: "region",
        //             layout: "row",
        //         },
        //     ],
        //     description: {
        //         title: `2000s (${data
        //             .filter((d) => d.decade === 2000 && !!d.value)
        //             .reduce((acc, cur) => acc + cur.value, 0) /
        //             data.filter((d) => d.decade === 2000)
        //                 .length})`,
        //         text: "The decade was characterized by the dot-com boom and bust, followed by a housing bubble, leading to a financial crisis in 2008 that triggered a global recession and prompted unprecedented government intervention to stabilize economies."
        //     }
        // },
        // {
        //     layers: [
        //         {
        //             componentIndex: 0,
        //             key: "country",
        //             visible: true,
        //             highlightIds: null,
        //             excludeIds: [],
        //             data: data.filter((d) => d.decade === 2010),
        //             groupby: "region",
        //             layout: "row",
        //         },
        //     ],
        //     description: {
        //         title: `2010s (${data
        //             .filter((d) => d.decade === 2010 && !!d.value)
        //             .reduce((acc, cur) => acc + cur.value, 0) /
        //             data.filter((d) => d.decade === 2010)
        //                 .length})`,
        //         text: "The aftermath of the financial crisis saw a period of slow recovery, central bank stimulus, and the rise of new technologies like smartphones and social media, with continued globalization alongside a growing backlash against income inequality and global trade agreements."
        //     }
        // },
        // {
        //     layers: [
        //         {
        //             componentIndex: 0,
        //             key: "country",
        //             visible: true,
        //             highlightIds: null,
        //             excludeIds: [],
        //             data: data.filter((d) => d.decade === 2020),
        //             groupby: "region",
        //             layout: "row",
        //         },
        //     ],
        //     description: {
        //         title: `2020s (${data
        //             .filter((d) => d.decade === 2020 && !!d.value)
        //             .reduce((acc, cur) => acc + cur.value, 0) /
        //             data.filter((d) => d.decade === 2020)
        //                 .length})`,
        //         text: "The COVID-19 pandemic disrupted global economies, leading to massive government stimulus and shifts toward remote work, while renewed focus on climate change and social equity began to reshape business practices and international cooperation."
        //     }
        // },
        // {
        //     layers: [
        //         {
        //             componentIndex: 0,
        //             key: "country",
        //             visible: true,
        //             highlightIds: data
        //                 .filter((d) => d.decade === 2020 && d.region === "Europe")
        //                 .map((d) => d.id)
        //                 .slice(0, 5),
        //             excludeIds: [],
        //             data: data.filter((d) => d.decade === 2020),
        //             groupby: "region",
        //             layout: "row",
        //         }
        //     ],
        //     description: {
        //         title: "Some European highlights",
        //         text: "These countries are highlighted because I am trying out some new functionality."
        //     }
        // },
    ]
};