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
      <!-- point annotation -->
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
        <!-- x line annotation -->
        <div
          class="label absolute sm middle lowlight"
          style="left: {$xScale(xValue) + dx}px; top: -32px;"
        >
          {text}
        </div>
        <div class="xLine absolute" style="left: {$xScale(xValue)}px;" />
      {/if}

      {#if yValue !== undefined}
        <!-- y line annotation -->
        <div
          class="label absolute sm lowlight"
          style="bottom: {$yScale(yValue) + dy}px; left: 0; "
        >
          {text}
        </div>
        <!-- <hr
					class="absolute lowlight dotted"
					style="top: {$yScale(yValue)}px; left: 0; right:0; "
				/> -->
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
    color: #d5f2f2;
  }

  .label {
    letter-spacing: -0.5px;
    transition: all 0.8s;
    opacity: 1;
    font-size: 0.8em;
  }

  .xLine {
    border-width: 0;
    border-left: 0.1px dashed #d5f2f2;
    top: -8px;
    bottom: 0;
    opacity: 0.3;
  }
</style>
