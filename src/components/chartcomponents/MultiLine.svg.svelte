<!--
	@component
	Generates an SVG multi-series line chart. It expects your data to be an array of objects, each with a `values` key that is an array of data objects.
 -->
<script>
	import { getContext } from "svelte";
	import { line } from "d3-shape";
	import { curveMonotoneX } from "d3";

	export let stroke = "#fff";
	export let strokeWidth = 1;
	export let strokeOpacity = 1;
	export let fill = "none";

	// Generate the line generator
	const lineGenerator = line()
		.x((d) => $xGet(d))
		.y((d) => $yGet(d))
		.curve(curveMonotoneX);

	const { data, xGet, yGet } = getContext("LayerCake");
</script>

<g class="line-group">
	{#each $data as group}
		<path
			class="path-line"
			d={lineGenerator(group.values)}
			{stroke}
			stroke-opacity={strokeOpacity}
			stroke-width={strokeWidth}
			{fill}
		/>
	{/each}
</g>

<style>
	.path-line {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		transition: all 0.3s;
	}
</style>
