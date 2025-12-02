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
      ? "Data-story about global inequality within and"
      : ""}
    subtitleB={slideIndex === 2
      ? "across countries over the last 4 decades"
      : ""}
    credits={slideIndex === 2 ? "by Patrick Wojda and Sandra Becker" : ""}
    hide={slideIndex !== undefined
      ? slideIndex !== 0 && slideIndex !== 2
      : null}
    show={slideIndex !== undefined
      ? slideIndex === 0 || slideIndex === 2
      : null}
    isVisible={true}
  />

  <Intro
    src="{base}/assets/2.jpeg"
    title="Global inequality"
    subtitle=""
    subtitleB=""
    credits=""
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
