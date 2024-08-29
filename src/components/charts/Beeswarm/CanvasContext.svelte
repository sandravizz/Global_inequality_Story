<script>
  import { setContext, getContext, onMount, onDestroy } from "svelte";

  const { width, height } = getContext("LayerCake");
  const { ctx } = getContext("canvas");

  let animationFrameId; // To store the ID of the current animation frame.
  let pendingInvalidation = false; // Flag to prevent multiple invocations of the animation frame.
  let drawFunctions = []; // Array to hold all registered drawing functions.

  // Update function to clear the canvas and apply all registered drawing functions.
  const update = () => {
    $ctx.clearRect(0, 0, $width, $height); // Clear the canvas.
    drawFunctions.forEach((fn) => {
      $ctx.save();
      fn($ctx);
      $ctx.restore();
    });

    pendingInvalidation = false; // Ok to redraw again
  };

  // register canvas helper functions
  const init = () => {
    setContext("myCanvas", {
      // register new drawing functions
      register(fn) {
        drawFunctions.push(fn);
      },

      // deregister drawing functions. use in components when they are destroyed
      deregister(fn) {
        drawFunctions.splice(drawFunctions.indexOf(fn), 1);
      },

      // triggers a repaint of the canvas
      invalidate() {
        if (pendingInvalidation) {
          return;
        }

        pendingInvalidation = true;
        animationFrameId = requestAnimationFrame(update);
      },
    });
  };

  // Cleanup function to cancel the animation frame when the component is destroyed.
  onDestroy(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  init();
</script>

<slot />
