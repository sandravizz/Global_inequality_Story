<script>
  import { onMount, onDestroy } from "svelte";
  import { tweened } from "svelte/motion";
  import TooltipCell from "../TooltipCell.html.svelte";

  let tooltipEl;
  let bgEl;
  let contentEl;
  let contentTitleEl;
  let contentDescriptionEl;
  let cells = [];
  let rows = 10;
  let cols = 10;
  let isOpen = false;
  const cellMaximumDelay = 0.5; // seconds
  const cellDuration = 80; // milliseconds
  const durationTooltip = cellMaximumDelay * 1000 + cellDuration;
  const opacity = tweened(0, { delay: 100, duration: durationTooltip }); // Initial opacity value

  // Function to calculate tooltip position
  function calculateTooltipPosition(event) {
    const { clientX, clientY } = event;
    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;

    let position = { left: clientX + scrollLeft, top: clientY + scrollTop };

    if (clientX + tooltipWidth > viewportWidth) {
      position.left = clientX - tooltipWidth + scrollLeft;
    }
    if (clientY + tooltipHeight > viewportHeight) {
      position.top = clientY - tooltipHeight + scrollTop;
    }
    if (position.left < scrollLeft) {
      position.left = scrollLeft;
    }
    if (position.top < scrollTop) {
      position.top = scrollTop;
    }

    return position;
  }

  // Function to update tooltip position
  function updatePosition(event) {
    const position = calculateTooltipPosition(event);
    tooltipEl.style.left = `${position.left}px`;
    tooltipEl.style.top = `${position.top}px`;
  }

  // Function to toggle the tooltip's visibility and triggers the animation effect
  function toggle(event) {
    isOpen = !isOpen;
    animateTooltipOpacity(isOpen);
  }

  // Function to animate the tooltip using Svelte's tweened store
  function animateTooltipOpacity(isOpen) {
    opacity.set(isOpen ? 1 : 0);
  }

  // get cells
  $: {
    if (tooltipEl) {
      cells = new Array(rows * cols).fill(null).map((c, i, arr) => {
        const ttBCR = tooltipEl.getBoundingClientRect();

        const maximumDistance = Math.sqrt(
          ttBCR.height * ttBCR.height + ttBCR.width * ttBCR.width,
        );

        const cellHeight = ttBCR.height / rows;
        const cellWidth = ttBCR.width / cols;

        const cellRow = Math.floor(i / cols);
        const cellCol = i % cols;

        const distance = Math.sqrt(
          Math.pow(cellCol * cellWidth, 2) + Math.pow(cellRow * cellHeight, 2),
        );

        const delay = (distance / maximumDistance) * cellMaximumDelay;

        return delay * 1000;
      });
    }
  }
</script>

<span
  id="slotwrapper"
  on:mouseenter={toggle}
  on:mouseleave={toggle}
  on:mousemove={updatePosition}
>
  <slot />
</span>

<div
  class="tooltip"
  bind:this={tooltipEl}
  style="position: absolute; opacity: {$opacity};"
>
  <div class="tooltip__bg" bind:this={bgEl}>
    {#each cells as delay, i}
      <TooltipCell show={isOpen} {delay} duration={cellDuration} />
    {/each}
  </div>
  <div class="tooltip__content" bind:this={contentEl}>
    <div class="tooltip__content-title" bind:this={contentTitleEl}>Title</div>
    <div class="tooltip__content-desc" bind:this={contentDescriptionEl}>
      Content content
    </div>
  </div>
</div>

<style>
  #slotwrapper {
    cursor: pointer;
    background-color: red;
    padding: 2px 4px;
    color: white;
    font-weight: bold;
  }

  .tooltip {
    position: absolute;
    z-index: 99999;
    /* Additional styles for the tooltip */
  }
  .tooltip {
    --tt-width: 200px;
    --tt-height: 250px;
    --tt-rows: 10;
    --tt-columns: 10;
    --tt-bg-color: #4d25b0;
    --tt-text-color: #abcb19;
    position: absolute;
    pointer-events: none;
    opacity: 0;
    top: 50%;
    left: 50%;
    width: var(--tt-width);
    height: var(--tt-height);
    display: grid;
    grid-template-areas: "tooltip";
  }

  .tooltip__bg {
    grid-area: tooltip;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--tt-columns), 1fr);
    grid-template-rows: repeat(var(--tt-rows), 1fr);
  }

  .tooltip__bg {
    background: transparent;
  }

  .tooltip__content {
    grid-area: tooltip;
    color: var(--tt-text-color);
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tooltip__content-title {
    font-weight: normal;
    margin: 0;
    font-size: 1.5rem;
  }

  .tooltip__content-desc {
    margin: auto 0 0 0;
  }

  @media screen and (min-width: 53em) {
    .tooltip {
      --tt-width: 290px;
      --tt-height: 330px;
    }

    .tooltip__content {
      padding: 2rem;
    }

    .tooltip__content-title {
      font-size: 2rem;
    }
  }
</style>
