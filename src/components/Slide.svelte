<script>
	export let src;
	export let text;
	export let isVisible = false;
	export let hide = false;
	export let show = false;

	function getRandomNumberInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const filters = [
		"hue-rotate(90deg)",
		"grayscale(80%)",
		"contrast(140%)",
		"sepia(73%) saturate(200%) hue-rotate(288deg) contrast(110%) blur(5px)",
		"none"
	];

	let current;
	function nextFilter() {
		if (current < filters.length - 1) {
			current += 1;
			setTimeout(nextFilter, 300);
		}
	}

	$: show && (current = -1);
	$: current === -1 && setTimeout(nextFilter, 300);

	let randomImgX = 0,
		randomImgY = 0,
		randomImgScale = 1,
		randomTextX = 0,
		randomTextY = 0,
		randomTextScale = 1;

	$: if (show) {
		// random offsets for image
		randomImgX =
			current !== filters.length - 1 ? getRandomNumberInRange(-25, 25) : 0;
		randomImgY =
			current !== filters.length - 1 ? getRandomNumberInRange(-25, 25) : 0;
		randomImgScale = current !== filters.length - 1 ? 1 + Math.random() : 1;

		// random offsets for text
		randomTextX =
			current !== filters.length - 1 ? getRandomNumberInRange(-10, 10) : 0;
		randomTextY =
			current !== filters.length - 1 ? getRandomNumberInRange(-10, 10) : 0;
		randomTextScale = current !== filters.length - 1 ? 1 + Math.random() : 1;
	}
</script>

<div
	class="slide"
	class:visible={isVisible}
	class:show
	class:hide
	style="filter: {filters[current]}"
>
	<h1
		style="
        top: {50 + randomTextY}%; 
        left: {50 + randomTextX}%; 
        transform: translate(-50%, -66%) scale({randomTextScale})"
	>
		{text}
	</h1>
	<img
		{src}
		alt={text}
		style="
            object-position: {50 + randomImgX}% {50 + randomImgY}%; 
            transform: scale({randomImgScale});"
	/>
	<div class="hint">
		<div>scroll down</div>
		<div class="gg-chevron-down" />
	</div>
</div>

<style>
	.slide.visible {
		opacity: 1;
	}
	.hide {
		animation-name: fadeout;
		animation-duration: 2s;
		animation-fill-mode: forwards; /* Ensures the slide stays hidden after animation */
	}

	.show {
		animation-name: fadein;
		animation-duration: 2s;
		animation-fill-mode: forwards; /* Ensures the slide stays visible after animation */
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		box-sizing: border-box;
		opacity: 0;
		overflow: hidden;
	}

	h1 {
		position: absolute;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-width: 1.5px;
		-webkit-text-stroke-color: #fff;
		text-wrap: nowrap;
		z-index: 1;
		transition: all 30ms;
		font-size: 24px;
		font-family: "Syncopate";
	}

	@keyframes fadeout {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	@media (min-width: 900px) {
		h1 {
			font-size: 80px;
		}
	}

	.hint {
		z-index: 100;
		position: absolute;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0.8;
	}

	.hint > div {
		margin-top: -6px;
		font-size: 0.9em;
	}

	.gg-chevron-down {
		transform: scale(1.8);
		color: #d5f2f2;

		box-sizing: border-box;
		position: relative;
		display: block;
		width: 22px;
		height: 22px;
		border: 2px solid transparent;
		border-radius: 100px;
	}

	.gg-chevron-down::after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 10px;
		height: 10px;
		border-bottom: 1.5px solid;
		border-right: 1.5px solid;
		transform: rotate(45deg);
		left: 4px;
		top: 2px;
	}
</style>
