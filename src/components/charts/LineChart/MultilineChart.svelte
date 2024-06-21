<svelte:options accessors={true} />

<script>
	import { LayerCake, Svg, Html } from "layercake";

	import MultiLine from "$components/chartcomponents/MultiLine.svg.svelte";
	import Label from "./Label.svelte";
	import AxisX from "./AxisX.html.svelte";

	export let chart;

	const height = 600;
	let width;

	let key;
	let data;
	let options;
	let annotations;
	$: {
		if (chart) {
			key = chart.key;
			data = chart.data;
			options = chart.options ?? {};
			annotations = chart.annotations;
		}
	}
</script>

<div style="height: {height}px; width: 100%;" bind:clientWidth={width}>
	{#if data && width}
		<LayerCake
			{width}
			{height}
			x="year"
			y="value"
			z="country"
			flatData={data.flatMap((d) => d.values)}
			{data}
			yDomain={[1, 0]}
		>
			<Svg>
				<MultiLine {...options} />
			</Svg>

			{#if annotations}
				<Html>
					{#each annotations as annotation}
						<Label
							xValue={annotation.x}
							zValue={annotation.z}
							dy={annotation.dy}
							text={annotation.text}
						/>
					{/each}
				</Html>
			{/if}

			<Html>
				<div class="axisLabel" style="top: 8px;">Full equality</div>
				<div class="axisLabel" style="bottom: 58px;">Full inequality</div>
				<AxisX />
			</Html>
		</LayerCake>
	{/if}
</div>

<style>
	.axisLabel {
		font-size: 12px;
		position: absolute;
		opacity: 0.8;
	}
</style>
