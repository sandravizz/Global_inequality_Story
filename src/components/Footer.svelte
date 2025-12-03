<script>
  import { Github } from "lucide-svelte";
</script>

<section>
  <h3 class="footer-title">EDA</h3>
  <p class="footer-text">
    The story above includes a selection of highlighted countries and region. In
    this <a
      target="_blank"
      href="https://observablehq.com/@sandraviz/global-inequality?collection=@sandraviz/global-inequality"
      >data notebook</a
    >
    someone finds the complete EDA, meaning the visual analysis of all countries
    and region reading the Gini coefficient and in this
    <a
      target="_blank"
      href="https://observablehq.com/@sandraviz/global-inequality?collection=@sandraviz/global-inequality"
      >one</a
    > reading the different incomes share.
  </p>
    <p class="footer-text">
  </p>


  <h3 class="footer-title">Github repositories</h3>
  <p class="footer-text">
    This project went through several stages, from defining a visual language
    and creating the image-based introduction to cleaning and preparing the
    data, and finally developing the story. The entire code is publicly
    available in the corresponding GitHub repositories.
  </p>
  <p
    class="footer-text"
    style="display: flex; align-items: center; gap: 0.5em;"
  >
    <Github size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://github.com/sandravizz/Global-Inequality-Intro"
      style="display: flex; align-items: center; gap: 0.5em;"
    >
      Intro
    </a>
    <Github size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://github.com/sandravizz/Global-Inequality-Data"
      style="display: flex; align-items: center; gap: 0.5em;"
    >
      Data
    </a>
    <Github size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://github.com/sandravizz/Global_inequality_Story"
      style="display: flex; align-items: center; gap: 0.5em;"
    >
      Story
    </a>
  </p>
    <p class="footer-text">
  </p>

  <h3 class="footer-title">Data source</h3>
  <p class="footer-text">
    Income data was sourced from the <a
      target="_blank"
      href="https://wid.world/wid-world/">World Inequality Database</a
    >
    (WID). It aims to provide open and convenient access to the most extensive available
    database on the historical evolution of the world distribution of income and
    wealth, both within countries and between countries.
    <a
      target="_blank"
      href="https://wid.world/document/why-is-europe-more-equal-than-the-united-states-world-inequality-lab-wp-2020-19/"
      >Pretax income</a
    >
    as the basis for this project corresponds to income after the operation of social
    insurance systems, but before other types of redistribution. The WID combines
    different data sources: national accounts, survey data, fiscal data, and wealth
    rankings to harmonize, analyze and disseminate comparable international inequality
    data.
  </p>
</section>

<style>
  section {
    max-width: 35rem;
    padding: 24px 16px;
    margin: 0 auto;
  }

  section.wide {
    max-width: 35rem;
  }
</style>
