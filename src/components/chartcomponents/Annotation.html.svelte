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
        class="label absolute"
        style="
			left:{$xGet(getAnnotationData(xValue, zValue)) + dx}px; 
			top:{$yGet(getAnnotationData(xValue, zValue)) + dy}px"
      >
        {text}
      </div>
    {:else if xValue !== undefined && yValue !== undefined}
      <div
        class="label absolute middle lowlight"
        style="left: {$xScale(xValue) + dx}px; top:{$yScale(yValue)}px;"
      >
        {text}
      </div>
    {:else}
      {#if xValue !== undefined}

        <!-- x axis annotation -->
        <div
          class="label absolute middle lowlight"
          style="left: {$xScale(xValue) + dx}px; top: -32px;"
        >
          {text}
        </div>
        <div class="xLine absolute" style="left: {$xScale(xValue)}px;" />
      {/if}

      {#if yValue !== undefined}

        <!-- y axis annotation -->
        <div
          class="label2 absolute lowlight"
          style="bottom: {$yScale(yValue) + dy - 5.5}px; left: 5px; "
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

  .lowlight {
    color: var(--color-chart-axis);
  }

  .label {
    font-family: "Montserrat Alternates2", sans-serif;
    letter-spacing: -0.5px;
    transition: all 0.8s;
    opacity: 1;
    font-size: var(--font-size-md);
  }

  .label2 {
    font-family: "Montserrat Alternates1", sans-serif;
    letter-spacing: -0.5px;
    transition: all 0.8s;
    opacity: 1;
    font-size: var(--font-size-xs);
  }

  .xLine {
    border-width: 0;
    border-left: 0.1px dashed var(--color-chart-axis);
    top: -8px;
    bottom: 0;
    opacity: 0.3;
  }
</style>
