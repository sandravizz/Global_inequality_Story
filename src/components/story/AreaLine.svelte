<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { quintOut } from "svelte/easing";
    import { curveMonotoneX } from "d3";
    import { getContext } from "svelte";
    import { area } from "d3-shape";

    export let fill = "red";
    export let strokeWidth = 2;

    const { data, xGet, yGet, yScale, height } = getContext("LayerCake");

    const value = tweened(0, {
        duration: 2000,
        easing: quintOut,
    });

    $: lineGen = area()
        .x($xGet)
        .y((d) => $height * (1 - $value) + $yGet(d) * $value)
        .curve(curveMonotoneX);

    $: areaGen = area()
        .x($xGet)
        .y1((d) => $height * (1 - $value) + $yGet(d) * $value)
        .y0(() => $yScale(0))
        .curve(curveMonotoneX);

    onMount(() => {
        value.set(1);
    });
</script>

<g class="area-group">
    <path class="path-area" d={areaGen($data)} fill-opacity={0.4} {fill}></path>
    <path
        class="path-line"
        d={lineGen($data)}
        stroke-width={strokeWidth}
        fill="none"
        stroke={fill}
    />
    <path
        class="path-line"
        d={lineGen($data)}
        stroke-width="0.5"
        fill="none"
        stroke="#fff"
    />
</g>
