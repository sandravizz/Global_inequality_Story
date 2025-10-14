<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
</script>

<section>
  <p class="text-medium">
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >World production 
    </a> is so high as it has never been before in history. Humanity has reached
    a level of efficiency that could feed the entire world. 💪 Then why are so many
    people still living and dying in poverty? 😞   
  </p>
  <p class="text-medium">
    Global inequality has always been very high, reflecting the persistence of a
    world economic system that is extremely hierarchical both between countries
    and within them. On the other hand, in more and more countries fascism is
    again on the rise. Both might be related as in particular extreme inequality
    leads to high level of frustration, fear, and anger. 😡
  </p>
  <p class="text-medium">
    The data presented in this project are provided by the <a
      target="_blank"
      href="https://wid.world/"
      >World inequality lab 
    </a> the using the work of more than 100 researchers located on all continents. This
    vast network collaborates with statistical institutions, tax authorities, universities,
    and international organizations, to harmonize international inequality data.
    Thanks to this systematic data on inequality at the global level and over the
    last four decades trends can be made visual. 👀
  </p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
  <p class="text-medium">
    As the charts presented so far illustrate, economic inequality is strongly
    influenced by geographical context, which in turn is shaped by local
    politics and economic regulations—or the lack thereof.
  </p>
  <p class="text-medium">
    The previous visualizations focused on the Gini coefficient, a single
    numerical indicator that provides an overall summary of inequality within a
    country. While the Gini coefficient is useful for understanding the general
    level of inequality, it can obscure important details. For instance, two
    countries with the same Gini value might differ significantly in whether
    inequality is driven by extreme income concetration at the top or lacking a
    miminum share at the bottom.
  </p>
  <p class="text-medium">
    To gain a more nuanced understanding, the following charts compare the share
    of national income held by the richest 10% with that of the poorest 50%.
    This comparison allows us to observe how these two income groups have
    evolved relative to each other over the past four decades, revealing more
    subtle dynamics in inequality trends across countries.
  </p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>
  <p class="text-medium">
    The data and analysis presented here are based on the work of more than 100
    researchers over four years, located on all continents, contributing to the
    World Inequality Database (WID.world), maintained by the World Inequality
    Lab. This vast network collaborates with statistical institutions, tax
    authorities, universities and international organizations, to harmonize,
    analyze and disseminate comparable international inequality data. This
    allows to present systematic data on inequality at the global level and to
    analyze how it has evolved over time. Global income inequality has always
    been very great, reflecting the persistence of a world economic system that
    is extremely hierarchical both between countries and within them.
  </p>
</section>

<style>
  
  section {
    max-width: 60rem;
    margin: 50px auto;
  }

  section.wide {
    max-width: 100rem;
  }
</style>
