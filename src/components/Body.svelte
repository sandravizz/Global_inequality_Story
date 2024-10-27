<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";

  let collapsed = true;
</script>

<section style="margin: 50px auto">
  <p class="text-medium">
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >World production
    </a> is so high as it has never been before. Humanity itself has reached a level
    of efficiency which could feed the world. Then why are so many people still living
    and dying in poverty?
  </p>

  <p class="text-medium">
    On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.
  </p>
</section>

<div style="margin-top: calc((-100vh + 500px)/2); margin-bottom: calc((-100vh + 500px)/2);">
  <Scroller storyscript={multilinescript} layout="wide" />
</div>

<section  style="margin: 80px auto 100px auto">
  <h3 class="text-big">Hello hello</h3>
  <p class="text-medium">  On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.</p>
</section>

<div style="margin-top: calc((-100vh + 500px)/2)">
  <Scroller storyscript={differencescript} layout="wide" />
</div>

<section>
  <h3 class="text-big">Hello hello</h3>
  <p class="text-medium">  On the other hand in more and more countries facisim is again! on the rise.
    Extreme inquality leads to frustration, fear and anger. These are
    observations and questions that motivated us to create this project on
    global income inquality.</p>
</section>

<section>
    <p class="text-small">Methodology</p>

    <p class="text-small">
      Income data was sourced from the <a
        target="_blank"
        href="https://wid.world/wid-world/">World Inequality Database</a
      > (WID). It aims to provide open and convenient access to the most extensive
      available database on the historical evolution of the world distribution of
      income and wealth, both within countries and between countries. The WID combines
      different data sources: national accounts, survey data, fiscal data, and wealth
      rankings.
    </p>

    <p class="text-small">
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
</section>

<style>
  section {
    max-width: 50rem;
    padding: 16px;
    margin: 0 auto;
  }

  section.wide {
    max-width: 70rem;
  }
</style>
