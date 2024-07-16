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

	let randomX = 0,
		randomY = 0,
		zoom = 1;
	$: if (show) {
		randomX =
			current !== filters.length - 1 ? getRandomNumberInRange(-25, 25) : 0;
		randomY =
			current !== filters.length - 1 ? getRandomNumberInRange(-25, 25) : 0;
		zoom = current !== filters.length - 1 ? 1 + Math.random() : 1;
	}
</script>

<div
	class="slide"
	class:visible={isVisible}
	class:show
	class:hide
	style="filter: {filters[current]}"
>
	<h1>{text}</h1>
	<img
		{src}
		alt={text}
		style="
            object-position: {50 + randomX}% {50 + randomY}%; 
            transform: scale({zoom});"
	/>
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
		top: 50%;
		left: 50%;
		transform: translate(-50%, -66%);
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-width: 1.5px;
		-webkit-text-stroke-color: #fff;
		text-wrap: nowrap;
		z-index: 1;
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
</style>
