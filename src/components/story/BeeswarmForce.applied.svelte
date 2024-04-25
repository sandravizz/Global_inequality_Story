<svelte:options accessors={true} />

<script>
	import { scaleOrdinal, scaleLinear } from "d3";
	import { LayerCake, Svg, Html } from "layercake";

	import BeeswarmForce from "$components/chartcomponents/BeeswarmForce.svelte";
	import AxisX from "$components/chartcomponents/AxisX.svg.svelte";
	import Legend from "$components/chartcomponents/Legend.html.svelte";

	export let data;
	export let highlightValue;
	export let highlightKey;
	export let highlightIndexes;
	export let visible = true;
	export let highlightColor;
	export let animation;
	export let radius;
</script>

<div style="height: 400px; width: 100%;">
	{#if visible && data.length}
		<LayerCake
			padding={{ top: 24, right: 4, bottom: 18, left: 4 }}
			data={[...data]}
			x={"value"}
			z={"region"}
			xDomain={[0, 1]}
			zScale={scaleOrdinal()}
			xScale={scaleLinear()}
			zRange={["#F2D022", "#F23558", "#F26B76", "#2BD968", "#F26BC3"]}
		>
			<Html>
				<div style="transform: translate(0, -28px)">
					<Legend />
				</div>
			</Html>

			<Svg>
				<BeeswarmForce
					{highlightValue}
					{highlightKey}
					getTitle={(d) => d.region}
					r={radius}
					{highlightIndexes}
					{highlightColor}
					{animation}
				/>
				<AxisX gridlines={false} baseline={true} />
			</Svg>
		</LayerCake>
	{/if}
</div>
