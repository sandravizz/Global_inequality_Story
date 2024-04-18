<script>
	import { schemeSet2, scaleOrdinal } from "d3";
	import { LayerCake, Svg } from "layercake";

	import Barcode from "$components/story/Barcode.svelte";
	import AxisY from "$components/layercake/AxisY.svg.svelte";
	import AxisX from "$components/layercake/AxisX.svg.svelte";

	export let data;
	export let highlightKey;
	export let highlightValue;
</script>

<div style="height: 400px; width: 100%;">
	<LayerCake
		padding={{ top: 0, right: 8, bottom: 48, left: 54 }}
		{data}
		x={"value"}
		y={"year"}
		z={"region"}
		zScale={scaleOrdinal()}
		zRange={schemeSet2}
		yDomain={(domain) => domain.sort((a, b) => (a > b ? -1 : 1))}
	>
		<Svg>
			<Barcode {highlightKey} {highlightValue} />
			<AxisY gridlines={false} dyTick={10} tickGutter={16} />
			<g transform="translate(0, 24)">
				<AxisX gridlines={false} baseline={true} />
			</g>
		</Svg>
	</LayerCake>
</div>
