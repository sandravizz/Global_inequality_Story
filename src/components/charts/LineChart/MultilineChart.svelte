<svelte:options accessors={true} />

<script>
	import { LayerCake, Svg, Html } from "layercake";

	import MultiLine from "$components/chartcomponents/MultiLine.svg.svelte";
	import Label from "./Label.svelte";
	import AxisX from "./AxisX.html.svelte";

	export let chart;

	const height = 600;
	let width;

	let data;
	let options;
	let annotations;
	$: {
		if (chart) {
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
			custom={{ annotations: annotations }}
		>
			<Svg>
				<MultiLine {...options} />
			</Svg>

			{#if annotations}
				<Html>
					{#each annotations as annotation}
						<Label />
					{/each}
				</Html>
			{/if}

			<Html>
				<div class="axisLabel" style="top: 0; right: 0; ">Completely equal</div>
				<hr class="dotted" />
				<AxisX />
			</Html>
		</LayerCake>
	{/if}
</div>

<style>
	.dotted {
		border-width: 0;
		border-top: 1px dashed var(--chart-color-lowlight);
	}

	.axisLabel {
		font-size: 12px;
		position: absolute;
		color: var(--chart-color-lowlight);
	}
</style>
