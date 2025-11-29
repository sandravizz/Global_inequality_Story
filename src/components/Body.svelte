<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
  import { Heart, HeartCrack, EqualNot, Angry, HandCoins } from "lucide-svelte";
</script>

<section>
  <p class="text-body">
    <Heart size="1em" color="#1CB0BA" /> <br />
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >Today humanity produces more goods and services than ever before in
      history,
    </a>
    enough to feed and sustain the entire world.
  </p>
  <p class="text-body">
    <HeartCrack size="1.2em" color="#1CB0BA" /> <br />
    Yet millions still live and die in poverty.
  </p>

  <p class="text-body">
    <EqualNot size="1.2em" color="#1CB0BA" /> <br />
    If such abundance coexists with such deprivation, the problem isn't production,
    but the way its benefits are distributed a way that is far from equal. Global
    inequality remains deeply entrenched, reflecting a world economy that is profoundly
    hierarchical.
  </p>
  <p class="text-body">
    <Angry size="1.2em" color="#1CB0BA" /> <br />
    As frustration and anger grow in many societies seen in the rise of extremist
    and authoritarian movements in the political west: one might ask could this be
    fueled by such extreme inequality?
  </p>
  <p class="text-body">
    <HandCoins size="1.2em" color="#1CB0BA" /> <br />
    Now, inequality between whom? Who is rich and who is poor and how big is the
    gab between the two? In this project we take a deep look at global inequality
    from different prespectives. Inequality refers to economic inequality, to be
    preceive differences in income distribution. And we start, with looking at countries.
  </p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
  <p class="text-body">
    As the charts presented so far illustrate, economic inequality is strongly
    influenced by geographical context, which in turn is shaped by local
    politics and economic regulations, or the lack thereof.
  </p>
  <p class="text-body">
    The previous visualizations focused on the Gini coefficient, a single
    numerical indicator that provides an overall summary of inequality within a
    country. While the Gini coefficient is useful for understanding the general
    level of inequality, it can obscure important details. For instance, two
    countries with the same Gini value might differ significantly in whether
    inequality is driven by extreme income concetration at the top or lacking a
    miminum share at the bottom.
  </p>
  <p class="text-body">
    To gain a more nuanced understanding, the following charts compare the share
    of national income held by the richest 10% with that of the poorest 50%.
    This comparison allows us to observe how these two income groups have
    evolved relative to each other over the past four decades, revealing more
    subtle dynamics in inequality trends across countries.
  </p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>
  <p class="text-body">
    We end this data story with a quote form Branko Milanovic, which describes
    very well a reality often not taken into account. "It is an illusion to
    believe that what is good for the world must be good for everyone." If we
    want a world, which is currently very inequal, to become more equal, some people will
    loose in status and financial standing.
  </p>
</section>

<style>
  section {
    max-width: 42rem; /* a bit narrower for easier reading */
    padding: 2em 1.5em;
    margin: 0 auto;
  }

  .text-body {
    font-family: "Montserrat Alternates Regular", sans-serif;
    color: #e5e6ed;
    font-size: 1.1em;
    line-height: 1.6;
    hyphens: auto;
    text-align: left;
    word-spacing: normal;
    letter-spacing: 0;
  }

  .icon-line {
    display: inline-block;
    margin-right: 0.5em;
    transform: translateY(0.05em); /* subtle vertical alignment */
  }

  /*--------------------------------------*/
  /* Screen stylings */
  /*--------------------------------------*/

  /* Tablet landscape / Small laptop (< 1024px) */
  @media screen and (max-width: 1024px) {
  }

  /* Tablet (< 768px) */
  @media screen and (max-width: 768px) {
    section {
      padding: 1.5em 1.25em;
      max-width: 100%;
    }

    .text-body {
      font-size: 1em;
      line-height: 1.6;
    }
  }

  /* Mobile (< 480px) */
  @media screen and (max-width: 480px) {
    section {
      padding: 1.25em 1em;
    }
    .text-body {
      font-size: 0.9em;
    }
  }

  /* Mobile (< 260px) */
  @media screen and (max-width: 260px) {
  }
</style>
