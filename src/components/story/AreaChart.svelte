<script>
	import { getContext } from "svelte";

	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { quintOut } from "svelte/easing";
	import {
		scaleLinear,
		extent,
		area,
		curveMonotoneX,
		stack,
		schemeSet3,
		union,
		index,
		max,
		line
	} from "d3";

	import Path from "$components/story/path.svelte";

	// each sub-array is a data series

	export let data = [];
	export let x = "x";
	export let y = "y";
	export let category = "category";
	export let margins = { l: 24, r: 4, t: 20, b: 20 };

	// each sub-array is a data series
	export let height = 400;
	export let showXAxis = true;
	export let showYAxis = true;
	export let xExtent;
	export let yExtent;
	export let fillOpacity = 1;
	export let fills = schemeSet3;
	export let strokes = schemeSet3;
	export let inWidth;

	// svg settings
	let width = 400;

	$: stackedData = stack()
		.keys(union(data.map((d) => d[category]))) // distinct series keys, in input order
		.value(([, D], key) => D.get(key)[y])(
		// get value for each series key and stack
		index(
			data,
			(d) => d[x],
			(d) => d[category]
		)
	); // group by stack then series key

	// scales (assumes numeral or time data)
	$: xDataExtent = xExtent ?? extent(data, (d) => d[x]);
	$: yDataExtent = yExtent ?? [0, max(stackedData, (d) => max(d, (d) => d[1]))];

	$: xScale = scaleLinear()
		.domain(xDataExtent)
		.range([margins.l, (inWidth ?? width) - margins.r]);
	$: yScale = scaleLinear()
		.domain(yDataExtent)
		.range([height - margins.b, margins.t]);

	const value = tweened(1, {
		duration: 2000,
		easing: quintOut
	});

	// generators
	$: areaGenerator = area()
		.x((d) => xScale(d.data[0]))
		.y0((d) => (height - margins.b) * (1 - $value) + $value * yScale(d[0]))
		.y1((d) => (height - margins.b) * (1 - $value) + $value * yScale(d[1]))
		.curve(curveMonotoneX);

	$: lineGenerator = line()
		.x((d) => xScale(d.data[0]))
		.y((d) => (height - margins.b) * (1 - $value) + $value * yScale(d[1]))
		.curve(curveMonotoneX);
</script>

<div bind:clientWidth={width}>
	<svg width={inWidth ?? width} {height}>
		<g>
			{#each stackedData as d, i}
				<Path
					d={areaGenerator(d)}
					fill={fills[i]}
					strokeWidth={0}
					transitionType={null}
					{fillOpacity}
				/>
			{/each}

			{#each stackedData as d, i}
				<Path
					d={lineGenerator(d)}
					stroke={strokes[i]}
					strokeWidth={2}
					transitionType={null}
				/>
			{/each}
		</g>
	</svg>
</div>

<style lang="css">
	svg {
		box-sizing: border-box;
		display: block;
	}
</style>
