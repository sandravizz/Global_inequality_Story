<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
</script>

<section style="margin: 50px auto">
  <img src="/assets/Musk_dollars.png" width="250"/>
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
  <p class="text-medium">
  The data and analysis presented here are based on the work of more than 100 researchers over four years, located on all continents, contributing to the World Inequality Database (WID.world), maintained by the World Inequality Lab. This vast network collaborates with statistical institutions, tax authorities, universities and international organizations, to harmonize, analyze and disseminate comparable international inequality data. 
  This allows to present systematic data on inequality at the global level and to analyze how it has evolved over time. Global income inequality has always been very great, reflecting the persistence of a world economic system that is extremely hierarchical both between countries and within them.
</p>
</section>

<div style="margin-top: calc((-100vh + 500px)/2); margin-bottom: calc((-100vh + 500px)/2);">
  <Scroller storyscript={multilinescript} layout="wide" />
</div>

<section style="margin: 50px auto">
  <p class="text-medium">
    The data and analysis presented here are based on the work of more than 100 researchers over four years, located on all continents, contributing to the World Inequality Database (WID.world), maintained by the World Inequality Lab. This vast network collaborates with statistical institutions, tax authorities, universities and international organizations, to harmonize, analyze and disseminate comparable international inequality data. 
    This allows to present systematic data on inequality at the global level and to analyze how it has evolved over time. Global income inequality has always been very great, reflecting the persistence of a world economic system that is extremely hierarchical both between countries and within them.
  </p>
</section>

<div style="margin-top: calc((-100vh + 500px)/2); margin-bottom: calc((-100vh + 500px)/2);">
  <Scroller storyscript={differencescript} layout="wide" />
</div>

<section style="margin: 50px auto">
  <p class="text-medium">
    The data and analysis presented here are based on the work of more than 100 researchers over four years, located on all continents, contributing to the World Inequality Database (WID.world), maintained by the World Inequality Lab. This vast network collaborates with statistical institutions, tax authorities, universities and international organizations, to harmonize, analyze and disseminate comparable international inequality data. 
    This allows to present systematic data on inequality at the global level and to analyze how it has evolved over time. Global income inequality has always been very great, reflecting the persistence of a world economic system that is extremely hierarchical both between countries and within them.
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
