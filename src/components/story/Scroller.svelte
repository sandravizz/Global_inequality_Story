<script>
  import Scrolly from "$components/story/Scrolly.svelte";

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

<section
  class:fullWidth={layout === "fullwidth"}
  class:wide={layout === "wide"}
>
  <div class="container">
    <div class="chart-container">
      <div
        class="chart"
        class:sticky={stepIndex < storyscript.steps.length}
        class:bottom={stepIndex >= storyscript.steps.length}
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
            <div class="step" class:active={stepIndex === i}>
              <div class="contentwrapper">
                <div class="contentbackground" />
                <div class="content">
                  <p class="text_scroll_title">{step.description.title}</p>
                  {#if step.description.text}
                    <p class="text-medium-scroller">{@html step.description.text}</p>
                    <p class="text-medium-scroller">{@html step.description.text2}</p>
                    <p class="text-medium-scroller">{@html step.description.text3}</p>
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

  section.fullWidth {
    max-width: none;
    padding: 20px auto;
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

  .fullWidth .chart-container {
    width: 100%;
    max-width: none;
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
    height: 100vh;
    width: 100%;
    background: none;
    z-index: 2;
    position: relative;
    margin: 10vh 10vh 10vh 0vh;
  }

  .steps {
    margin-top: 5vh;
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
    width: 100%;
    margin: 0 0 0 0;
    padding: 0px;
  }

  .contentbackground {
    border-radius: 30px;
    background-color: var(--color-background2);
    opacity: 0.8;
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .step .content {
    fill: var(--color-chart-axis);
    line-height: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    font-family: "Montserrat Alternates2", sans-serif;
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
    .fullWidth .container {
      margin: 0;
    }

    .chart {
      padding-left: 0px;
    }

    .fullWidth .chart {
      width: 100%;
    }

    .fullWidth .steps {
      width: 40%;
      margin-left: 0%;
    }

    .wide .contentwrapper {
      position: relative;
    }
  }
</style>
