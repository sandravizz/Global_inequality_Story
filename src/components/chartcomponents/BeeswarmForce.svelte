
<script>
	import { getContext } from "svelte";
	import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";

	const { data, xGet, height, zGet } = getContext("LayerCake");

	const nodes = $data.map((d) => ({ ...d }));

	export let r = 6;
	export let xStrength = 0.95;
	export let yStrength = 0.075;
	export let highlightValue = undefined;
	export let highlightKey = undefined;

	$: simulation = forceSimulation(nodes)
		.force(
			"x",
			forceX()
				.x((d) => $xGet(d))
				.strength(xStrength)
		)
		.force(
			"y",
			forceY()
				.y($height / 2)
				.strength(yStrength)
		)
		.force("collide", forceCollide(r + 0.5))
		.stop();

	$: {
		for (
			let i = 0,
				n = Math.ceil(
					Math.log(simulation.alphaMin()) /
						Math.log(1 - simulation.alphaDecay())
				);
			i < n;
			++i
		) {
			simulation.tick();
		}
	}
</script>

<g class="bee-group">
	{#each simulation.nodes() as node}
		<circle
			fill={highlightValue
				? node[highlightKey] === highlightValue
					? $zGet(node)
					: "#263973"
				: $zGet(node)}
			stroke-width="0"
			cx={node.x}
			cy={node.y}
			{r}
		>
		</circle>
	{/each}
</g>

<style>
	circle {
		transition: all 0.7s;
	}
</style>
