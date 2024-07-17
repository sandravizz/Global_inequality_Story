<script>
	import Slide from "./Slide.svelte";

	let slideIndex = 0;

	const switchBlock = () => {
		if (slideIndex === 0) {
			slideIndex = 1;
		} else {
			slideIndex = 0;
		}
	};

	setInterval(switchBlock, 6000);
</script>

<div class="wrapper">
	<Slide
		src="/assets/1.png"
		text="Global inequality"
		isVisible={true}
		hide={slideIndex !== 0}
		show={slideIndex === 0}
	/>
	<Slide
		src="/assets/2.jpg"
		text="1980 ― 2024"
		hide={slideIndex !== 1}
		show={slideIndex === 1}
	/>
</div>

<style>
	.wrapper {
		position: relative;
		height: 100vh;
	}
</style>
