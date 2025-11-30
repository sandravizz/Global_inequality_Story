<script>
  import { getContext } from "svelte";

  const { flatData, x, z, xGet, yGet, custom, width, yScale, xScale, padding } =
    getContext("LayerCake");

  const getAnnotationData = (xValue, zValue) => {
    return $flatData.find((d) => $x(d) === xValue && $z(d) === zValue);
  };

  const getAnntationStylePosition = (
    yValue = 0,
    xValue = 0,
    dy = "0px",
    dx = "0px",
    anchor = "start",
  ) => {
    // Add + sign if dy/dx doesn't start with a sign
    const dyWithSign = dy && !dy.toString().match(/^[+-]/) ? `+ ${dy}` : dy;
    const dxWithSign = dx && !dx.toString().match(/^[+-]/) ? `+ ${dx}` : dx;
    const transform = `transform: ${
      anchor === "start"
        ? "translateX(0)"
        : anchor === "end"
          ? "translateX(-100%)"
          : "translateX(-50%)"
    }`;

    const top = `calc(${yValue}px ${dyWithSign})`;
    const left = `calc(${xValue}px ${dxWithSign})`;
    return `top: ${top}; left: ${left}; ${transform}`;
  };
</script>

{#key $width}
  {#each $custom.annotations as { x: xValue, y: yValue, z: zValue, text, dy = "", dx = "", anchor = "start" }}
    {#if xValue && zValue && text}
      <!-- Inside chart annotation -->
      <div
        class="annotation background text-small"
        style={getAnntationStylePosition(
          $yGet(getAnnotationData(xValue, zValue)),
          $xGet(getAnnotationData(xValue, zValue)),
          dy,
          dx,
          anchor,
        )}
      >
        {text}
      </div>
    {:else if xValue !== undefined && yValue !== undefined}
      <div
        class="annotation background text-small middle"
        style={getAnntationStylePosition(
          $yScale(yValue),
          $xScale(xValue),
          dy,
          dx,
          anchor,
        )}
      >
        {@html text}
      </div>
    {:else}
      {#if xValue !== undefined}
        <!-- x axis annotation -->
        <div class="xLine" style="left: {$xScale(xValue)}px;" />
        <div
          class="annotation background text-small middle"
          style={getAnntationStylePosition(
            $yScale(Math.max($yScale.domain()[0], $yScale.domain()[1])),
            $xScale(xValue),
            "- 2em",
            "",
            "middle",
          )}
        >
          {@html text}
        </div>
      {/if}

      {#if yValue !== undefined}
        <!-- y axis annotation -->
        <div
          class="annotation background text-small"
          style={getAnntationStylePosition(
            $yScale(Math.max($yScale.domain()[0], $yScale.domain()[1])),
            0,
            dy,
            dx,
            anchor,
          )}
        >
          {@html text}
        </div>
      {/if}
    {/if}
  {/each}
{/key}

<style>
  .annotation {
    display: inline-block;
    position: absolute;
  }

  .background {
    background-color: var(--color-annotation-background);
    padding: 3px 4px;
    border-radius: 4px;
  }

  .text-small {
    white-space: nowrap;
    letter-spacing: -0.5px;
    transition: all 1.5s;
    text-align: right;
    opacity: 1;
    z-index: 2;
  }

  .xLine {
    display: inline-block;
    position: absolute;
    z-index: 1;
    border-width: 0;
    border-left: 1px dashed var(--color-chart-axis);
    top: 0px;
    bottom: 0;
    opacity: 0.4;
  }
</style>
