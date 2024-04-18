<script>
	import { onMount } from "svelte";
	import { draw, scale } from "svelte/transition";

	export let d;
	export let stroke = "#222";
	export let strokeWidth = 2;
	export let filter;
	export let fill;
	export let transitionType;
	export let transition;
	export let fillOpacity;

	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted && transitionType === "draw"}
	<path
		fill={fill ? fill : "none"}
		transition:draw={transition}
		{d}
		{stroke}
		stroke-width={strokeWidth}
		{filter}
		fill-opacity={fillOpacity}
	/>
{/if}

{#if isMounted && transitionType === "scale"}
	<path
		fill={fill ? fill : "none"}
		transition:scale={transition}
		{d}
		{stroke}
		stroke-width={strokeWidth}
		{filter}
		fill-opacity={fillOpacity}
	/>
{/if}

{#if isMounted && !transitionType}
	<path
		fill={fill ? fill : "none"}
		{d}
		{stroke}
		stroke-width={strokeWidth}
		{filter}
		fill-opacity={fillOpacity}
	/>
{/if}
