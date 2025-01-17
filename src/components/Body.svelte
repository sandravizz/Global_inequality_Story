<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
</script>

<section style="margin: 50px auto">
  <p class="text-medium">
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >World production
    </a> is so high as it has never been before in history.<br/>
    Humanity has reached a level of efficiency that could feed the entire world. 💪<br/>
    Then why are so many people still living and dying in poverty? 😞<br/>
    These are the observations and questions that motivated me to create this project on global income inequality.
  </p>
  <p class="text-medium">      
    Global income inequality has always been very high, 
    reflecting the persistence of a world economic system 
    that is extremely hierarchical both between countries and within them.     
    On the other hand, in more and more countries fascism is again on the rise.
    Both might be related as in particular extreme inequality leads to high level of frustration, fear, and anger. 😡

  </p>
  <p class="text-medium">
  The data presented are provide by the World Inequality Lab using the work of more than 100 researchers located on all continents.  
  This vast network collaborates with statistical institutions, tax authorities, universities, and international organizations, to harmonize international inequality data. 
  Thanks to this systematic data on inequality at the global level and over the last 4 decades trends can be made visual. 👀

</p>
</section>

<div style="margin-top: calc((-100vh + 500px)/2); margin-bottom: calc((-100vh + 500px)/2);">
  <Scroller storyscript={multilinescript} layout="wide" />
</div>

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
