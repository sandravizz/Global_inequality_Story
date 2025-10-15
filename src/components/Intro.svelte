<script>
  import { gsap } from "gsap";

  export let src;
  export let title;
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
        timeline.to(slideEl, { opacity: 1, duration: 1.5 }, 0.5);
      }
      if (hide) {
        timeline.to(slideEl, { opacity: 0, duration: 1.5 }, 0.5);
      }

      for (let i = 0; i <= filters.length; i++) {
        //the whole slide
        timeline.set(
          slideEl,
          { filter: filters[i], duration: 0.2 },
          i * 0.2 + offset,
        );
        //the text
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
        //the image
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
    <h1 class="title">
      {title}
    </h1>
  </div>
  <img bind:this={imgEl} {src} alt={title} />
  <div class="hint text-small">scroll down</div>
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .textcontainer {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: #d5f2f2;
    -webkit-text-stroke-width: 3px;
    letter-spacing: -1.4px;
    word-spacing: 30px;
    text-wrap: nowrap;
    text-transform: uppercase;
    margin: 0 20 0 0;
    padding: 0;
    opacity: 0.9;
    font-family: "Syncopate";
    font-size: var(--step-7);
  }

  .hint {
    z-index: 100;
    position: absolute;
    bottom: 20px;
    left: 50%;
    /* transform: translateX(-50%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
  }

  /*--------------------------------------*/
  /* Screen stylings */
  /*--------------------------------------*/

  @media screen and (max-width: 1800px) {
    .title {
      font-size: var(--step-6);
      -webkit-text-stroke-width: 2px;
      letter-spacing: -1.2px;
      word-spacing: 20px;
    }
  }

  @media screen and (max-width: 780px) {
    .title {
      font-size: var(--step-4);
      -webkit-text-stroke-width: 1.9px;
      word-spacing: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: var(--step-3);
      -webkit-text-stroke-width: 1.4px;
      word-spacing: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: var(--step-2);
      -webkit-text-stroke-width: 1.1px;
      word-spacing: 15px;
    }
  }

  @media screen and (max-width: 380px) {
    .title {
      font-size: var(--step-1);
      -webkit-text-stroke-width: 0.9px;
      word-spacing: 10px;
    }
  }
</style>
