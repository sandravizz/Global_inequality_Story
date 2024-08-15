<script>
	import Scroller from "./story/ScrollyEngine.svelte";
	import multilinescript from "./story/multilinescript.js";
	import differencescript from "./story/differencescript.js";
</script>

<section style="margin-top: 16px">
	<p class="article">
		World production is so high as it has never been before. Humanity itself has
		reached a level of efficiency which would provide enough to feed the world.
		Then why are so many people living and dying in poverty? These are the
		observations and questions that motivated us to create this project on
		global economic inquality.
	</p>

	<p class="article">
		Income inequality is one of the most persistent global issues we face today.
		Across the world, income distribution varies widely from country to country,
		and the impact of this inequality is significant. When wealth becomes
		concentrated in the hands of a few, it can lead to economic instability,
		recession, and depression. This occurs because too much national income is
		diverted from the broader economy and accumulates among a small group of
		people.
	</p>

	<p class="article">
		Moreover, rising inequality empowers affluent countries, global
		corporations, and even wealthy individuals to shape global rules and
		resource allocation in their favor. With greater bargaining power, they are
		able to secure a larger share of global economic growth, reinforcing their
		position and further tilting international agreements and policies to their
		advantage. This dynamic perpetuates global inequality, as noted by
		philosopher Thomas Pogge in 2007.
	</p>
	<p class="article">
		Ultimately, studying income inequality provides insight into the political
		economy of modern capitalism and sheds light on the direction in which our
		world is headed. Understanding these trends is crucial for policymakers and
		citizens alike as we work toward a more equitable future.
	</p>
</section>

<Scroller storyscript={multilinescript} layout="wide" />

<section>
	<h3>Gini coefficient</h3>
	<p class="article">
		The Gini coefficient is a measure of inequality used to quantify how evenly
		income or wealth is distributed within a society. Named after the Italian
		statistician Corrado Gini, it is a number between 0 and 1, where a Gini
		coefficient of 0 means perfect equality, everyone has the same income or
		wealth, and a Gini coefficient of 1 indicates perfect inequality, one person
		has all the income or wealth, while everyone else has none.
	</p>
	<p class="article">
		The Gini coefficient is calculated by comparing the expected income gap
		between any two randomly selected people to twice the mean income. While the
		Gini coefficient is widely used to measure income inequality, it has
		limitations. It doesn't show the specific causes of inequality or account
		for the distribution's structure, and it may not capture extreme wealth
		concentration.
	</p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>
	<p class="article">
		From the documantry - Treat labor as a cost not an asset. - Wall street vs
		main street. - What we see over time and it is fundamental to understand why
		ineqaulity is worsen is that the share that is made in the whole economy is
		going less and less to the workers the wage-share and more and more to those
		that own capital. That is essentially about power. youre a millionair in
		waiting, just focusing on run up the hill. More uniqual more social
		unmobility. People have the moeny to make sure they stay at the top. The
		economoy is more and more productive but the gains of it are going into the
		hands of very small number of people.
	</p>
	<h3>The Global Debate on Finance Capitalism</h3>
	<p class="article">
		There has been a wave of neoliberal policies implemented worldwide beginning
		in the 1970s. Policies like deregulation, privatisation and the withdrawing
		of the state from social protection and welfare delivery became a common
		trend across different countries. Probably for the first time in economic
		history in the USA, the share of the national income of the top 1% fell from
		the 16% of pre-World War II rate, to less than 8% in the post-war era and
		stayed at the same level for almost three decades (Harvey, 2005). However,
		by the beginning of the 1970s a combination of slowing economic growth, the
		breakdown of the Bretton Woods system of fixed exchange rates, ‘stagflation’
		and high unemployment put severe strains on state budgets. ‘Keynesian
		compromise’ appeared to have reached its limits and other alternatives to
		overcome the emerging crisis were called on. For its proponents, the moment
		of neoliberalism had arrived. The Austro-German Marxist theoretician was the
		first to introduce the term ‘finance capitalism’ and warned of the dangers
		associated with concentration of capital and the transformation of
		competitive capitalism into monopolistic finance capi- talism, thus
		anticipating the process of contemporary financialisation. In the latter, he
		writes of financialisation as ‘a prolonged split between the divergent real
		and financial economies’
	</p>
</section>

<section>
	<h5>Data source</h5>

	<p class="footer">
		Income data was sourced from the <a
			target="_blank"
			href="http://freecodecamp.org">World Inequality Database</a
		> (WID). It aims to provide open and convenient access to the most extensive
		available database on the historical evolution of the world distribution of income
		and wealth, both within countries and between countries. The WID combines different
		data sources: national accounts, survey data, fiscal data, and wealth rankings.
	</p>
</section>

<style>
	section {
		max-width: 50rem;
		padding: 16px;
		margin: 0 auto;
	}

	h1 {
		line-height: 1.1;
		font-size: 3vw;
		font-family: "Montserrat Alternates3", sans-serif;
	}

	h2 {
		line-height: 1.1;
		font-size: 1.5vw;
		font-family: "Montserrat Alternates2", sans-serif;
	}

	h3 {
		line-height: 1.1;
		font-size: 1.2vw;
		font-family: "Montserrat Alternates2", sans-serif;
	}

	h5 {
		line-height: 2;
		font-size: 0.8vw;
		font-family: "Montserrat Alternates3", sans-serif;
		margin: 0;
	}

	.article {
		font-size: 1vw;
		font-family: "Montserrat Alternates2", sans-serif;
		hyphens: auto;
		opacity: 0.9;
		text-align: justify;
	}

	.footer {
		margin: 0;
		font-size: 0.8vw;
		font-family: "Montserrat Alternates2", sans-serif;
		opacity: 1;
	}

	a {
		color: #d5f2f2;
	}

	/* CSS HEX */
	/* --cornflower-blue: #7190FEff;
--caribbean-current: #226566ff;
--brunswick-green: #224E3Bff;
--chefchaouen-blue: #4C8FFEff;
--brunswick-green-2: #1E574Dff;
--dark-green: #142605ff;
--night: #081604ff;
--cerulean: #247285ff;
--pakistan-green: #113C1Eff;
--dark-green-2: #112A16ff; */

	/* CSS HEX
--hot-pink: #FE5DBAff;
--rose-pink: #E95BBAff;
--lavender-pink: #F9ACDBff;
--dark-green: #022121ff;
--sky-magenta: #C35BACff;
--black: #020909ff;
--hot-pink-2: #FF6DB7ff;
--persian-pink: #FC7EC2ff;
--charcoal: #213D4Fff;
--english-violet: #4A496Aff; */
</style>
