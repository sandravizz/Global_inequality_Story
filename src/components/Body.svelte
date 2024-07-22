<script>
	import Scroller from "./story/ScrollyEngine.svelte";
	import storyscript from "./story/storyscript.js";
	import differencescript from "./story/differencescript.js";
</script>

<section style="margin-top: 16px">
	<p>
		Income inequality is one of the most persistent global issues we face today.
		Across the world, income distribution varies widely from country to country,
		and the impact of this inequality is significant. When wealth becomes
		concentrated in the hands of a few, it can lead to economic instability,
		recession, and depression. This occurs because too much national income is
		diverted from the broader economy and accumulates among a small group of
		people.
	</p>
	<p>
		Moreover, rising inequality empowers affluent countries, global
		corporations, and even wealthy individuals to shape global rules and
		resource allocation in their favor. With greater bargaining power, they are
		able to secure a larger share of global economic growth, reinforcing their
		position and further tilting international agreements and policies to their
		advantage. This dynamic perpetuates global inequality, as noted by
		philosopher Thomas Pogge in 2007.
	</p>
	<p>
		Ultimately, studying income inequality provides insight into the political
		economy of modern capitalism and sheds light on the direction in which our
		world is headed. Understanding these trends is crucial for policymakers and
		citizens alike as we work toward a more equitable future.
	</p>

	<h2>Gini coefficient</h2>
	<p>
		The Gini coefficient is a measure of inequality used to quantify how evenly
		income or wealth is distributed within a society.
	</p>
	<p>
		Named after the Italian statistician Corrado Gini, it is a number between 0
		and 1, where a Gini coefficient of 0 means perfect equality, everyone has
		the same income or wealth, and a Gini coefficient of 1 indicates perfect
		inequality, one person has all the income or wealth, while everyone else has
		none.
	</p>
	<p>
		The Gini coefficient is calculated by comparing the expected income gap
		between any two randomly selected people to twice the mean income.
	</p>
	<p>
		While the Gini coefficient is widely used to measure income inequality, it
		has limitations. It doesn't show the specific causes of inequality or
		account for the distribution's structure, and it may not capture extreme
		wealth concentration.
	</p>
</section>

<Scroller storyscript={differencescript} layout="wide" />

<section>
	<h2>The Global Debate on Finance Capitalism</h2>
	<p>
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

<Scroller {storyscript} layout="wide" />

<section>
	<h2>The Global Debate on Finance Capitalism</h2>
	<p>
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
	<h2>The Global Debate on Finance Capitalism</h2>
	<p>
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

<style>
	section {
		max-width: 50rem;
		padding: 16px;
		margin: 0 auto;
	}

	h1 {
		line-height: 1.1;
	}
</style>
