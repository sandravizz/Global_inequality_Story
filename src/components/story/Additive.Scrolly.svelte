<script>
	import { max, sum } from "d3";
	import Scrolly from "$components/helpers/Scrolly.svelte";

	export let component;
	export let data;
	export let copy;

	const steps = copy;

	const getData = (step) => data.slice(0, step).flatMap((d) => d);

	let value;
	let innerWidth;
	let scrollyWidth;
	let innerHeight;

	$: yExtent = [0, sum(data.map((series) => max(series, (d) => d.y)))];
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section id="scrolly">
	<div class="container" bind:clientWidth={scrollyWidth}>
		<div class="chart-container" class:twoColumn={innerWidth >= 1000}>
			<div
				class="chart"
				class:sticky={value < steps.length}
				class:bottom={value >= steps.length}
			>
				{#if innerWidth}
					<svelte:component
						this={component}
						data={getData(value ? value + 1 : 1)}
						{yExtent}
					/>
				{/if}
			</div>

			<div class="steps">
				<Scrolly bind:value top={innerHeight / 2}>
					{#each [...steps] as v, i}
						<div class="step" class:active={value === i}>
							<div class="content">
								<h3>{v}</h3>
							</div>
						</div>
					{/each}
				</Scrolly>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		position: relative;
	}

	.chart-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
	}

	.twoColumn {
		flex-direction: row-reverse;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.chart,
	.step {
		height: 100vh;
		display: flex;
		align-items: center;
	}

	.sticky {
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.bottom {
		position: absolute;
		top: auto;
		bottom: 0;
		z-index: 1;
	}

	.step {
		background: none;
		z-index: 2;
		position: relative;
		width: 50%;
	}

	.chart,
	.step {
		width: 100%;
	}

	.step:first-of-type {
		margin-top: 0vh;
	}

	.step:last-of-type {
		height: 200vh;
	}

	.step .content {
		padding: 0 0 64px;
		background: rgba(255, 255, 255, 0.8);
		width: 100%;
	}

	/* Full-width layout for wide screens */
	@media (min-width: 1000px) {
		.container {
			margin: 0 32px;
		}

		#scrolly {
			width: 100vw;
			margin-left: calc(-50vw + 50%);
			margin-right: calc(-50vw + 50%);
		}

		.chart,
		.steps {
			width: 50%;
		}

		.chart {
			padding-left: 8px;
		}

		.step {
			display: block;
			padding-right: 8px;
		}

		.step:first-of-type {
			margin-top: 36.5vh;
		}

		.step:last-of-type {
			height: 63.5vh;
		}
	}
</style>
