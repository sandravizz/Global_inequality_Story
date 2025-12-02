<script>
  import { gsap } from "gsap";

  export let src;
  export let title;
  export let subtitle;
   export let subtitleB;
  export let credits;
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
      <p class="subtitleB">
      {subtitleB}
    </p>
    <p class="credits">
      {credits}
    </p>
  </div>
  <img bind:this={imgEl} {src} alt={title} />

  <div class="scroll-indicator">
    <span class="scroll-text">scroll down</span>
    <svg
      class="chevron"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
    padding: 0 20px;
    max-width: 100%;
    box-sizing: border-box;
    align-self: flex-start;
    margin-top: 30vh;
  }

  .title {
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: #d5f2f2;
    -webkit-text-stroke-width: 3.5px;
    letter-spacing: 1px;
    word-spacing: 30px;
    text-wrap: wrap;
    text-transform: uppercase;
    padding: 0;
    font-family: "Syncopate";
    font-size: 110px;
    text-align: center;
    max-width: 100%;
  }

  .subtitle, .subtitleB  {
    margin: 0 0;
    font-size: 1.3em;
    font-family: "Montserrat Alternates2", sans-serif;
    text-align: center;
    padding: 0.2em 0em;
    color: #e5e6ed;
    text-shadow: 0 3px 5px #7291fe;
    letter-spacing: 0.5px;
    line-height: 1.2;
    display: inline-block;
  }

  .credits {
    margin: 1.2em auto 0 auto;
    font-size: 0.6em;
    font-family: "Montserrat Alternates2", sans-serif;
    text-align: center;
    padding: 0.3em 0.8em;
    color: #e5e6ed;
    text-shadow: 0 1px 3px rgba(33, 82, 66, 0.4);
    letter-spacing: 0.3px;
    word-spacing: 1px;
    line-height: 1.3;
    border-radius: 4px;
    display: inline-block;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 6px;
    background-color: rgba(33, 82, 66, 0);
    border-radius: 6px;
  }

  .scroll-text {
    font-family: "Montserrat Alternates2", sans-serif;
    font-size: 0.7em;
    letter-spacing: 1px;
  }

  .chevron {
    color: RGBA(213, 242, 242, 0.8);
  }

  /*--------------------------------------*/
  /* Screen stylings */
  /*--------------------------------------*/

  /* Tablet landscape / Small laptop (< 1024px) */

  @media screen and (max-width: 1024px) {
    .textcontainer {
      padding: 0 30px;
    }

    .title {
      font-size: 50px;
      -webkit-text-stroke-width: 1.9px;
      word-spacing: 26px;
    }

  .subtitle, .subtitleB  {
    font-size: 1.1em;
  }

    .credits  {
    font-size: 0.45em;
  }
  }

  /* Tablet (< 768px) */

  @media screen and (max-width: 768px) {
    .textcontainer {
      padding: 0 20px;
    }

    .title {
      font-size: 42px;
      -webkit-text-stroke-width: 1.7px;
      word-spacing: 15px;
    }

  .subtitle, .subtitleB  {
    font-size: 1em;
  }

      .credits  {
    font-size: 0.5em;
  }

   }

  /* Mobile (< 480px) */

  @media screen and (max-width: 480px) {
    .textcontainer {
      padding: 0 15px;
    }

    .title {
      font-size: 32px;
      -webkit-text-stroke-width: 1.5px;
      word-spacing: 10px;
      letter-spacing: 0.5px;
    }

  .subtitle, .subtitleB  {
    font-size: 0.75em;
  }

 
      .credits  {
    font-size: 0.45em;
  }

    .scroll-text {
      font-size: 0.6em;
    }
  }
</style>
