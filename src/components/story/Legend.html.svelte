<script>
	import { getContext } from "svelte";
	import { transpose } from "d3";
	import tinycolor from "tinycolor2";

	const { zDomain, zRange } = getContext("LayerCake");
	const data = transpose([$zDomain, $zRange]);
	const color = tinycolor($zRange[0]);

	color.setAlpha(0.4);
</script>

<div class="legend">
	{#each data as [label, color]}
		<div
			class="dot"
			style="background: {tinycolor(color)
				.setAlpha(0.8)
				.toRgbString()}; border-color: {color}"
		/>
		<div class="label">{label}</div>
	{/each}
</div>

<style>
	.legend {
		display: flex;
		align-items: center;
	}

	.dot {
		height: 10px;
		width: 10px;
		min-width: 10px;
		min-height: 10px;
		border-radius: 5px;
		border-width: 1px;
		border-style: solid;
	}

	.label {
		margin-left: 6px;
		font-size: 12px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin-right: 16px;
	}
</style>
