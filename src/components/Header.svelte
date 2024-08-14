<script>
	import Slide from "./Slide.svelte";

	let slideIndex = undefined;

	const switchBlock = () => {
		if (slideIndex === 0 || slideIndex === undefined) {
			slideIndex = 1;
		} else {
			slideIndex = 0;
		}
	};

	setInterval(switchBlock, 10000);
</script>

<div class="wrapper">
	<Slide
		src="/assets/1.png"
		title="Global yuhu income"
		subtitle="Analysis of global income inequality between 1980 - 2023"
		hide={slideIndex !== undefined ? slideIndex !== 0 : null}
		show={slideIndex !== undefined ? slideIndex === 0 : null}
		isVisible={true}
	/>
	<Slide
		src="/assets/2.png"
		title="Inequality"
		subtitle="is bad"
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
