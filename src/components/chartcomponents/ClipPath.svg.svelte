<script>
  import { getContext } from "svelte";
  import { area, curveMonotoneX } from "d3";

  const { data, xGet, yGet, yScale, width } = getContext("LayerCake");

  export let stroke = "#fff";
  export let strokeWidth = 1;

  $: above = area()
    .x($xGet)
    .y0(() => $yScale.range()[0])
    .y1($yGet)
    .curve(curveMonotoneX);

  $: below = area()
    .x($xGet)
    .y0(() => $yScale.range()[1])
    .y1($yGet)
    .curve(curveMonotoneX);
</script>

{#key $width}
  <g class="difference">
    <g class="clips">
      <clipPath id="above">
        <path d={below($data[0].values)} stroke-width={strokeWidth} />
      </clipPath>

      <clipPath id="below">
        <path d={below($data[1].values)} stroke-width={strokeWidth} />
      </clipPath>
    </g>

    <g class="paths">
      <path
        d={above($data[1].values)}
        fill-opacity="0.3"
        fill={stroke[1]}
        clip-path="url(#above)"
      />
      <path
        d={above($data[0].values)}
        fill-opacity="0.3"
        fill={stroke[0]}
        clip-path="url(#below)"
      />
    </g>
  </g>
{/key}

<style>
  .clips path,
  .paths path {
    transition: all 0.8s;
  }
</style>
