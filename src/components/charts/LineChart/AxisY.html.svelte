<script>
	import { ticks } from "d3";
	import { getContext } from "svelte";

	const { yScale } = getContext("LayerCake");

	$: tickVals = ticks($yScale.domain()[1], $yScale.domain()[0], 4);
</script>

<div class="axis">
	{#each tickVals as tick, i (tick)}
		<div
			class="tick"
			style="bottom:{$yScale(tick)}px;"
			class:moveTop={tick === $yScale.domain()[0]}
			class:moveBottom={tick === $yScale.domain()[1]}
		>
			<div class="line" />
			<div class="text">{tick}</div>
		</div>
	{/each}
</div>

<style>
	.axis {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.tick {
		position: absolute;
		display: inline-block;
		width: 0;
	}

	.text {
		font-family: "Montserrat Alternates1", sans-serif;
		font-size: 0.7vw;
		position: absolute;
		color: #d5f2f2;
		opacity: 0.3;
		white-space: nowrap;
		transform: translateX(-50%);
	}

	.momoveBottom .text {
		transform: none;
		color: #d5f2f2;
	}

	.moveTop .text {
		transform: translateX(-100%);
		color: #d5f2f2;
	}

	.line {
		height: 0.8em;
	}
</style>
