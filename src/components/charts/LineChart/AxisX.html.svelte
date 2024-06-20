<script>
	import { ticks } from "d3";
	import { getContext } from "svelte";

	const { xScale } = getContext("LayerCake");

	$: tickVals = ticks($xScale.domain()[0], $xScale.domain()[1], 5);
</script>

{#each tickVals as tick, i (tick)}
	<div class="tick" style="left:{$xScale(tick)}px;">
		<div class="line" />
		<div class="text">{tick}</div>
	</div>
{/each}

<style>
	.axis,
	.tick,
	.tick-mark,
	.gridline,
	.baseline {
		position: absolute;
		bottom: 10%;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: 0.8em;
	}

	.text {
		color: #fff;
		opacity: 0.5;
		position: relative;
		white-space: nowrap;
		transform: translateX(-50%);
	}

	.tick .line {
		height: 5px;
		background-color: #fff;
		opacity: 0.8;
		width: 0.5px;
	}
</style>
