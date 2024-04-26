<script>
	import { getContext } from "svelte";
	import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";

	const { data, xGet, height, zGet } = getContext("LayerCake");

	$: nodes = $data.map((d) => ({ ...d }));

	export let r = 6;
	export let xStrength = 0.95;
	export let yStrength = 0.075;
	export let highlightValue;
	export let highlightKey;
	export let highlightIds;
	export let highlightColor;
	export let animation = true;
	export let nodeKey;

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
		.force("collide", forceCollide(r + 2.5))
		.stop();

	$: {
		if (animation) {
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
		} else {
			// skip to last step of simulation
			simulation.tick(300);
		}
	}

	$: getColor = (node) => {
		if (highlightIds) {
			return highlightIds.includes(node.id)
				? highlightColor ?? $zGet(node)
				: "var(--chart-lowlight)";
		} else {
			return highlightValue
				? node[highlightKey] === highlightValue
					? highlightColor ?? $zGet(node)
					: "var(--chart-lowlight)"
				: $zGet(node);
		}
	};
</script>

<g class="bee-group">
	{#each simulation.nodes() as node (nodeKey ? node[nodeKey] : node.id)}
		<circle
			class:animation={animation !== false}
			class:noAnimation={!animation}
			style={`fill: ${getColor(node)}`}
			stroke-width="0"
			cx={node.x}
			cy={node.y}
			{r}
		/>

		{#if highlightIds && highlightIds.includes(node.id)}
			<circle
				class:animation
				class:noAnimation={!animation}
				style={`fill: none; stroke: ${getColor(node)}`}
				stroke-width="1"
				cx={node.x}
				cy={node.y}
				r={r + 2}
			/>
		{/if}
	{/each}
</g>

<style>
	.animation {
		transition: all 0.7s;
	}

	.noAnimation {
		transition:
			fill 0.7s ease,
			stroke 0.7s ease;
	}
</style>
