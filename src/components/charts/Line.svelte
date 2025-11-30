<script>
  import { getContext } from "svelte";
  import { line } from "d3-shape";
  import { curveMonotoneX } from "d3";

  export let stroke = "#fff";
  export let strokeWidth = 1;
  export let strokeOpacity = 1;
  export let drawFade = false;

  const { data, xGet, yGet, width } = getContext("LayerCake");

  const lineGenerator = line()
    .x((d) => $xGet(d))
    .y((d) => $yGet(d))
    .curve(curveMonotoneX);

  // Create a unique key that changes whenever drawFade becomes true
  let animationKey = 0;
  $: if (drawFade) {
    animationKey++;
  }
</script>

{#key $width}
  <g class="line-group">
    {#each $data as d, i}
      {#key drawFade ? animationKey : null}
        <path
          class="path-line"
          class:draw-animation={drawFade}
          d={lineGenerator(d.values)}
          stroke={Array.isArray(stroke) ? stroke[i] : stroke}
          stroke-opacity={strokeOpacity}
          stroke-width={strokeWidth}
          fill="none"
          pathLength="1"
        />
      {/key}
    {/each}
  </g>
{/key}

<style>
  .path-line {
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
    transition: all 1.5s;
  }

  .draw-animation {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw-line 1.5s ease-out forwards;
  }

  @keyframes draw-line {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
