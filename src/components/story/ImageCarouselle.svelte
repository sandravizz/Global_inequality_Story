<script>
	import { onDestroy, onMount } from "svelte";

	let images = Array.from({ length: 7 }).map((_, i) => ({
		src: `/assets/story/${i + 1}.jpeg`,
		style: "",
		class: "",
		position: ""
	}));

	let width = 0; // Reactive variable for width
	let height = 0; // Reactive variable for height

	// Assuming all images have the same dimensions for simplicity
	// Adjust these values based on the actual dimensions of your images
	const imageWidth = 300; // Width of the image
	const imageHeight = 200; // Height of the image

	// Function to generate random positioning for images
	function randomPosition() {
		const maxX = width - imageWidth;
		const maxY = height - imageHeight;

		// Generate random positions within the display area
		const x = Math.floor(Math.random() * (maxX + 1));
		const y = Math.floor(Math.random() * (maxY + 1));
		const rotationAngle = Math.floor(Math.random() * 31) - 15; // This will give a range from -15 to 15 degrees

		return `translate(${x}px, ${y}px) rotate(${rotationAngle}deg)`; // Use pixels
	}

	// Function to update image positions
	let fadedInImageIndex = 0;
	function updateImagePositions() {
		images[fadedInImageIndex] = {
			...images[fadedInImageIndex],
			class: "fade-out"
		};

		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * images.length);
		} while (randomIndex === fadedInImageIndex);

		images[randomIndex] = {
			...images[randomIndex],
			style: `transform: ${randomPosition()};`,
			class: "fade-in"
		};

		fadedInImageIndex = randomIndex;
	}

	let intervalId;
	onMount(() => {
		intervalId = setInterval(updateImagePositions, 3000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="carousel" bind:clientWidth={width} bind:clientHeight={height}>
	{#each images as image, index (index + "-" + image.src)}
		<img src={image.src} alt="" style={image.style} class={image.class} />
	{/each}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		height: 100%;
	}

	img {
		max-height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		padding: 10px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		background: #fff;
		filter: brightness(1.8) contrast(0.8) grayscale(0.9) blur(1px); /* Adjust values as needed */
	}
	.fade-in {
		animation: fadeIn 1s forwards;
	}
	.fade-out {
		animation: fadeOut 1s forwards;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
