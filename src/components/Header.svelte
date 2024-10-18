<script>
  import { gsap } from "gsap";
  import { base } from "$app/paths";
  import Intro from "./Intro.svelte";

  let slideIndex = undefined;
  const setSlideIndex = (val) => (slideIndex = val);

  const tl = gsap.timeline();
  tl.call(setSlideIndex, [1], 5);  
  tl.call(setSlideIndex, [0], 10); 
</script>

<div class="wrapper">
  <Intro
    src="{base}/assets/1.png"
    title="Global inequality"
    hide={slideIndex !== undefined ? slideIndex !== 0 : null}
    show={slideIndex !== undefined ? slideIndex === 0 : null}
    isVisible={true}
  />

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
