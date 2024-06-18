<!--
  @component
  Generates an HTML x-axis, useful for server-side rendered charts.  This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
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
		bottom: 5%;
	}
	.axis {
		width: 100%;
		height: 100%;
	}
	.tick {
		font-size: 0.8em;
	}

	.tick .text {
		color: #fff;
		opacity: 0.8;
		position: relative;
		white-space: nowrap;
		transform: translateX(-50%);
	}

	.tick .line {
		height: 10px;
		background-color: #fff;
		opacity: 0.8;
		width: 1px;
	}
</style>
