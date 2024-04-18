<script>
	import * as d3 from "d3";
	import { feature } from "topojson-client";
	import world from "$data/ne_50m_admin_0_countries.json";
	import Circle from "$components/story/Circle.svelte";

	export let data;

	let width = 0;
	let height = 0;

	// Extract land feature from world map data
	const land = feature(world, world.objects.ne_50m_admin_0_countries);

	// Define projection and path for rendering the map
	$: projection = d3.geoNaturalEarth1().fitWidth(width, { type: "Sphere" });
	$: path = d3.geoPath(projection);

	// Calculate the maximum radius value for scaling circles and
	// define a scale for circle radii based on the maximum value
	$: maxValue = d3.max(data, (d) => d.r);
	$: rScale = d3.scaleSqrt().domain([0, maxValue]).range([0, 10]);

	let sphere;
	$: sphere && (height = sphere.getBoundingClientRect().height);
</script>

<div bind:clientWidth={width}>
	<svg {width} {height}>
		<path class="land" d={path(land)} />
		<path
			d={path({ type: "Sphere" })}
			fill="none"
			stroke="#222"
			bind:this={sphere}
		/>

		{#each data as d}
			<Circle data={d} position={projection([d.lon, d.lat])} r={rScale(d.r)} />
		{/each}
	</svg>
</div>

<style lang="css">
	.land {
		fill: #ffa500;
		fill-opacity: 0.2;
		stroke: #222;
		stroke-opacity: 0.6;
	}

	svg {
		box-sizing: border-box;
		display: block;
	}
</style>
