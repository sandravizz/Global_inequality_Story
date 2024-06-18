<svelte:options accessors={true} />

<script>
	import { scaleOrdinal, scaleLinear } from "d3";
	import { LayerCake, Svg, Html, Canvas } from "layercake";

	import BeeswarmForceCanvas from "$components/chartcomponents/BeeswarmForce.canvas.svelte";
	import AxisX from "$components/chartcomponents/AxisX.svg.svelte";
	import CanvasContext from "./CanvasContext.svelte";
	import Annotation from "./Annotation.svg.svelte";

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
	export let annotations = [];

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
				<div class="axisLabel" style="transform: translate(0, {height - 64}px)">
					<div>← equality</div>
					<div>inequality →</div>
				</div>
			</Html>

			<Canvas>
				<CanvasContext>
					<BeeswarmForceCanvas
						{highlightValue}
						{highlightKey}
						r={radius}
						{highlightIds}
						{highlightColor}
						{animation}
						{layout}
						nodeKey={key ?? "id"}
					/>
				</CanvasContext>
			</Canvas>

			<Svg>
				{#if annotations && annotations.length > 0}
					{#each annotations as { x, y, dx, dy, title, label }}
						<Annotation {x} {y} {dx} , {dy} {title} {label} />
					{/each}
				{/if}
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
