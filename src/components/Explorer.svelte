<script>
  import { group } from "d3";

  import Chart from "./charts/DifferenceChart/Chart.svelte";
  import MultilineChart from "./charts/LineChart/MultilineChart.svelte";

  import differenceData from "$data/data_diff.csv";
  import lineData from "$data/data_all.csv";

  // tick formatters
  const formatterPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
  });

  const yTickFormatterPercent = (val) => formatterPercent.format(val);

  const formatterNum = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

  const yTickFormatterNum = (val) => formatterNum.format(val);

  // countries data
  const wid_countries = new Map(
    differenceData.map((d) => [d.country, d.shortname]),
  );

  const countries = [];
  wid_countries.forEach((k, v) => countries.push({ country: v, shortname: k }));

  let country = "US";

  // Line data
  const formattedData = lineData.map((d) => ({
    ...d,
    value: +d.gini_pretaxes,
  }));
  const groupedByCountry = group(formattedData, (d) => d.country).entries();
  const renderLineData = Array.from(groupedByCountry, ([key, value]) => ({
    country: key,
    region: value[0].region,
    region2: value[0].region2,
    values: value.map((item) => ({ ...item })),
  }));

  // Difference Data
  const filterDifferenceData = (countryCode, data) => {
    const countryData = data.filter((d) => d.country === countryCode);

    if (countryData.length === 0) {
      return undefined;
    }

    return [
      {
        country: countryCode,
        type: "lowest50",
        values: countryData.map((d) => ({ year: d.year, value: +d.lowest_50 })),
      },
      {
        country: countryCode,
        type: "highest10",
        values: countryData.map((d) => ({
          year: d.year,
          value: +d.highest_10,
        })),
      },
    ];
  };

  $: renderDifferenceData = filterDifferenceData(country, differenceData);
  $: region = renderLineData.find((d) => [country].includes(d.country)).region2;
</script>

<div class="filter">
  <div>Country:</div>
  <select bind:value={country}>
    {#each countries.sort((a, b) => (a.shortname < b.shortname ? -1 : 1)) as c}
      <option value={c.country}>{c.shortname}</option>
    {/each}
  </select>
</div>

{#if country}
  <div class="container">
    <div>
      <h1>GINI index</h1>
      <h2>Including {region}</h2>
      <div class="stacked" style="height: 300px">
        <div>
          <!-- all the country lines -->
          <MultilineChart
            height={300}
            chart={{
              key: "country",
              componentIndex: 0,
              data: renderLineData,
              options: {
                stroke: "#4c4c4c",
                strokeWidth: 0.5,
                strokeOpacity: 0.6,
                yTickFormat: yTickFormatterNum,
              },
            }}
          />
        </div>
        <div>
          <!-- region lines -->
          <MultilineChart
            height={300}
            chart={{
              key: "country",
              componentIndex: 0,
              data: renderLineData.filter((d) => d.region2 === region),
              options: {
                stroke: "#ff4d4d",
                strokeOpacity: 1,
                strokeWidth: 0.5,
                yTickFormat: yTickFormatterNum,
              },
            }}
          />
        </div>

        <div>
          <!-- selected country line -->
          <MultilineChart
            height={300}
            chart={{
              key: "country",
              componentIndex: 0,
              data: renderLineData.filter((d) => [country].includes(d.country)),
              options: {
                stroke: "var(--color-background)",
                strokeOpacity: 0.5,
                strokeWidth: 12,
                yTickFormat: yTickFormatterNum,
              },
            }}
          />
        </div>

        <div>
          <!-- selected country line -->
          <MultilineChart
            height={300}
            chart={{
              key: "country",
              componentIndex: 0,
              data: renderLineData.filter((d) => [country].includes(d.country)),
              options: {
                stroke: "red",
                strokeOpacity: 1,
                strokeWidth: 4,
                yTickFormat: yTickFormatterNum,
              },
            }}
          />
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>Share of total income</h1>
        <h2>
          <span
            style="background-color:rgba(255,77,77,0.7);color: #fff;font-weight: bold;"
            >Top 10%</span
          >
          vs
          <span
            style="background-color:rgba(77,166,255,0.7);color: #fff;font-weight: bold;"
            >bottom 50%</span
          >
        </h2>
      </div>
      <div>
        <Chart
          height={300}
          chart={{
            key: "country",
            componentIndex: 0,
            data: renderDifferenceData,
            options: {
              stroke: ["#4da6ff", "#ff4d4d"],
              strokeOpacity: 1,
              strokeWidth: 3,
              yTickFormat: yTickFormatterPercent,
            },
          }}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .filter {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 24px;
  }

  .filter > div {
    margin-top: -5px;
  }

  .container {
    display: flex;
    gap: 48px;
    margin-bottom: 16px;
  }

  .container > div {
    width: 50%;
  }

  @media (max-width: 499px) {
    .container {
      flex-direction: column;
    }

    .container > div {
      width: 100%;
    }
  }

  .stacked {
    position: relative;
  }

  .stacked div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  h2 span {
    border-radius: 2px;
    padding: 2px 4px;
    color: #fff;
  }

  h1 {
    font-size: var(--font-size-md);
    margin-bottom: 0;
  }

  h2 {
    margin-top: 4px;
    font-size: var(--font-size-sm);
    font-size: var(--font-size-xs);
  }
</style>
