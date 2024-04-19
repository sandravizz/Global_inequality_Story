<script>
	import { schemeSet2, scaleOrdinal } from "d3";
	import { LayerCake, Svg, Html } from "layercake";

	import BeeswarmForce from "$components/chartcomponents/BeeswarmForce.svelte";
	import AxisX from "$components/chartcomponents/AxisX.svg.svelte";
	import Legend from "$components/story/Legend.html.svelte";

	export let data;
	export let highlightValue;
	export let highlightKey;
</script>

<div style="height: 220px; width: 100%;">
	<LayerCake
		padding={{ top: 24, right: 4, bottom: 18, left: 4 }}
		{data}
		x={"value"}
		y={"year"}
		z={"region"}
		zScale={scaleOrdinal()}
		zRange={["#076DF2", "#F23558", "#D95F18", "#F26BC3", "#F2D95C"]}
		yDomain={(domain) => domain.sort((a, b) => (a > b ? -1 : 1))}
	>
		<Html>
			<div style="transform: translate(0, -28px)">
				<Legend />
			</div>
		</Html>

		<Svg>
			<BeeswarmForce {highlightValue} {highlightKey} />
			<AxisX gridlines={false} baseline={true} />
		</Svg>
	</LayerCake>
</div>
