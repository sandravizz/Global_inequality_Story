<script>
	import { getContext } from "svelte";

	export let highlightKey;
	export let highlightValue;

	const { data, xGet, yGet, zGet, height, yDomain } = getContext("LayerCake");
	const rows = Math.abs($yDomain[0] - $yDomain[1]);
</script>

<g>
	{#each $data as d}
		<rect
			fill={highlightValue
				? d[highlightKey] === highlightValue
					? $zGet(d)
					: "#e0e0e0"
				: $zGet(d)}
			x={$xGet(d)}
			y={$yGet(d) + ($height / rows) * 0.05}
			height={$height / rows - ($height / rows) * 0.1}
			width={highlightValue ? (d[highlightKey] === highlightValue ? 3 : 1) : 1}
		/>
	{/each}
</g>

<style>
	rect {
		transition: all 0.7s;
	}
</style>
