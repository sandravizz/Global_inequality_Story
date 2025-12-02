<script>
  import { Github } from "lucide-svelte";
</script>

<section>
  <h3 class="footer-title">Data source</h3>

  <p class="footer-text">
    The data and analysis presented here are based on the work of more than 100
    researchers over four years, located on all continents, contributing to the
    World Inequality Database (WID.world), maintained by the World Inequality
    Lab. This vast network collaborates with statistical institutions, tax
    authorities, universities and international organizations, to harmonize,
    analyze and disseminate comparable international inequality data. 
  </p>

  <h3 class="footer-title">Methodology</h3>

  <p class="footer-text">
    Income data was sourced from the <a
      target="_blank"
      href="https://wid.world/wid-world/">World Inequality Database</a
    > (WID). It aims to provide open and convenient access to the most extensive
    available database on the historical evolution of the world distribution of income
    and wealth, both within countries and between countries. The WID combines different
    data sources: national accounts, survey data, fiscal data, and wealth rankings.

    <a
      target="_blank"
      href="https://wid.world/document/why-is-europe-more-equal-than-the-united-states-world-inequality-lab-wp-2020-19/"
      >Pretax income</a
    >
    corresponds to income after the operation of social insurance systems, but before
    other types of redistribution.
    <a
      target="_blank"
      href="https://observablehq.com/@sandraviz/global-inequality?collection=@sandraviz/global-inequality"
      >All data notebook</a
    > includes all charts. The story above includes a selection of highlighted countries
    and region. In this notebook someone finds the complete EDA, meaning the visual
    analysis of all countries and region. It was the pre-work this storyline.
  </p>

   <h3 class="footer-title">Github repositories</h3>
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
    This project went through different stages, from defining a visual language and the image based introdcution to the data cleaning and preparation and finally to the story. The whole code is publically avialable in the corresponding github repositories.  
  </p>
     <p class="footer-text">

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
