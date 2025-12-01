<script>
  import Scrolly from "$components/story/Scrolly.svelte";

  export let storyscript = [];
  export let layout;

  let innerWidth;
  let innerHeight;
  let stepIndex = 0;
  let currentStepIndex = 0; // Track the last valid step index

  $: chartComponents = [];

  // Only update currentStepIndex when stepIndex is defined and valid
  $: {
    if (stepIndex !== undefined && stepIndex !== null) {
      // Clamp stepIndex to valid range [0, steps.length - 1]
      const maxStepIndex = storyscript.steps.length - 1;
      currentStepIndex = Math.max(0, Math.min(stepIndex, maxStepIndex));
    }
  }

  // Update charts based on the stable currentStepIndex
  $: {
    if (chartComponents.length) {
      const step = storyscript.steps[currentStepIndex];
      const { charts } = step;

      charts.forEach((chart) => {
        const component = chartComponents[chart.componentIndex];
        component.chart = chart;
      });

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

<section class:wide={layout === "wide"}>
  <div class="container">
    <div class="chart-container">
      <div
        class="chart"
        class:sticky={currentStepIndex < storyscript.steps.length}
        class:bottom={currentStepIndex >= storyscript.steps.length}
      >
        {#each storyscript.components as component, i}
          <div class="chartComponent">
            <svelte:component
              this={component}
              bind:this={chartComponents[i]}
              data={[]}
            />
          </div>
        {/each}
      </div>

      <div class="steps">
        <Scrolly bind:value={stepIndex} top={innerHeight / 2}>
          {#each storyscript.steps as step, i}
            <div class="step" class:active={currentStepIndex === i}>
              <div class="contentwrapper">
                <div class="contentbackground" />
                <div class="content">
                  <p class="card-title">{step.description.title}</p>
                  {#if step.description.text}
                    <p class="card-body">{@html step.description.text}</p>
                    <p class="card-body">{@html step.description.text2}</p>
                    <p class="card-body">{@html step.description.text3}</p>
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
    padding: 0 0px;
    margin: 0 auto;
  }

  section.wide {
    max-width: 70rem;
    margin: 0 auto;
  }

  .container {
    position: relative;
  }

  .chart-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
    position: relative;
    margin: auto 10px;
  }

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
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

  .step {
    width: 100%;
    background: none;
    z-index: 2;
    position: relative;
    margin: 130vh 10vw 10vw 0vh;
  }

  .steps {
    margin-top: 7vh;
  }

  .step:first-of-type {
    margin-top: 30vh;
  }

  .step:last-of-type {
    margin-bottom: 150vh;
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
    width: min(36em, 80%); 
    margin: 0 auto; 
    padding: 0;
  }

  .contentbackground {
    position: absolute;
    inset: 0;
    border-radius: 1.2em;
    background: var(--color-background);
    border: 0.0045em solid #0a6167;
    box-shadow:
      0 0 0 0.05em rgba(28, 176, 186, 0.3),
      0 0 1.2em rgba(28, 176, 186, 0.4);
    opacity: 1;
    pointer-events: none;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 1.2em 1.4em;
    border-radius: 1em;
    overflow-y: auto;
  }

  .step .content {
    fill: var(--color-chart-axis);
    line-height: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    font-family: "Montserrat Alternates2", sans-serif;
  }

  .step .contentwrapper {
    opacity: 0.6;
    transform: translateY(0.6em) scale(0.99);
    transition:
      opacity 0.25s ease-out,
      transform 0.25s ease-out;
  }

  .step.active .contentwrapper {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .step.active .contentwrapper {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .card-title {
    font-size: 1.05em;
    fill: var(--color-chart-axis);
    font-family: "Montserrat Alternates SemiBold", sans-serif;
    padding: 0px;
    margin-bottom: 0.8em;
    line-height: 1.3em;
  }

  .card-body {
    font-family: "Montserrat Alternates2", sans-serif;
    color: var(--color-global);
    font-size: 0.95em;
    line-height: 1.6em;
    hyphens: auto;
    margin-bottom: 0.6em;
  }

  /* Mobile landscape - increase spacing between steps */
  @media (max-height: 600px) and (orientation: landscape) {
    .step {
      margin-bottom: 100vh;
    }

    .step:last-of-type {
      height: 180vh;
    }
  }

  @media (min-width: 900px) {
    .chart {
      padding-left: 0px;
    }

    .wide .contentwrapper {
      position: relative;
    }
  }

  /* Mobile (< 480px) */
  @media screen and (max-width: 480px) {
    .contentwrapper {
      width: 100%;
      margin: 0 auto;
    }
    .card-title {
      font-size: 0.85em;
    }
    .card-body {
      font-size: 0.8em;
    }
  }

  /* Mobile (< 260px) */
  @media screen and (max-width: 260px) {
    .contentwrapper {
      width: 100%;
      margin: 0 auto;
    }
    .card-title {
      font-size: 0.85em;
    }
    .card-body {
      font-size: 0.8em;
    }
  }
</style>
