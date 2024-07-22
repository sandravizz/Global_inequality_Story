<script>
	export let stroke = "#fff";
	export let legends = [];
</script>

<div class="legend">
	{#each legends as legend, i}
		<div class="label">
			<div class="dot" style="background-color: {stroke[i]}" />
			<div style="color: {stroke[i]}">{legend}</div>
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
