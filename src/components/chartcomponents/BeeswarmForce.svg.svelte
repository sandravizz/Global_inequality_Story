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

	let renderNodes = [];

	$: simulation = forceSimulation(nodes)
		.restart()
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
		.stop()
		.tick(300);

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

	$: renderNodes = simulation.nodes();
</script>

<g class="bee-group">
	{#each renderNodes as node (nodeKey ? node[nodeKey] : node.id)}
		<g class:animation={true} transform="translate({node.x} {node.y})">
			<circle
				class:animation={true}
				class:noAnimation={false}
				style={`fill: ${getColor(node)}`}
				stroke-width="0"
				cx={0}
				cy={0}
				r={highlightIds && highlightIds.includes(node.id) ? highlightRadius : r}
			/>
		</g>
	{/each}
</g>

<style>
	.animation {
		transition: all 1s;
	}

	.noAnimation {
		transition:
			fill 0.7s ease,
			stroke 0.7s ease;
	}
</style>
