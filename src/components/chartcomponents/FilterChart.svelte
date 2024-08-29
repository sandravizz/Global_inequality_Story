<script>
  export let data;
  export let chart;
  export let filters = [];
  export let labels = [];

  const filterValues = new Map();

  // initialise filter values
  filters.forEach((f) => filterValues.set(f, new Set()));

  // set values for filters
  data.forEach((d) => {
    filters.forEach((f) => {
      const fvs = filterValues.get(f);
      fvs.add(d[f]);
      filterValues.set(f, fvs);
    });
  });

  let selectedValues = new Map();

  const onChange = (filter, value) => {
    selectedValues.set(filter, value);
    selectedValues = selectedValues;
  };

  let renderData = data;
  $: {
    renderData = data;

    const selects = Array.from(selectedValues, ([name, value]) => ({
      name,
      value,
    }));

    const validSelects = selects.filter((s) => s.value !== "all");

    if (validSelects.length) {
      validSelects.forEach((vs) => {
        renderData = renderData.filter((d) => d[vs.name] === vs.value);
      });
    }
  }
</script>

<div id="filters">
  {#each labels as label, i}
    <div class="filter">
      <div>{label}</div>
      <select on:change={(e) => onChange(filters[i], e.target.value)}>
        <option value="all">-- All --</option>
        {#each [...filterValues.get(filters[i])] as val}
          <option value={val}>{val}</option>
        {/each}
      </select>
    </div>
  {/each}
</div>

<div id="chart">
  <div>
    <svelte:component
      this={chart}
      chart={{ data: data, options: { strokeOpacity: 0.3, strokeWidth: 0.5 } }}
    />
  </div>

  <div>
    <svelte:component
      this={chart}
      chart={{
        data: renderData,
        options: {
          strokeOpacity:
            data.length === renderData.length || renderData.length === 0
              ? 0
              : 0.8,
          strokeWidth: renderData.length === 1 ? 4 : 2,
          stroke: "#03d69b",
        },
      }}
    />
  </div>
</div>

<style>
  #filters {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
  }

  .filter {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .filter > div {
    min-width: 100px;
  }

  select {
    width: 225px;
  }

  @media (min-width: 500px) {
    #filters {
      grid-template-columns: 1fr 1fr;
    }

    select {
      max-width: 250px;
    }
  }

  #chart {
    margin: 32px 0 48px;
    position: relative;
  }

  #chart div:last-of-type {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
