<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let delay = 0;
  export let duration = 200;
  export let show = false;

  const opacity = tweened(0, {
    duration: duration,
    delay: delay,
    easing: cubicOut,
  });

  $: opacity.set(show ? 1 : 0);
</script>

<div style="opacity: {$opacity};" />

<style>
  div {
    background: var(--tt-bg-color);
    /* Fixes the gap in FF */
    outline: 1px solid var(--tt-bg-color);
  }
</style>
