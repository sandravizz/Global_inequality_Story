<script>
  import { getContext } from "svelte";
  import { transpose } from "d3";
  import tinycolor from "tinycolor2";

  const { zDomain, zRange } = getContext("LayerCake");
  const data = transpose([$zDomain, $zRange]);
  const color = tinycolor($zRange[0]);

  color.setAlpha(1);
</script>

<div class="legend">
  {#each data as [label, color]}
    <div
      class="dot"
      style="background: {tinycolor(color)
        .setAlpha(1)
        .toRgbString()}; border-color: {color}"
    />
    <div class="label">{label}</div>
  {/each}
</div>

<style>
  .legend {
    display: flex;
    align-items: center;
  }

  .dot {
    height: 10px;
    width: 10px;
    min-width: 10px;
    min-height: 10px;
    border-radius: 5px;
    border-width: 1px;
  }

  .label {
    margin-left: 6px;
    font-size: 12px;
    margin-right: 16px;
  }
</style>
