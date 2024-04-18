<script>
	import { randomInt } from "d3";
	import { tweened } from "svelte/motion";

	export let position;
	export let r;

	$: radius = tweened(0, {
		duration: 700,
		delay: randomInt(0, 1200)()
	});

	$: radius.set(r);
</script>

{#if position && r}
	<circle class="data" cx={position[0]} cy={position[1]} r={$radius} />
{/if}

<style>
	.data {
		fill: salmon;
		fill-opacity: 0.4;
		stroke: salmon;
	}
</style>
