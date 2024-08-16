<script>
	import { ticks } from "d3";
	import { getContext } from "svelte";

	const { xScale } = getContext("LayerCake");

	$: tickVals = ticks($xScale.domain()[0], $xScale.domain()[1], 4);
</script>

<div class="axis">
	{#each tickVals as tick, i (tick)}
		<div
			class="tick"
			style="left:{$xScale(tick)}px;"
			class:moveRight={tick === $xScale.domain()[0]}
			class:moveLeft={tick === $xScale.domain()[1]}
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

	hr {
		border-width: 0;
		border-bottom: 1px solid #d5f2f2;
	}

	.tick {
		position: absolute;
		display: inline-block;
		font-size: 0.6em;
		width: 0;
	}

	.text {
		position: absolute;
		color: #d5f2f2;
		opacity: 0.7;
		white-space: nowrap;
		transform: translateX(-50%);
	}

	.moveRight .text {
		transform: none;
		color: #d5f2f2;
	}

	.moveLeft .text {
		transform: translateX(-100%);
		color: #d5f2f2;
	}

	.line {
		height: 0.8em;
	}
</style>
