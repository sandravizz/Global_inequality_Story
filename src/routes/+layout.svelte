<script>
  import "$styles/fonts.css";
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
</script>

<Header />
<main id="content"><slot /></main>
<Footer />


