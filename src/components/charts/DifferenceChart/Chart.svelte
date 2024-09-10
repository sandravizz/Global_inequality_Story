<svelte:options accessors={true} />

<script>
  import { LayerCake, Svg, Html } from "layercake";

  import MultiLine from "$components/chartcomponents/MultiLine.svg.svelte";
  import ClipPath from "$components/chartcomponents/ClipPath.svg.svelte";
  import Legend from "./Legend.html.svelte";
  import AxisX from "../LineChart/AxisX.html.svelte";
  import Annotation from "$components/chartcomponents//Annotation.html.svelte";

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
      yDomain={[1, 0]}
      custom={{ annotations: annotations }}
    >
      <Svg>
        <ClipPath {...options} />
        <MultiLine {...options} {height} />
      </Svg>

      <Html>
        <Legend {...options} />
        <AxisX {...options} />
      </Html>

      {#if annotations}
        <Html>
          <Annotation />
        </Html>
      {/if}
    </LayerCake>
  {/if}
</div>
