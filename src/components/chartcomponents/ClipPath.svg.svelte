<script>
  import { getContext } from "svelte";
  import { area, curveMonotoneX } from "d3";
  import { v4 as uuidv4 } from "uuid";

  const { data, xGet, yGet, yScale, width } = getContext("LayerCake");

  export let stroke = "#fff";
  export let strokeWidth = 1;

  $: above = area()
    .x($xGet)
    .y0(() => $yScale.range()[0])
    .y1((d) => $yGet(d))
    .curve(curveMonotoneX);

  $: below = area()
    .x($xGet)
    .y0(() => $yScale.range()[1])
    .y1($yGet)
    .curve(curveMonotoneX);

  // needs to be unique for each instance of the component
  const idAbove = uuidv4();
  const idBelow = uuidv4();
</script>

{#key $width}
  <g class="difference">
    <g class="clips">
      <clipPath id={idAbove}>
        <path d={below($data[0].values)} stroke-width={strokeWidth} />
      </clipPath>

      <clipPath id={idBelow}>
        <path d={below($data[1].values)} stroke-width={strokeWidth} />
      </clipPath>
    </g>

    <g class="paths">
      <path
        d={above($data[1].values)}
        fill-opacity="0.3"
        fill={stroke[1]}
        clip-path="url(#{idAbove})"
      />

      <path
        d={above($data[0].values)}
        fill-opacity="0.3"
        fill={stroke[0]}
        clip-path="url(#{idBelow})"
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
