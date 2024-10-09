<script>
  import { onMount } from "svelte";

  let element;
  let animate = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate = true;
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.1 },
    ); // Adjust the threshold as needed

    if (element) {
      observer.observe(element);
    }
  });
</script>

<footer>
  <div bind:this={element} class="content">
    <div class="faded">Made by</div>
    <div>
      <span class:animate
        >&nbsp;<a href="https://www.sandraviz.com/" target="_blank">Sandra</a>
        and
        <a href="https://www.linkedin.com/in/patrickwojda/" target="_blank"
          >Patrick</a
        ></span
      >
    </div>
  </div>
</footer>

<style>
  a {
    color: #d5f2f2;
  }

  footer {
    font-family: "Montserrat Alternates1", sans-serif;
    position: relative;
    height: 100vh;
  }

  .faded {
    opacity: 0.6;
    margin-top: calc(var(--font-size-md) * 0.25);
  }

  .content {
    display: flex;
    height: calc(var(--font-size-md) * 2);
    font-size: var(--font-size-md);
  }

  .content div {
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
  }

  @keyframes slidein {
    0% {
      margin-left: -500px;
    }
    20% {
      margin-left: -500px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  .content {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  span {
    position: relative;
    font-weight: bold;
    margin-left: -500px;
    top: 4px;
  }

  .content span.animate {
    animation: slidein;
    margin-left: 0;
    animation-duration: 6s;
  }
</style>
