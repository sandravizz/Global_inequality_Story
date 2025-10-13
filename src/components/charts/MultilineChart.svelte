<svelte:options accessors={true} />

<script>
  import { LayerCake, Svg, Html } from "layercake";

  import Line from "$components/charts/Line.svelte";
  import AxisX from "$components/charts/AxisX.svelte";
  import AxisY from "$components/charts/AxisY.svelte";
  import Annotation from "$components/charts/Annotation.svelte";

  export let chart;
  export let height = 500;

  let width;
  let data;
  let options;
  let annotations;

  $: {
    if (chart) {
      data = chart.data;
      options = chart.options ?? {};
      annotations = chart.annotations;
    }
  }
</script>

<div style="height: {height}px; width: 100%;" bind:clientWidth={width}>
  {#if data && width}
    <LayerCake
      {width}
      {height}
      x="year"
      y="value"
      z="country"
      flatData={data.flatMap((d) => d.values)}
      {data}
      yDomain={[0, 1]}
      custom={{ annotations: annotations }}
      padding={{ left: 24 }}
    >
      <Svg>
        <Line {...options} />
      </Svg>

      {#if annotations}
        <Html>
          <Annotation />
        </Html>
      {/if}

      <Html>
        <AxisX />
        <AxisY tickFormat={options.yTickFormat} />
      </Html>
    </LayerCake>
  {/if}
</div>
