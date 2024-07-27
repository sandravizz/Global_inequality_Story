<script>
	import { getContext } from "svelte";

	const { flatData, x, z, xGet, yGet, custom, width } = getContext("LayerCake");

	const getAnnotationData = (xValue, zValue) => {
		return $flatData.find((d) => $x(d) === xValue && $z(d) === zValue);
	};
</script>

{#key $width}
	{#each $custom.annotations as { x: xValue, z: zValue, text, dy }}
		<div
			class="label"
			style="
			left: {$xGet(getAnnotationData(xValue, zValue))}px; 
			top:{$yGet(getAnnotationData(xValue, zValue)) + dy}px"
		>
			{text}
		</div>
	{/each}
{/key}

<style>
	.label {
		position: absolute;
		font-weight: bold;
		letter-spacing: -0.5px;
		transition: all 0.8s;
	}
</style>
