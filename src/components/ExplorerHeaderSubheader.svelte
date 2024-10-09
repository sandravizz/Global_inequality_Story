<script>
  export let header;
  export let subheader;
</script>

<h1>{header}</h1>

{#if subheader}
  <h2>{subheader}</h2>
{/if}

<style>
  h1 {
    font-size: var(--explorer-font-size-lg);
  }

  h2 {
    font-size: var(--explorer-font-size-md);
  }
</style>
