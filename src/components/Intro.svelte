<script>
  import { gsap } from "gsap";

  export let src;
  export let title;
  export let subtitle;
  export let credentials;
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
          { filter: filters[i], duration: 2 },
          i * 0.2 + offset,
        );
        //the text
        timeline.set(
          textEl,
          {
            x: i === filters.length ? 0 : randomInRange(-40, 40),
            y: i === filters.length ? 0 : randomInRange(-40, 40),
            scale: i === filters.length ? 1 : randomInRange(0.8, 1.2),
            duration: 1.5,
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
            duration: 1.5,
          },
          i * 0.2 + offset,
        );
      }
    }
  }
</script>

<div bind:this={slideEl} class="slide" class:isVisible>
  <div class="textcontainer" bind:this={textEl}>
    <h3 class="title">
      {title}
    </h3>
    <p class="subtitle">
      {subtitle}
    </p>
  </div>
  <img bind:this={imgEl} {src} alt={title} />
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
    -webkit-text-stroke-width: 3.5px;
    letter-spacing: 1px;
    word-spacing: 30px;
    text-wrap: nowrap;
    text-transform: uppercase;
    margin: -200px 0 0 0;
    padding: 0;
    font-family: "Syncopate";
    font-size: 110px;
  }

  .subtitle { 
    word-spacing: 5px;
    letter-spacing: 0px;
    text-wrap: nowrap;
    margin: 0 0 0 0;
    font-size: 26px;
    font-family: "Montserrat Alternates2", sans-serif;
  }

  .credentials { 
    word-spacing: 5px;
    letter-spacing: 0px;
    text-wrap: nowrap;
    margin: 0 0 0 0;
    font-size: 12px;
    font-family: "Montserrat Alternates2", sans-serif;
  }

  /*--------------------------------------*/
  /* Screen stylings */
  /*--------------------------------------*/

  @media screen and (max-width: 1400px) {
    .title {
      font-size: 70px;
      -webkit-text-stroke-width: 1.9px;
      word-spacing: 20px;
    }
  }

  @media screen and (max-width: 780px) {
    .title {
      font-size: 50px;
      -webkit-text-stroke-width: 1.5px;
      word-spacing: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 35px;
      -webkit-text-stroke-width: 1px;
      word-spacing: 12px;
    }
  }
</style>
