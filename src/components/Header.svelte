<script>
  import { gsap } from "gsap";

  import Slide from "./Slide.svelte";

  let slideIndex = undefined;

  const setSlideIndex = (val) => (slideIndex = val);

  // use gsap to call slides
  const tl = gsap.timeline();
  tl.call(setSlideIndex, [1], 5); // switch to second slide (index 1) after 5s
  tl.call(setSlideIndex, [0], 10); // switch to first slide (index 0) after 10s
</script>

<div class="wrapper">
  <Slide
    src="/assets/1.png"
    title="Global inequality"
    subtitle="Analysis of global income inequality 1980 - 2023"
    hide={slideIndex !== undefined ? slideIndex !== 0 : null}
    show={slideIndex !== undefined ? slideIndex === 0 : null}
    isVisible={true}
  />

  <Slide
    src="/assets/2.png"
    title=""
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
