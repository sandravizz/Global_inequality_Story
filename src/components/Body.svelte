<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
</script>

<section>
  <p class="text-medium">   
  <a target="_blank" href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
   >Humanity now produces more than ever before </a> enough to feed and sustain the entire planet. 
    Yet millions still live and die in poverty. 
  </p>
  <p class="text-medium">      
    If such abundance coexists with such deprivation, the problem cannot be production itself,
    but the way its benefits are shared a way that is far from equal.
 </p>
 <p class="text-medium">
   Global inequality remains deeply entrenched, 
   reflecting a world economy that is profoundly hierarchical.  
   As frustration and anger grow in many societies  
   seen in the rise of extremist and authoritarian movements 
   one might ask - could this be fueled by such extreme inequality?
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
  
</style>
