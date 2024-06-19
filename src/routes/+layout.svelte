<script>
	import "@fontsource/lato";
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<Header />
<main id="content"><slot /></main>
<Footer />

<style>
	:global(html) {
		font-family: "Lato", sans-serif;
	}
</style>
