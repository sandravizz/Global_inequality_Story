import * as aq from "arquero";
import { transformData, } from "$utils/arqueroHelpers";
import BeeswarmForceApplied from "$components/story/BeeswarmForce.applied.svelte";

import { autoType } from "d3";
import { preprocessor, merge } from "$utils/data";

import countries from "$data/wid_countries.csv";
import gini from "$data/gini_income.csv";

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

console.log('-----')
console.log(data.filter((d) => d.decade === 2020 && d.region === "Africa"))
console.log(data.filter((d) => d.decade === 2020 && d.region === "Africa").map(d => d.id))

export default {
    components: [
        BeeswarmForceApplied,
        BeeswarmForceApplied,
    ],
    steps: [
        {
            layers: [
                {
                    key: "country",
                    visible: true,
                    // highlightIds: data.filter((d) => d.decade === 2020 && d.region === "Africa").map(d => d.id),
                    highlightIds: [],
                    data: data.filter((d) => d.decade === 2020),
                    groupby: "region",
                    componentIndex: 0,
                },
                {
                    key: "region",
                    visible: true,
                    highlightIds: dataRegionMeansPerDecade.filter(d => d.decade === 2020).map(d => d.id),
                    data: dataRegionMeansPerDecade.filter(d => d.decade === 2020),
                    groupby: "region",
                    componentIndex: 1,
                    radius: 8,
                },
            ],
            description: {
                title: `World GINI Distribution`,
                text: "this is a text"
            }
        },
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: data.filter((d) => d.decade === 2020 && d.region === "Africa").map(d => d.id),
                    data: data.filter((d) => d.decade === 2020),
                    groupby: "region",
                    layout: "row",
                },
            ],
            description: {
                title: `Split by region`,
                text: "highlight Africa"
            }
        },




        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: null,
                    data: data.filter((d) => d.decade === 1980),
                    groupby: "region",
                    layout: "row",

                },
            ],
            description: {
                title: `1980s (${data
                    .filter((d) => d.decade === 1980 && !!d.value)
                    .reduce((acc, cur) => acc + cur.value, 0) /
                    data.filter((d) => d.decade === 1980)
                        .length}) `,
                text: "The era of 'Reaganomics' and 'Thatcherism' marked a global shift toward neoliberal policies, with deregulation, privatization, and tax cuts driving economic growth but also widening income inequality."
            }
        },
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: null,
                    excludeIds: [],
                    data: data.filter((d) => d.decade === 1990),
                    groupby: "region",
                    layout: "row",
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
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: null,
                    excludeIds: [],
                    data: data.filter((d) => d.decade === 2000),
                    groupby: "region",
                    layout: "row",
                },
            ],
            description: {
                title: `2000s (${data
                    .filter((d) => d.decade === 2000 && !!d.value)
                    .reduce((acc, cur) => acc + cur.value, 0) /
                    data.filter((d) => d.decade === 2000)
                        .length})`,
                text: "The decade was characterized by the dot-com boom and bust, followed by a housing bubble, leading to a financial crisis in 2008 that triggered a global recession and prompted unprecedented government intervention to stabilize economies."
            }
        },
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: null,
                    excludeIds: [],
                    data: data.filter((d) => d.decade === 2010),
                    groupby: "region",
                    layout: "row",
                },
            ],
            description: {
                title: `2010s (${data
                    .filter((d) => d.decade === 2010 && !!d.value)
                    .reduce((acc, cur) => acc + cur.value, 0) /
                    data.filter((d) => d.decade === 2010)
                        .length})`,
                text: "The aftermath of the financial crisis saw a period of slow recovery, central bank stimulus, and the rise of new technologies like smartphones and social media, with continued globalization alongside a growing backlash against income inequality and global trade agreements."
            }
        },
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: null,
                    excludeIds: [],
                    data: data.filter((d) => d.decade === 2020),
                    groupby: "region",
                    layout: "row",
                },
            ],
            description: {
                title: `2020s (${data
                    .filter((d) => d.decade === 2020 && !!d.value)
                    .reduce((acc, cur) => acc + cur.value, 0) /
                    data.filter((d) => d.decade === 2020)
                        .length})`,
                text: "The COVID-19 pandemic disrupted global economies, leading to massive government stimulus and shifts toward remote work, while renewed focus on climate change and social equity began to reshape business practices and international cooperation."
            }
        },
        {
            layers: [
                {
                    componentIndex: 0,
                    key: "country",
                    visible: true,
                    highlightIds: data
                        .filter((d) => d.decade === 2020 && d.region === "Europe")
                        .map((d) => d.id)
                        .slice(0, 5),
                    excludeIds: [],
                    data: data.filter((d) => d.decade === 2020),
                    groupby: "region",
                    layout: "row",
                }
            ],
            description: {
                title: "Some European highlights",
                text: "These countries are highlighted because I am trying out some new functionality."
            }
        },
    ]
};