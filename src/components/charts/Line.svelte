<script>
  import { getContext } from "svelte";
  import { line } from "d3-shape";
  import { curveMonotoneX } from "d3";

  export let stroke = "#fff";
  export let strokeWidth = 1;
  export let strokeOpacity = 1;

  const lineGenerator = line()
    .x((d) => $xGet(d))
    .y((d) => $yGet(d))
    .curve(curveMonotoneX);

  const { data, xGet, yGet, width } = getContext("LayerCake");
</script>

{#key $width}
  <g class="line-group">
    {#each $data as group, i}
      <path
        class="path-line"
        d={lineGenerator(group.values)}
        stroke={Array.isArray(stroke) ? stroke[i] : stroke}
        stroke-opacity={strokeOpacity}
        stroke-width={strokeWidth}
        fill="none"
      />
    {/each}
  </g>
{/key}

<style>
  .path-line {
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
    transition: all 0.8s;
  }
</style>
