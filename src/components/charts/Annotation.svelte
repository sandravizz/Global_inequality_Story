<script>
  import { getContext } from "svelte";

  const { flatData, x, z, xGet, yGet, custom, width, yScale, xScale } =
    getContext("LayerCake");

  const getAnnotationData = (xValue, zValue) => {
    return $flatData.find((d) => $x(d) === xValue && $z(d) === zValue);
  };
</script>

{#key $width}
  {#each $custom.annotations as { x: xValue, y: yValue, z: zValue, text, dy = 0, dx = 0 }}
    {#if xValue && zValue && text}

      <!-- Inside chart annotation -->
      <div
        class=" text-small absolute"
        style="
			left:{$xGet(getAnnotationData(xValue, zValue)) + dx}px; 
			top:{$yGet(getAnnotationData(xValue, zValue)) + dy}px"
      >
        {text}
      </div>
    {:else if xValue !== undefined && yValue !== undefined}
      <div
        class="text-small absolute middle"
        style="left: {$xScale(xValue) + dx}px; top:{$yScale(yValue)}px;"
      >
        {text}
      </div>
    {:else}
      {#if xValue !== undefined}

        <!-- x axis annotation -->
        <div
          class="text-small absolute middle"
          style="left: {$xScale(xValue) + dx}px; top: -32px;"
        >
          {text}
        </div>
        <div class="xLine absolute" style="left: {$xScale(xValue)}px;" />
      {/if}

      {#if yValue !== undefined}

        <!-- y axis annotation -->
        <div
          class="text-small"
          style="bottom: {$yScale(yValue) + dy}px; left: 3px; "
        >
          {text}
        </div>
      {/if}
    {/if}
  {/each}
{/key}

<style>
  .absolute {
    position: absolute;
  }

  .middle {
    transform: translateX(-50%);
  }

  .text-small {
    letter-spacing: -0.5px;
    transition: all 0.8s;
    opacity: 1;
  }

  .xLine {
    border-width: 0;
    border-left: 0.1px dashed var(--color-chart-axis);
    top: -8px;
    bottom: 0;
    opacity: 0.3;
  }
</style>
