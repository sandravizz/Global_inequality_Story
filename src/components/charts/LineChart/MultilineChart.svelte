<svelte:options accessors={true} />

<script>
	import { LayerCake, Svg, Html } from "layercake";

	import MultiLine from "$components/chartcomponents/MultiLine.svg.svelte";
	import Annotation from "$components/chartcomponents/Annotation.html.svelte";
	import AxisX from "./AxisX.html.svelte";
	import AxisY from "./AxisY.html.svelte";

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
			yDomain={[0, 1]}
			custom={{ annotations: annotations }}
			padding={{ left: 24, right: 8 }}
		>
			<Svg>
				<MultiLine {...options} />
			</Svg>

			{#if annotations}
				<Html>
					<Annotation />
				</Html>
			{/if}

			<Html>
				<AxisX />
				<AxisY />
			</Html>
		</LayerCake>
	{/if}
</div>
