<svelte:options accessors={true} />

<script>
  import { onMount } from "svelte";
  import { LayerCake, Svg, Html } from "layercake";
  import { ticks } from "d3";

  import Line from "$components/charts/Line.svelte";
  import AxisX from "$components/charts/AxisX.svelte";
  import AxisY from "$components/charts/AxisY.svelte";
  import Annotation from "$components/charts/Annotation.svelte";

  export let chart;

  let width;
  let containerHeight;
  let data;
  let options;
  let annotations;

  // Canvas for text measurement
  let canvas;
  let ctx;
  let fontsReady = false;

  // Initialize canvas and wait for fonts to load
  onMount(async () => {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");

    // Wait for fonts to be loaded - this Promise resolves when all fonts are ready
    await document.fonts.ready;
    fontsReady = true;
  });

  // Function to get font size based on current width (matching media queries in app.css)
  function getFontSize(width) {
    if (width <= 480) return 14;
    if (width <= 780) return 16;
    return 18;
  }

  // Update canvas font when width changes
  $: if (ctx && width && fontsReady) {
    const fontSize = getFontSize(width);
    ctx.font = `${fontSize}px "Montserrat Alternates2", sans-serif`;
  }

  // Function to measure text width using canvas
  function measureTextWidth(text) {
    if (!ctx) return 0;
    return ctx.measureText(text).width;
  }

  // Calculate dynamic padding based on actual tick labels
  let padding = { top: 0, right: 0, bottom: 0, left: 0 };

  // Define yDomain (matching what's passed to LayerCake)
  const yDomain = [0, 1];

  // Recalculate padding whenever chart, width, or fonts change
  $: {
    if (chart) {
      data = chart.data;
      options = chart.options ?? {};
      annotations = chart.annotations;
    }
  }

  $: if (chart && width && ctx && fontsReady) {
    // Calculate left padding based on actual Y-axis tick labels
    if (options?.yTickFormat) {
      // Generate tick values the same way AxisY does
      const tickVals = ticks(yDomain[0], yDomain[1], 4);
      const yMax = yDomain[1];
      const yMin = yDomain[0];

      // Measure all tick labels and find the maximum width
      let maxWidth = 0;
      for (const tick of tickVals) {
        // Skip the label that AxisY filters out
        if (yMax - tick !== yMin) {
          // Format the same way AxisY does: tickFormat(yMax - tick)
          const label = options.yTickFormat(yMax - tick);
          const textWidth = measureTextWidth(label);
          maxWidth = Math.max(maxWidth, textWidth);
        }
      }

      // Padding = label width + 10px gap from AxisY transform
      padding = {
        ...padding,
        left: Math.ceil(maxWidth) + 10,
      };
    }

    // Calculate bottom padding based on X-axis tick labels
    if (data) {
      // Get current font size based on width
      const fontSize = getFontSize(width);

      // For X-axis, we need height not width
      // Using font metrics: fontSize * lineHeight + marginBottom
      // Based on .text-small CSS: lineHeight 1.4 + 5px margin
      const textHeight = fontSize * 1.4 + 5;

      padding = {
        ...padding,
        bottom: Math.ceil(textHeight),
      };
    }
  }
</script>

<div
  class="chart-container"
  bind:clientWidth={width}
  bind:clientHeight={containerHeight}
>
  {#if data && width && containerHeight}
    <LayerCake
      {width}
      height={containerHeight}
      x="year"
      y="value"
      z="country"
      flatData={data.flatMap((d) => d.values)}
      {data}
      {yDomain}
      custom={{ annotations: annotations }}
      {padding}
    >
      <Svg>
        <Line {...options} />
      </Svg>

      {#if annotations}
        <Html>
          <Annotation />
        </Html>
      {/if}

      <Html>
        <AxisX />
        <AxisY tickFormat={options.yTickFormat} />
      </Html>
    </LayerCake>
  {/if}
</div>

<style>
  .chart-container {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
