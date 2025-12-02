<script>
  import Scroller from "./story/Scroller.svelte";
  import multilinescript from "./story/multilinescript.js";
  import differencescript from "./story/differencescript.js";
  import {
    Heart,
    HeartCrack,
    EqualNot,
    Angry,
    HandCoins,
    Earth,
    EyeOff,
    ArrowDownUp,
    Smile,
    Frown,
  } from "lucide-svelte";
</script>

<section>
  <p class="text-body">
    <Heart size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
      >Today humanity produces more goods and services
    </a>
    than ever before in history, enough to feed and sustain the entire world.
  </p>
  <p class="text-body">
    <HeartCrack size="1.2em" color="#1CB0BA" display="block" />
    Yet millions still live and die in poverty.
  </p>

  <p class="text-body">
    <EqualNot size="1.2em" color="#1CB0BA" display="block" />
    If such abundance coexists with such deprivation, the problem isn't production,
    but the way its benefits are distributed. Global inequality remains deeply entrenched,
    reflecting a world economy that is profoundly hierarchical.
  </p>
  <p class="text-body">
    <Angry size="1.2em" color="#1CB0BA" display="block" />
    As frustration and anger grow in many societies seen in the rise of extremist
    and authoritarian movements in the political west, one might ask could this be
    fueled by the rise of inequality?
  </p>
  <p class="text-body">
    <HandCoins size="1.2em" color="#1CB0BA" display="block" />
    Now, inequality between whom? Who is rich and who is poor, and how big is the
    gap between the two? In this project, we take a deep look at global inequality
    from different perspectives. Inequality here refers to economic inequality, meaning
    differences in
    <a target="_blank" href="https://wid.world/codes-dictionary/"
      >income distribution.
    </a>
  </p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
  <p class="text-body">
    <Earth size="1.2em" color="#1CB0BA" display="block" />
    As the charts presented so far illustrate, economic inequality is strongly influenced
    by geographical context, which in turn is shaped by local politics and economic
    regulations, or the lack thereof.
  </p>

  <video controls width="100%">
    <source src="assets/videos/rich_poor_players.mp4" type="video/mp4" />
  </video>

  <p class="text-body">
    <EyeOff size="1.2em" color="#1CB0BA" display="block" />
    The Gini coefficient can obscure important details. For instance, two countries with the same value might
    differ significantly in whether inequality is driven by concetration
    at the top or at the bottom.
  </p>

  <p class="text-body">
    <ArrowDownUp size="1.2em" color="#1CB0BA" display="block" />
    To gain a more nuanced understanding, the following charts compare the share
    of national income held by the richest 10% vs. the poorest 50% in order to observe how these two income groups have evolved relative
    to each other and hence offer a more subtle dynamics in inequality
    trends across countries.
  </p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>

  <p class="text-body">
   <Smile size="1.2em" color="#1CB0BA" display="block" />
    As Thomas Piketty pointed out, sometimes ironiclly looking at history is what can give us hope looking to a future.
  </p>
   <p class="text-body">
  </p>
    <video controls poster="assets/videos/after_ww2.jpg" width="100%">
    <source src="assets/videos/after_ww2.mp4" type="video/mp4" />
  </video><span class="text-extra-small"> Source:  <a
      target="_blank"
      href="https://www.imdb.com/title/tt5723056/"
      >Capital in the 21st Century (2019) by Justin Pemberton
    </a></span>
</section>

<style>
  section {
    max-width: 42rem;
    padding: 2em 1.5em;
    margin: 0 auto;
  }

  .text-body {
    font-family: "Montserrat Alternates Regular", sans-serif;
    color: #e5e6ed;
    font-size: 1.1em;
    line-height: 1.6em;
    hyphens: auto;
    text-align: left;
    word-spacing: normal;
    letter-spacing: 0;
    margin-top: 1.3em;
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
