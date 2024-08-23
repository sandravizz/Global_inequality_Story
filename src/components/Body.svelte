<script>
	import Scroller from "./story/ScrollyEngine.svelte";
	import multilinescript from "./story/multilinescript.js";
	import differencescript from "./story/differencescript.js";

	let collapsed = true;
</script>

<section style="margin-top: 16px">
	<p class="article">
		<a
			target="_blank"
			href="https://www.statista.com/statistics/268750/global-gross-domestic-product-gdp/"
			>World production
		</a> is so high as it has never been before. Humanity itself has reached a level
		of efficiency which could feed the world. Then why are so many people still living
		and dying in poverty?
	</p>

	<p class="article">
		On the other hand in more and more countries facisim is again! on the rise.
		Extreme inquality leads to frustration, fear and anger. These are
		observations and questions that motivated us to create this project on
		global income inquality.
	</p>

	<p class="article">
		In recent years, globalization and growing inequality have met a strong
		backlash in many places, manifested by the rise of autocrats, xenophobia,
		and social instability. The turbulence has fundamentally transformed
		politics. The major divide is no longer between capitalism versus socialism
		or right versus left, but between those who see globalization as an
		opportunity and those who see it as an existential threat. Surveying the
		scene, Donald Trump offered a pithy prognosis to the United Nations General
		Assembly: “The future does not belong to globalists. The future belongs to
		patriots.” Making a nation great again may not address the key issues, but
		his forecast still points to the uneasy position that countries occupy
		within a globally connected world. Nation- states remain fundamental to
		capitalist-driven globalization. They delimit and preserve the opportunities
		that companies and individuals profit from, whether by exploiting cost
		differentials or trading on comparative advantages. More crucially, they
		furnish the legal backing and regulations that markets require to operate—a
		(the goldan passprt)
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
	<h3>Capital in the 21 Century</h3>
	<p class="article">
		Treat labor as a cost not an asset. - Wall street vs main street. - What we
		see over time and it is fundamental to understand why ineqaulity is worsen
		is that the share that is made in the whole economy is going less and less
		to the workers the wage-share and more and more to those that own capital.
		That is essentially about power. - You're a millionair in waiting, just
		focusing on run up the hill. More unequal means more social immobility. -
		People have the moeny to make sure they stay at the top. - The economoy is
		more and more productive but the gains of it are going into the hands of a
		very small number of people. - its not about people, who are rich, but the
		experience of being relativly better of than someone seems to affect
		everyone or would affect everyone in the same way. We translate experience
		and perceptions of being better of than other materially to being better
		than others. The mind makes that translation it seems.
		https://www.youtube.com/watch?v=Pg5QFOuMoN8 Together, these studies suggest
		that past exposure to income inequality may be linked to lower well-being in
		adulthood due to financial contingency of self-worth.
		https://www.tandfonline.com/doi/abs/10.1080/15298868.2020.1796777 Dr. Piff's
		manuscript, “Shifting Attributions for Poverty Motivates Opposition to
		Inequality and Enhances Egalitarianism,” was published in Nature Human
		Behavior and won the 2020 Dean's Award for Inclusionary Excellence. Drawing
		on a total sample of 34,442 individuals, he finds that attributing poverty
		to situational forces is associated with greater concern about inequality,
		preference for egalitarian policies and inequality-reducing behavior. One of
		the studies demonstrates that a 10-minute poverty simulation can increase
		compassion for the poor and equality-enhancing values up to five months
		later.
	</p>
	<h3>The Global Debate on Finance Capitalism</h3>
	<p class="article">
		There has been a wave of neoliberal policies implemented worldwide beginning
		in the 1970s. Policies like deregulation, privatisation and the withdrawing
		of the state from social protection and welfare delivery became a common
		trend across different countries. Probably for the first time in economic
		history in the USA, the share of the national income of the top 1% fell from
		the 16% of pre-World War II rate, to less than 8% in the post-war era and
		stayed at the same level for almost three decades. However, by the beginning
		of the 1970s a combination of slowing economic growth, the breakdown of the
		Bretton Woods system of fixed exchange rates, stagflation and high
		unemployment put severe strains on state budgets. Keynesian compromise
		appeared to have reached its limits and other alternatives to overcome the
		emerging crisis were called on. For its proponents, the moment of
		neoliberalism had arrived. The Austro-German Marxist theoretician was the
		first to introduce the term finance capitalism and warned of the dangers
		associated with concentration of capital and the transformation of
		competitive capitalism into monopolistic finance capitalism, thus
		anticipating the process of contemporary financialisation. In the latter, he
		writes of financialisation as a prolonged split between the divergent real
		and financial economies.
	</p>
