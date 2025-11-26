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
      >Today humanity produces more goods and services than ever before in history; <br>
    </a> enough to feed and sustain the entire world. <br> Yet millions still live and
    die in poverty.
  </p>
  <p class="text-medium">
    If such abundance coexists with such deprivation, the problem isn't
    production, <br> but the way its benefits are distributed <br> a way that is far
    from equal.
  </p>
  <p class="text-medium">
    Global inequality remains deeply entrenched, reflecting a world economy that
    is profoundly hierarchical. <br> As frustration and anger grow in many societies 
    seen in the rise of extremist and authoritarian movements in the political west;<br>
    one might ask could this be fueled by such extreme inequality?
  </p>
    <p class="text-medium">
    Now, inequality between whom? Who is rich and who is poor and how big is the gab between the two. 
    In this project we take a deep look at global inequality from different prespective. 
    Inequality refer to economic inequality, to be preceive differences in income distribution. 
    And we start, with look a countries. 
  </p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
  <p class="text-medium">
    As the charts presented so far illustrate, economic inequality is strongly
    influenced by geographical context, which in turn is shaped by local
    politics and economic regulations, or the lack thereof.
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
  <p class="text-medium"></p>
</section>

<style>
  section {
    max-width: 50rem;
    padding: 20px 12px;
    margin: 0 auto;
  }
</style>
