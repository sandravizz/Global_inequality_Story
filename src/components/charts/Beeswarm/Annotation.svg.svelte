<script>
  import { getContext } from "svelte";
  import { select } from "d3";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import { annotation, annotationCalloutCircle } from "d3-svg-annotation";

  export let x = 220;
  export let y = 130;
  export let dx = 0;
  export let dy = 0;
  export let radius = 10;
  export let title = "Third Title";
  export let label = "Yet another annotation";

  const { width, height } = getContext("LayerCake");

  const tweenParameters = {
    delay: 1000,
    duration: 300,
    easing: cubicInOut,
  };

  const tAlpha = tweened(0, tweenParameters);

  let svgRef;

  $: {
    const annotations = [
      {
        note: {
          title: title,
          label: label,
        },
        type: annotationCalloutCircle,
        subject: { radius: radius },
        color: ["#fff"],
        x: x,
        y: y,
        dy: dy,
        dx: dx,
      },
    ];

    const svg = select(svgRef);
    const makeAnnotations = annotation();
    svg
      .append("g")
      .attr("class", "annotation-group")
      .call(makeAnnotations.annotations(annotations));

    tAlpha.set(1);
  }
</script>

{#if $width && $height}
  <svg
    style="opacity: {$tAlpha}"
    width={$width}
    height={$height}
    bind:this={svgRef}
  />
{/if}
