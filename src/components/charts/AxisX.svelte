<script>
  import { ticks } from "d3";
  import { getContext } from "svelte";

  const { xScale } = getContext("LayerCake");

  $: tickVals = ticks($xScale.domain()[0], $xScale.domain()[1], 4);
</script>

<div class="axis">
  {#each tickVals as tick, i (tick)}
    <div
      class="tick"
      style="left:{$xScale(tick)}px;"
      class:moveRight={tick === $xScale.domain()[0]}
      class:moveLeft={tick === $xScale.domain()[1]}
    >
      <div class="text-small">{tick}</div>
    </div>
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
    transform: translateX(-50%);
  }

  .moveRight .text-small {
    transform: none;
  }

  .moveLeft .text-small {
    transform: translateX(-100%);
  }
</style>
