<svelte:options accessors={true} />

<script>
  import { LayerCake, Svg, Html } from "layercake";

  import Line from "$components/charts/Line.svelte";
  import AxisX from "$components/charts/AxisX.svelte";
  import AxisY from "$components/charts/AxisY.svelte";
  import Annotation from "$components/charts/Annotation.svelte";
  import ClipPath from "$components/charts/ClipPath.svelte";

  export let chart;
  export let height = 500;

  let width;
  let key;
  let data;
  let options;
  let annotations;

  $: {
    if (chart) {
      key = chart.key;
      data = chart.data;
      options = chart.options ?? {};
      annotations = chart.annotations;

      if (data.length !== 2) {
        throw new Error(
          "DifferenceChart: Data has to be of length 2 (ie. contiain excatly two series",
        );
      }
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
      padding={{ left: 28 }}
      yDomain={[0, 1]}
      custom={{ annotations: annotations }}
    >
      <Svg>
        <ClipPath {...options} />
        <Line {...options} {height} />
      </Svg>

      <Html>
        <AxisX {...options} />
        <AxisY tickFormat={options.yTickFormat} />
      </Html>

      {#if annotations}
        <Html>
          <Annotation />
        </Html>
      {/if}
    </LayerCake>
  {/if}
</div>
