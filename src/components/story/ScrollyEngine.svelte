<script>
	import Scrolly from "$components/chartcomponents/Scrolly.svelte";

	export let storyscript = [];
	export let layout;

	let innerWidth;
	let innerHeight;
	let stepIndex = 0;
	$: stepIndex = stepIndex ?? 0;

	$: chartComponents = [];

	$: {
		if (chartComponents.length) {
			const step = storyscript.steps[stepIndex];
			const { charts } = step;

			// update components in step
			charts.forEach((chart) => {
				const component = chartComponents[chart.componentIndex];
				component.chart = chart;
			});

			// reset component not in step
			const componentIndexs = step.charts.map((d) => d.componentIndex);
			chartComponents.forEach((component, i) => {
				if (!componentIndexs.includes(i)) {
					component.chart = {};
				}
			});
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section
	class:fullWidth={layout === "fullwidth"}
	class:wide={layout === "wide"}
>
	<div class="container">
		<div
			class="chart-container"
			class:twoColumn={innerWidth >= 1000 && layout !== "fullwidth"}
		>
			<div
				class="chart"
				class:sticky={stepIndex < storyscript.steps.length}
				class:bottom={stepIndex >= storyscript.steps.length}
			>
				{#if innerWidth}
					{#each storyscript.components as component, i}
						<div class="chartComponent">
							<svelte:component
								this={component}
								bind:this={chartComponents[i]}
								data={[]}
							/>
						</div>
					{/each}
				{/if}
			</div>

			<div class="steps">
				<Scrolly bind:value={stepIndex} top={innerHeight / 2}>
					{#each storyscript.steps as step, i}
						<div class="step" class:active={stepIndex === i}>
							<div class="contentwrapper">
								<div class="contentbackground" />
								<div class="content">
									<h3>{step.description.title}</h3>
									{#if step.description.text}
										<p>{step.description.text}</p>
									{/if}
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
	section {
		max-width: 50rem;
		padding: 0 16px;
		margin: 0 auto;
	}

	section.fullWidth {
		max-width: none;
		padding: 0;
	}

	section.wide {
		max-width: 70rem;
	}

	.container {
		position: relative;
	}

	.chart-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: relative;
	}

	.fullWidth .chart-container {
		width: 100%;
		max-width: none;
	}

	/* .twoColumn {
		flex-direction: row-reverse;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	} */

	.chart {
		position: relative;
		height: 100vh;
		width: 100%;
	}

	.chartComponent {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		right: 0;
	}

	.step {
		height: 100vh;
		width: 100%;
		background: none;
		z-index: 2;
		position: relative;
	}

	.steps {
		margin-top: 50vh;
	}

	.step:last-of-type {
		height: 150vh;
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

	.contentwrapper {
		position: relative;
		padding: 16px;
	}

	.contentbackground {
		background-color: var(--color-background);
		opacity: 0.4;
		position: absolute;
		top: -16px;
		bottom: -16px;
		left: -16px;
		right: -16px;
	}

	.content {
		position: relative;
		z-index: 2;
		-webkit-text-stroke: 0.2px #fff;
	}

	@media (min-width: 900px) {
		.fullWidth .container {
			margin: 0;
		}

		.chart {
			padding-left: 8px;
		}

		.fullWidth .chart {
			width: 100%;
		}

		.fullWidth .steps {
			width: 40%;
			margin-left: 10%;
		}

		.wide .contentwrapper {
			position: relative;
			margin: auto;
			max-width: 50rem;
		}

		.contentbackground {
			margin-left: auto;
			margin-right: auto;
			z-index: 1;
		}
	}
</style>
