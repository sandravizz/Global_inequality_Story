<script>
	import { getContext } from "svelte";
	import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";

	const { data, xGet, height, zGet, zDomain, z } = getContext("LayerCake");

	$: nodes = $data.map((d) => ({ ...d }));

	export let r = 4;
	export let xStrength = 0.5;
	export let yStrength = 0.5;
	export let highlightValue;
	export let highlightKey;
	export let highlightIds;
	export let highlightColor;
	export let animation = true;
	export let nodeKey;
	export let layout = "row";

	$: highlightRadius = r * 1.2 < 0.5 ? 0.5 : r * 1.2 > 3 ? r + 3 : r + r * 1.2;

	const getRow = (node) => $zDomain.indexOf($z(node)) + 1;

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
				.y((d) =>
					layout === "row"
						? getRow(d) * (($height * 0.8) / $zDomain.length)
						: $height / 2
				)
				.strength(yStrength)
		)
		.force("collide", forceCollide(highlightRadius + 1))
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
		<g
			class:animation={animation !== false}
			transform="translate({node.x} {node.y})"
		>
			<circle
				class:animation={animation !== false}
				class:noAnimation={!animation}
				style={`fill: ${getColor(node)}`}
				stroke-width="0"
				cx={0}
				cy={0}
				{r}
			/>

			{#if highlightIds && highlightIds.includes(node.id)}
				<circle
					class:animation={animation !== false}
					style={`fill: none; stroke: ${getColor(node)}`}
					stroke-width={1}
					cx={0}
					cy={0}
					r={highlightRadius}
				/>
			{/if}
		</g>
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
