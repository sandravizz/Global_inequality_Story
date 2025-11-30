<script>
  import { Github } from "lucide-svelte";
</script>

<section>
  <h3 class="text-extra-small">Data source</h3>

  <p class="text-extra-small">
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

  <h3 class="text-extra-small">Methodology</h3>

  <p class="text-extra-small">
    Income data was sourced from the <a
      target="_blank"
      href="https://wid.world/wid-world/">World Inequality Database</a
    > (WID). It aims to provide open and convenient access to the most extensive
    available database on the historical evolution of the world distribution of income
    and wealth, both within countries and between countries. The WID combines different
    data sources: national accounts, survey data, fiscal data, and wealth rankings.
  </p>

  <p class="text-extra-small">
    <a
      target="_blank"
      href="https://wid.world/document/why-is-europe-more-equal-than-the-united-states-world-inequality-lab-wp-2020-19/"
      >Pretax income</a
    >
    corresponds to income after the operation of social insurance systems, but before
    other types of redistribution.
    <a
      target="_blank"
      href="https://observablehq.com/@sandraviz/global-inequality"
      >All data notebook</a
    > includes all charts. The story above includes a selection of highlighted countries
    and region. In this notebook someone finds the complete EDA, meaning the visual
    analysis of all countries and region. It was the pre-work this storyline.
  </p>

  <p
    class="text-extra-small"
    style="display: flex; align-items: center; gap: 0.5em;"
  >
    <Github size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://github.com/sandraviz/global-inequality"
      style="display: flex; align-items: center; gap: 0.5em;"
    >
      This is our repository on GitHub.
    </a>
  </p>

    <p
    class="text-extra-small"
    style="display: flex; align-items: center; gap: 0.5em;"
  >
    <Github size="1.2em" color="#1CB0BA" display="block" />
    <a
      target="_blank"
      href="https://github.com/sandraviz/global-inequality"
      style="display: flex; align-items: center; gap: 0.5em;"
    >
      This is our repository on GitHub.
    </a>
  </p>

  <p
  class="text-extra-small"
  style="display: flex; align-items: center; gap: 0.5em;"
>
  <Github size="1.2em" color="#1CB0BA" display="block" />
  <a
    target="_blank"
    href="https://github.com/sandraviz/global-inequality"
    style="display: flex; align-items: center; gap: 0.5em;"
  >
    This is our repository on GitHub.
  </a>
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
