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
</script>

<div class="filter">
  <div>Country:</div>
  <select bind:value={country}>
    {#each countries.sort((a, b) => (a.shortname < b.shortname ? -1 : 1)) as c}
      <option value={c.country}>{c.shortname}</option>
    {/each}
  </select>
</div>

<div class="container header">
  <div>GINI index</div>
  <div>
    <div>Share of total income</div>
    <div class="subheader">
      <span style="background-color:#ff4d4d;">Top 10%</span>
      vs
      <span style="background-color:#4da6ff; ">bottom 50%</span>
    </div>
  </div>
</div>

{#if country}
  <div class="container">
    <div class="stacked">
      <div class="colheader">GINI index</div>
      <div>
        <!-- all the country lines -->
        <MultilineChart
          height={300}
          chart={{
            key: "country",
            componentIndex: 0,
            data: renderLineData,
            options: {
              strokeWidth: 0.5,
              strokeOpacity: 0.1,
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
            data: renderLineData.filter((d) => d.region === "Europe"),
            options: {
              stroke: "red",
              strokeOpacity: 0.4,
              strokeWidth: 0.7,
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
    <div>
      <div class="colheader">
        <div>Share of total income</div>
        <div class="subheader">
          <span style="background-color:#ff4d4d;">Top 10%</span>
          vs
          <span style="background-color:#4da6ff; ">bottom 50%</span>
        </div>
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
              strokeWidth: 2,
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

  .container {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }

  .container > div {
    width: 50%;
  }

  .colheader {
    display: none;
  }

  @media (max-width: 499px) {
    .container {
      flex-direction: column;
      gap: 48px;
    }

    .container > div {
      width: 100%;
      height: 300px;
    }

    .header {
      display: none;
    }

    .colheader {
      display: block;
      margin-bottom: 4px;
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

  .subheader {
    font-size: 0.8em;
  }

  .subheader span {
    border-radius: 2px;
    padding: 2px 4px;
    color: #fff;
  }
</style>
