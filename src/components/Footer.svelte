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
		<div>
			<span class:animate
				>&nbsp;<a href="https://www.sandraviz.com/" target="_blank">Sandra</a>
				and
				<a href="https://www.linkedin.com/in/patrickwojda/" target="_blank"
					>Patrick</a
				></span
			>
		</div>
	</div>

	<div class="credits" class:animate>
		<div>Design and visualisations: Sandra and Patrick</div>
		<div>Research and analysis: Sandra</div>
		<div>Frontend development: Patrick</div>
	</div>

	<div class="right">
		<img src="/assets/patrick.png" alt="patrick" />
	</div>

	<div class="left">
		<img src="/assets/sandra.png" alt="sandra" />
	</div>
</footer>

<style>
	a {
		color: #d5f2f2;
	}

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

	.right {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		overflow: hidden;
		max-width: calc(50% - 24px);
	}

	.left {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		overflow: hidden;
		max-width: calc(50% - 24px);
	}

	.right img {
		width: 100%;
		opacity: 0.6;
		transform: translateX(33%);
	}

	.left img {
		width: 100%;
		opacity: 0.6;
		transform: translateX(-33%);
	}
</style>
