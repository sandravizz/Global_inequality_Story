<script>
  import { getContext, onMount, onDestroy, afterUpdate } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import { interpolateLab } from "d3";

  export let node;
  export let color;
  export let r = 4;

  const { register, deregister, invalidate } = getContext("myCanvas");

  const tweenParameters = {
    duration: 1000,
    easing: cubicInOut,
  };

  const tX = tweened(null, tweenParameters);
  const tY = tweened(null, tweenParameters);
  const tR = tweened(null, tweenParameters);
  const tColor = tweened(color, {
    ...tweenParameters,
    interpolate: interpolateLab,
  });

  const draw = (ctx) => {
    ctx.translate($tX, $tY);
    ctx.fillStyle = $tColor;
    ctx.beginPath();
    ctx.arc(0, 0, $tR, 0, 2 * Math.PI, false);
    ctx.fill();
  };

  onMount(() => {
    register(draw);
    invalidate();

    return () => {
      deregister(draw);
    };
  });

  afterUpdate(invalidate);

  onDestroy(invalidate);

  $: tX.set(node.x, tweenParameters);
  $: tY.set(node.y, tweenParameters);
  $: tR.set(r, tweenParameters);
  $: tColor.set(color, { ...tweenParameters, interpolate: interpolateLab });
</script>
