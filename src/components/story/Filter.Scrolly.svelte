<script>
	import * as aq from "arquero";
	import Scrolly from "$components/story/Scrolly.svelte";
	export let component;
	export let filters;
	export let copy;
	export let data;

	const steps = copy;
	let value;
	let innerWidth;
	let innerHeight;

	$: filteredData = filters[value] ? data.filter(filters[value]) : [];
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section id="scrolly">
	<div class="container">
		<div class="chart-container" class:twoColumn={innerWidth >= 1000}>
			<div
				class="chart"
				class:sticky={value < steps.length}
				class:bottom={value >= steps.length}
			>
				{#if innerWidth}
					<svelte:component this={component} data={[...filteredData]} />
				{/if}
			</div>

			<div class="steps">
				<Scrolly bind:value top={innerHeight / 2}>
					{#each [...steps] as v, i}
						<div class="step" class:active={value === i}>
							<div class="contentwrapper">
								<div class="contentbackground" />
								<div class="content">
									<h3>{v.title}</h3>
									<p>{v.text}</p>
								</div>
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

	.step .contentwrapper {
		padding: 0 0 64px;
		width: 100%;
		position: relative;
	}

	.step .contentbackground {
		background-color: var(--color-background);
		opacity: 0.8;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
	}

	.step .content {
		z-index: 2;
		position: relative;
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

		.step .contentbackground {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
