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

	<div class="people">
		<img class="left" src="/assets/sandra.png" alt="sandra" />
		<img class="right" src="/assets/patrick.png" alt="patrick" />
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

	.content {
		position: absolute;
		text-align: center;
		font-size: 1.3em;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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

	.people {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.people img {
		height: 33vw;
		max-height: 50vh;
		opacity: 0.8;
	}

	.people img.right {
		transform: translateX(40%);
	}

	.people img.left {
		transform: translateX(-40%);
	}
</style>
