<script>
  import { gsap } from "gsap";
  import { base } from "$app/paths";
  import Intro from "./Intro.svelte";

  let slideIndex = undefined;
  const setSlideIndex = (val) => (slideIndex = val);

  // Create a GSAP timeline for automatic slideshow animation
  const tl = gsap.timeline();
  // After 2 seconds, switch to slide 1 (second intro image)
  tl.call(setSlideIndex, [1], 4);
  // After 4 seconds, go back to slide 0 with subtitle
  tl.call(setSlideIndex, [2], 14);
</script>

<div class="wrapper">
  <Intro
    src="{base}/assets/1.png"
    title="Global inequality"
    subtitle={slideIndex === 2
      ? "A data-story about global inequality between and"
      : ""}
    subtitleB={slideIndex === 2
      ? "within countries over the last 4 decades"
      : ""}
    hide={slideIndex !== undefined
      ? slideIndex !== 0 && slideIndex !== 2
      : null}
    show={slideIndex !== undefined
      ? slideIndex === 0 || slideIndex === 2
      : null}
    isVisible={true}
  >
    <p slot="credits">
      {#if slideIndex === 2}
        by
        <a
          href="https://www.linkedin.com/in/patrickwojda/"
          target="_blank"
          rel="noopener noreferrer">Patrick Wojda</a
        >
        and
        <a
          href="https://www.sandraviz.com"
          target="_blank"
          rel="noopener noreferrer">Sandra Becker</a
        >
      {/if}
    </p>
  </Intro>

  <Intro
    src="{base}/assets/2.jpeg"
    title="Global inequality"
    hide={slideIndex !== 1}
    show={slideIndex === 1}
  />
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
  }
</style>
