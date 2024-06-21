<script>
	import Scrolly from "$components/chartcomponents/Scrolly.svelte";

	export let storyscript = [];

	let innerWidth;
	let innerHeight;
	let stepIndex = 0;
	$: stepIndex = stepIndex ?? 0;

	$: chartComponents = [];

	$: {
		if (chartComponents.length) {
			const step = storyscript.steps[stepIndex];
			console.log("step has changed", step);
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

<section id="scrolly">
	<div class="container">
		<div class="chart-container" class:twoColumn={innerWidth >= 1000}>
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
	.container {
		position: relative;
	}

	.chart-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		position: relative;
	}

	.twoColumn {
		flex-direction: row-reverse;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.chart {
		position: relative;
	}

	.chartComponent {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		right: 0;
	}

	.step {
		border: 1px solid red;
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
		padding: 24px 0;
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
