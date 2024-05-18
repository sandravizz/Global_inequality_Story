<script>
	import { getContext } from "svelte";
	import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";

	import Dot from "./Dot.canvas.svelte";

	export let r = 4;
	export let xStrength = 0.5;
	export let yStrength = 0.5;
	export let highlightValue;
	export let highlightKey;
	export let highlightIds;
	export let highlightColor;
	export let nodeKey;
	export let layout = "row";

	const { data, xGet, height, z, zGet, zDomain } = getContext("LayerCake");

	$: getColor = (node) => {
		if (highlightIds) {
			return highlightIds.includes(node.id)
				? highlightColor ?? $zGet(node)
				: "#263973";
		} else {
			return highlightValue
				? node[highlightKey] === highlightValue
					? highlightColor ?? $zGet(node)
					: "#263973"
				: $zGet(node);
		}
	};

	let renderData = [];

	$: getRow = (node) => $zDomain.indexOf($z(node)) + 1;

	$: sim = forceSimulation()
		.force("forceX", forceX((d) => $xGet(d)).strength(xStrength))
		.force(
			"forceY",
			forceY(
				(d) =>
					layout === "row"
						? getRow(d) * (($height * 0.8) / $zDomain.length)
						: $height / 2,
				yStrength
			)
		)
		.force("collide", forceCollide(r + 2));

	$: {
		if ($data) {
			sim.nodes($data).restart().alpha(1).stop().tick(300);
			renderData = sim.nodes();
		}
	}
</script>

{#each renderData as node (node[nodeKey])}
	<Dot {node} color={getColor(node)} {r} />
{/each}
