<script>
	import { getContext } from "svelte";

	export let xValue;
	export let zValue;
	export let text;
	export let dy = 0;

	const { flatData, x, z, xGet, yGet } = getContext("LayerCake");

	const data = $flatData.find((d) => $x(d) === xValue && $z(d) === zValue);
</script>

<div class="label" style="left: {$xGet(data)}px; top:{$yGet(data) + dy}px">
	{text}
</div>

<style>
	.label {
		position: absolute;
		font-weight: bold;
		letter-spacing: -0.5px;
	}
</style>
