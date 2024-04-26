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
	export let highlightIds;
	export let visible = true;
	export let highlightColor;
	export let animation;
	export let radius;
	export let key;
	export let layout;
	export let groupby = "region";

	const height = 500;
</script>

<div style="height: {height}px; width: 100%;">
	{#if visible && data.length}
		<LayerCake
			padding={{ top: 24, right: 4, bottom: 18, left: 4 }}
			data={[...data]}
			x={"value"}
			z={groupby}
			xDomain={[0, 1]}
			zScale={scaleOrdinal()}
			xScale={scaleLinear()}
			zDomain={Array.from(
				data.reduce((acc, cur) => acc.add(cur[groupby]), new Set())
			)}
			zRange={["#F2D022", "#F23558", "#F26B76", "#2BD968", "#F26BC3"]}
		>
			<Html>
				<div style="transform: translate(0, -28px)">
					<Legend />
				</div>
			</Html>

			<Html>
				<div class="axisLabel" style="transform: translate(0, {height - 64}px)">
					<div>← equal</div>
					<div>inequal →</div>
				</div>
			</Html>

			<Svg>
				<BeeswarmForce
					{highlightValue}
					{highlightKey}
					getTitle={(d) => d.region}
					r={radius}
					{highlightIds}
					{highlightColor}
					{animation}
					{layout}
					nodeKey={key ?? "id"}
				/>
				<AxisX gridlines={false} baseline={true} />
			</Svg>
		</LayerCake>
	{/if}
</div>

<style>
	.axisLabel {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-size: 12px;
	}
</style>
