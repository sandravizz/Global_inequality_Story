<script>
	import { onMount } from "svelte";

	let element;
	let animate = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animate = true;
					observer.disconnect(); // Stop observing once the animation starts
				}
			},
			{ threshold: 0.1 }
		); // Adjust the threshold as needed

		if (element) {
			observer.observe(element);
		}
	});
</script>

<footer>
	<div bind:this={element} class="content">
		<div class="faded">Made by</div>
		<div><span class:animate>&nbsp;Sandra and Patrick</span></div>
	</div>

	<div class="credits" class:animate>
		<div>Design and visualisations: Sandra and Patrick</div>
		<div>Research and analysis: Sandra</div>
		<div>Frontend development: Patrick</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		height: 100vh;
	}

	.faded {
		opacity: 0.6;
	}

	.content div {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
	}

	@keyframes slidein {
		0% {
			margin-left: -500px;
		}
		20% {
			margin-left: -500px;
		}
		35% {
			margin-left: 0px;
		}
		100% {
			margin-left: 0px;
		}
	}

	@keyframes fadein {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 0;
		}
		66% {
			opacity: 0.6;
		}
		100% {
			opacity: 0.6;
		}
	}

	.content {
		position: absolute;
		text-align: center;
		font-size: 1.3em;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.credits {
		position: absolute;
		text-align: center;
		left: 50%;
		bottom: 25%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}

	span {
		position: relative;
		font-weight: bold;
		margin-left: -500px;
		font-size: 1.5em;
		top: 4px;
	}

	.content span.animate {
		animation: slidein;
		margin-left: 0;
		animation-duration: 6s;
	}

	.credits.animate {
		animation: fadein;
		animation-duration: 6s;
		opacity: 0.6;
	}
</style>
