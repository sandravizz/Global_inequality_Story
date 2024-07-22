<script>
	import { getContext } from "svelte";

	const { data } = getContext("LayerCake");

	export let stroke = "#fff";
</script>

<div class="legend">
	{#each $data as group, i}
		<div class="label">
			<div class="dot" style="background-color: {stroke[i]}" />
			<div style="color: {stroke[i]}">{group.country}</div>
		</div>
	{/each}
</div>

<style>
	.legend {
		display: flex;
		gap: 18px;
	}

	.dot {
		width: 0.66em;
		height: 0.66em;
		border-radius: 0.33em;
	}

	.label {
		display: flex;
		gap: 6px;
		align-items: center;
	}
</style>