</section>

<section>
	<div class:collapsed>
		<h5>Methodology</h5>

		<p class="footer">
			Income data was sourced from the <a
				target="_blank"
				href="https://wid.world/wid-world/">World Inequality Database</a
			> (WID). It aims to provide open and convenient access to the most extensive
			available database on the historical evolution of the world distribution of
			income and wealth, both within countries and between countries. The WID combines
			different data sources: national accounts, survey data, fiscal data, and wealth
			rankings.
		</p>

		<p class="footer">
			<a
				target="_blank"
				href="https://wid.world/document/why-is-europe-more-equal-than-the-united-states-world-inequality-lab-wp-2020-19/"
				>Pretax income</a
			> corresponds to income after the operation of social insurance systems, but
			before other types of redistribution. It is equal to factor income, plus pension
			benefits (17% of national income on average) and unemployment and disability
			benefits (1.7%), minus the social contributions that pay for them. Contributions
			and transfers are generally observed in survey data and can therefore be directly
			removed from or added to individual factor incomes.
		</p>

		{#if collapsed}
			<div class="fade" />
		{/if}
	</div>

	{#if collapsed}
		<div
			class="expand"
			role="button"
			tabindex="0"
			on:click={() => (collapsed = false)}
		>
			Read more
		</div>
	{/if}
</section>

<!-- <p class="article">
		Income inequality is one of the most persistent global issues we face today.
		Across the world, income distribution varies widely from country to country,
		and the impact of this inequality is significant. When wealth becomes
		concentrated in the hands of a few, it can lead to economic instability,
		recession, and depression. This occurs because too much national income is
		diverted from the broader economy and accumulates among a small group of
		people.
	</p> -->

<!-- <p class="article">
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
	</p> -->

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
		margin: 0 0 10px;
		line-height: 2;
		font-size: 0.75vw;
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
		margin-bottom: 4px;
		font-size: 0.75vw;
		font-family: "Montserrat Alternates2", sans-serif;
		opacity: 1;
		hyphens: auto;
		opacity: 0.9;
		text-align: justify;
	}

	.collapsed {
		max-height: calc(0.75vw * 8);
		overflow: hidden;
		position: relative;
	}

	.fade {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 50%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			var(--color-background)
		);
		background-size: cover;
		background-position: center;
	}

	.expand {
		text-align: center;
		cursor: pointer;
		font-size: 0.75vw;
		margin-top: 16px;
	}

	a {
		color: #d5f2f2;
	}

	:root {
		--brunswick-green: #184b39ff;
		--dark-green: #13270bff;
		--cornflower-blue: #748ffeff;
		--pakistan-green: #203f21ff;
		--cerulean: #307fa3ff;
		--jordy-blue: #99b9f8ff;
		--caribbean-current: #1f6e7dff;
		--cornflower-blue: #7190feff;
		--caribbean-current: #226566ff;
		--brunswick-green: #224e3bff;
		--chefchaouen-blue: #4c8ffeff;
		--dark-green: #142605ff;
		--night: #081604ff;
		--cerulean: #247285ff;
		--pakistan-green: #113c1eff;
		--hot-pink: #fe5dbaff;
		--rose-pink: #e95bbaff;
		--lavender-pink: #f9acdbff;
		--dark-green: #022121ff;
		--sky-magenta: #c35bacff;
		--black: #020909ff;
		--hot-pink-2: #ff6db7ff;
		--persian-pink: #fc7ec2ff;
		--charcoal: #213d4fff;
		--english-violet: #4a496aff;
	}
</style>
