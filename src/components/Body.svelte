<script>
  import Scroller from "./story/ScrollyEngine.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";

  let collapsed = true;
</script>

<section style="margin-top: 16px">
  <p class="article">
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >World production
    </a> is so high as it has never been before. Humanity itself has reached a level
    of efficiency which could feed the world. Then why are so many people still living
    and dying in poverty?
  </p>

  <p class="article">
    On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.
  </p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
  <h3>xxx</h3>
  <p class="article"></p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>
  <h3>xxx</h3>
  <p class="article"></p>
</section>

<section>
  <div class:collapsed>
    <h5>Methodology</h5>

    <p class="footer">
      Income data was sourced from the <a
        target="_blank"
        href="https://wid.world/wid-world/">World Inequality Database</a
      > (WID). It aims to provide open and convenient access to the most extensive
      available database on the historical evolution of the world distribution of
      income and wealth, both within countries and between countries. The WID combines
      different data sources: national accounts, survey data, fiscal data, and wealth
      rankings.
    </p>

    <p class="footer">
      <a
        target="_blank"
        href="https://wid.world/document/why-is-europe-more-equal-than-the-united-states-world-inequality-lab-wp-2020-19/"
        >Pretax income</a
      > corresponds to income after the operation of social insurance systems, but
      before other types of redistribution. It is equal to factor income, plus pension
      benefits (17% of national income on average) and unemployment and disability
      benefits (1.7%), minus the social contributions that pay for them. Contributions
      and transfers are generally observed in survey data and can therefore be directly
      removed from or added to individual factor incomes.
    </p>

    {#if collapsed}
      <div class="fade" />
    {/if}
  </div>

  {#if collapsed}
    <div
      class="expand"
      role="button"
      tabindex="0"
      on:click={() => (collapsed = false)}
    >
      Read more
    </div>
  {/if}
</section>

<style>
  section {
    max-width: 50rem;
    padding: 16px;
    margin: 0 auto;
  }

  h3 {
    line-height: 1.1;
    font-size: 1.2vw;
    font-family: "Montserrat Alternates2", sans-serif;
  }

  h5 {
    margin: 0 0 10px;
    line-height: 2;
    font-size: 0.75vw;
    font-family: "Montserrat Alternates3", sans-serif;
    margin: 0;
  }

  .article {
    font-size: 1vw;
    font-family: "Montserrat Alternates2", sans-serif;
    hyphens: auto;
    opacity: 0.9;
    text-align: justify;
  }

  .footer {
    margin-bottom: 4px;
    font-size: 0.75vw;
    font-family: "Montserrat Alternates2", sans-serif;
    opacity: 1;
    hyphens: auto;
    opacity: 0.9;
    text-align: justify;
  }

  .collapsed {
    max-height: calc(0.75vw * 8);
    overflow: hidden;
    position: relative;
  }

  .fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 50%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      var(--color-background)
    );
    background-size: cover;
    background-position: center;
  }

  .expand {
    text-align: center;
    cursor: pointer;
    font-size: 0.75vw;
    margin-top: 16px;
  }

  a {
    color: #d5f2f2;
  }

  :root {
    --brunswick-green: #184b39ff;
    --dark-green: #13270bff;
    --cornflower-blue: #748ffeff;
    --pakistan-green: #203f21ff;
    --cerulean: #307fa3ff;
    --jordy-blue: #99b9f8ff;
    --caribbean-current: #1f6e7dff;
    --cornflower-blue: #7190feff;
    --caribbean-current: #226566ff;
    --brunswick-green: #224e3bff;
    --chefchaouen-blue: #4c8ffeff;
    --dark-green: #142605ff;
    --night: #081604ff;
    --cerulean: #247285ff;
    --pakistan-green: #113c1eff;
    --hot-pink: #fe5dbaff;
    --rose-pink: #e95bbaff;
    --lavender-pink: #f9acdbff;
    --dark-green: #022121ff;
    --sky-magenta: #c35bacff;
    --black: #020909ff;
    --hot-pink-2: #ff6db7ff;
    --persian-pink: #fc7ec2ff;
    --charcoal: #213d4fff;
    --english-violet: #4a496aff;
  }
</style>
