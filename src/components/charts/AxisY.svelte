<script>
  import { ticks } from "d3";
  import { getContext } from "svelte";

  export let tickFormat = (val) => val;

  const { yScale } = getContext("LayerCake");

  $: tickVals = ticks($yScale.domain()[0], $yScale.domain()[1], 4);
  $: yMax = $yScale.domain()[1];
  $: yMin = $yScale.domain()[0];
</script>

<div class="axis">
  {#each tickVals as tick (tick)}
    {#if yMax - tick !== yMin}
      <div
        class="tick"
        style="bottom:{$yScale(tick)}px;"
        class:moveTop={tick === $yScale.domain()[0]}
        class:moveBottom={tick === $yScale.domain()[1]}
      >
        <div class="text-small">
          {tickFormat ? tickFormat (yMax - tick) : yMax - tick}
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  .axis {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .tick {
    position: absolute;
    display: inline-block;
    width: 0;
  }

  .text-small {
    position: absolute;
    white-space: nowrap;
    transform: translateX(calc(-100% - 10px));
  }

  .moveTop .text-small {
    transform: translateX(-100%);
  }
</style>
