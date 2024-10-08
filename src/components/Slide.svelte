<script>
  import { gsap } from "gsap";

  export let src;
  export let title;
  export let subtitle;
  export let subtitle2;
  export let hide;
  export let show;
  export let isVisible = false;

  let textEl, imgEl, slideEl;

  function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const filters = [
    "hue-rotate(90deg)",
    "contrast(140%)",
    "sepia(73%) saturate(200%) hue-rotate(288deg) contrast(110%) blur(5px)",
    "none",
  ];

  $: {
    if (show || hide) {
      const timeline = gsap.timeline();
      const offset = show ? 1 : 0;
      if (show) {
        timeline.to(slideEl, { opacity: 1, duration: 1 }, 0.8);
      }
      if (hide) {
        timeline.to(slideEl, { opacity: 0, duration: 1 }, 0.8);
      }

      for (let i = 0; i <= filters.length; i++) {
        timeline.set(
          slideEl,
          { filter: filters[i], duration: 0.2 },
          i * 0.2 + offset,
        );

        timeline.set(
          textEl,
          {
            x: i === filters.length ? 0 : randomInRange(-40, 40),
            y: i === filters.length ? 0 : randomInRange(-40, 40),
            scale: i === filters.length ? 1 : randomInRange(0.8, 1.2),
            duration: 0.8,
          },
          i * 0.2 + offset,
        );

        timeline.set(
          imgEl,
          {
            x: i === filters.length ? 0 : randomInRange(-10, 10),
            y: i === filters.length ? 0 : randomInRange(-10, 10),
            scale: i === filters.length ? 1.05 : randomInRange(1.05, 1.6),
            duration: 0.8,
          },
          i * 0.2 + offset,
        );
      }
    }
  }
</script>

<div bind:this={slideEl} class="slide" class:isVisible>
  <div class="textcontainer" bind:this={textEl}>
    <h1>
      {title}
    </h1>

    {#if subtitle}
      <h3>
        {subtitle}
      </h3>
    {/if}

    {#if subtitle2}
      <p class="article">
        {subtitle2}
      </p>
    {/if}
  </div>

  <img bind:this={imgEl} {src} alt={title} />

  <div class="hint">
    <div>scroll down</div>
    <div class="gg-chevron-down" />
  </div>
</div>

<style>
  .slide.isVisible {
    opacity: 1;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    opacity: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .textcontainer {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: #d5f2f2;
    -webkit-text-stroke-width: 3px;
    text-wrap: nowrap;
    text-transform: uppercase;
    margin: 0 20 0 0;
    padding: 0;
    opacity: 0.7;
  }

  h3 {
    margin: 0;
    padding: 0;
    -webkit-text-stroke-color: #d5f2f2;
    line-height: normal;
    opacity: 0.7;
  }

  .article {
    hyphens: auto;
    opacity: 0.9;
    text-align: justify;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .hint {
    z-index: 100;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
  }

  .hint > div {
    margin-top: -6px;
    font-size: 0.9em;
  }

  .gg-chevron-down {
    transform: scale(1.8);
    color: #d5f2f2;
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
  }

  .gg-chevron-down::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 1.5px solid;
    border-right: 1.5px solid;
    transform: rotate(45deg);
    left: 4px;
    top: 2px;
  }
</style>
