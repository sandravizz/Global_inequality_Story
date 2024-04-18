<script>
	import { getContext } from "svelte";

	// import ImageCarouselle from "./ImageCarouselle.svelte";
	import AdditiveScrolly from "$components/story/Additive.Scrolly.svelte";
	import FlatMap from "$components/story/FlatMap.svelte";
	import AreaChart from "$components/story/AreaChart.svelte";
	import DistributionTimeline from "$components/story/DistributionTimeline.svelte";
	import InequalSwarm from "./InequalSwarm.svelte";
	import HighlightScrolly from "./Highlight.Scrolly.svelte";

	const mapData = getContext("mapData");
	const areaData = getContext("areaData");
	const areaCopy = getContext("areaCopy");
	const giniData = getContext("gini");
	const countryData = getContext("countries");
	const beeswarmScrollyCopy = getContext("beeswarmScrollyCopy");

	const merge = (arr1, arr2, prop) => {
		const mapping = new Map(arr1.map((item) => [item[prop], item]));
		return arr2.map((d) => ({ ...d, ...mapping.get(d[prop]) }));
	};

	const beeswarmData = merge(countryData, giniData, "country").filter(
		(d) => d.year === 2021
	);

	const giniCountryData = merge(countryData, giniData, "country");
</script>

<div
	style="
		top: 0;
		position: absolute; 
		left: 0; 
		right: 0; 
		height: 300px;  
		z-index: -1;"
>
	<!-- <ImageCarouselle /> -->
</div>

<div id="main">
	<section>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Orci porta non
			pulvinar neque laoreet. Tincidunt dui ut ornare lectus sit. Quam nulla
			porttitor massa id neque. Turpis massa sed elementum tempus egestas sed
			sed. Tortor id aliquet lectus proin nibh nisl condimentum. Condimentum id
			venenatis a condimentum. Integer feugiat scelerisque varius morbi enim
			nunc faucibus a pellentesque. Blandit massa enim nec dui nunc mattis enim
			ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum
			varius sit. Orci dapibus ultrices in iaculis nunc sed augue lacus.
		</p>

		<figure style="margin: 2.5rem 0;">
			<FlatMap data={mapData} />
		</figure>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Orci porta non
			pulvinar neque laoreet. Tincidunt dui ut ornare lectus sit. Quam nulla
			porttitor massa id neque. Turpis massa sed elementum tempus egestas sed
			sed. Tortor id aliquet lectus proin nibh nisl condimentum. Condimentum id
			venenatis a condimentum. Integer feugiat scelerisque varius morbi enim
			nunc faucibus a pellentesque. Blandit massa enim nec dui nunc mattis enim
			ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum
			varius sit. Orci dapibus ultrices in iaculis nunc sed augue lacus.
		</p>

		<figure style="margin: 2rem 0;">
			<DistributionTimeline data={giniCountryData} />
			<figcaption
				style="text-align:center; font-size: 0.9em; margin-top: 1rem; font-style: italic;"
			>
				World distribution of XXX score
			</figcaption>
		</figure>

		<p>
			Nulla facilisi cras fermentum odio. Non pulvinar neque laoreet suspendisse
			interdum. A condimentum vitae sapien pellentesque habitant morbi tristique
			senectus et. Justo laoreet sit amet cursus sit amet dictum sit amet. Lorem
			dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis varius
			quam quisque id diam vel quam elementum. Adipiscing elit pellentesque
			habitant morbi tristique senectus. Sit amet nisl suscipit adipiscing
			bibendum. Mauris pharetra et ultrices neque ornare aenean. In fermentum
			posuere urna nec tincidunt praesent. Morbi quis commodo odio aenean sed
			adipiscing diam donec adipiscing.
		</p>

		<figure style="margin: 2rem 0;">
			<!-- <InequalSwarm data={beeswarmData} /> -->
			<figcaption
				style="text-align:center; font-size: 0.9em; margin-top: 1rem; font-style: italic;"
			>
				InequalSwarm
			</figcaption>
		</figure>

		<HighlightScrolly
			component={InequalSwarm}
			data={beeswarmData}
			copy={beeswarmScrollyCopy}
			highligtValues={[null, "Asia", "Europe", "Africa", "Americas", "Oceania"]}
			highlightKey={"region"}
		/>

		<p>
			Nulla facilisi cras fermentum odio. Non pulvinar neque laoreet suspendisse
			interdum. A condimentum vitae sapien pellentesque habitant morbi tristique
			senectus et. Justo laoreet sit amet cursus sit amet dictum sit amet. Lorem
			dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis varius
			quam quisque id diam vel quam elementum. Adipiscing elit pellentesque
			habitant morbi tristique senectus. Sit amet nisl suscipit adipiscing
			bibendum. Mauris pharetra et ultrices neque ornare aenean. In fermentum
			posuere urna nec tincidunt praesent. Morbi quis commodo odio aenean sed
			adipiscing diam donec adipiscing.
		</p>

		<HighlightScrolly
			component={DistributionTimeline}
			data={giniCountryData}
			copy={beeswarmScrollyCopy}
			highligtValues={[null, "Asia", "Europe", "Africa", "Americas", "Oceania"]}
			highlightKey={"region"}
		/>

		<p>
			Nulla facilisi cras fermentum odio. Non pulvinar neque laoreet suspendisse
			interdum. A condimentum vitae sapien pellentesque habitant morbi tristique
			senectus et. Justo laoreet sit amet cursus sit amet dictum sit amet. Lorem
			dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis varius
			quam quisque id diam vel quam elementum. Adipiscing elit pellentesque
			habitant morbi tristique senectus. Sit amet nisl suscipit adipiscing
			bibendum. Mauris pharetra et ultrices neque ornare aenean. In fermentum
			posuere urna nec tincidunt praesent. Morbi quis commodo odio aenean sed
			adipiscing diam donec adipiscing.
		</p>
	</section>

	<AdditiveScrolly component={AreaChart} data={areaData} copy={areaCopy} />

	<section>
		<h2>Header 2</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Orci porta non
			pulvinar neque laoreet. Tincidunt dui ut ornare lectus sit. Quam nulla
			porttitor massa id neque. Turpis massa sed elementum tempus egestas sed
			sed. Tortor id aliquet lectus proin nibh nisl condimentum. Condimentum id
			venenatis a condimentum. Integer feugiat scelerisque varius morbi enim
			nunc faucibus a pellentesque. Blandit massa enim nec dui nunc mattis enim
			ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum
			varius sit. Orci dapibus ultrices in iaculis nunc sed augue lacus.
		</p>

		<p>
			Nulla facilisi cras fermentum odio. Non pulvinar neque laoreet suspendisse
			interdum. A condimentum vitae sapien pellentesque habitant morbi tristique
			senectus et. Justo laoreet sit amet cursus sit amet dictum sit amet. Lorem
			dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis varius
			quam quisque id diam vel quam elementum. Adipiscing elit pellentesque
			habitant morbi tristique senectus. Sit amet nisl suscipit adipiscing
			bibendum. Mauris pharetra et ultrices neque ornare aenean. In fermentum
			posuere urna nec tincidunt praesent. Morbi quis commodo odio aenean sed
			adipiscing diam donec adipiscing.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Orci porta non
			pulvinar neque laoreet. Tincidunt dui ut ornare lectus sit. Quam nulla
			porttitor massa id neque. Turpis massa sed elementum tempus egestas sed
			sed. Tortor id aliquet lectus proin nibh nisl condimentum. Condimentum id
			venenatis a condimentum. Integer feugiat scelerisque varius morbi enim
			nunc faucibus a pellentesque. Blandit massa enim nec dui nunc mattis enim
			ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum
			varius sit. Orci dapibus ultrices in iaculis nunc sed augue lacus.
		</p>
		<p>
			Nulla facilisi cras fermentum odio. Non pulvinar neque laoreet suspendisse
			interdum. A condimentum vitae sapien pellentesque habitant morbi tristique
			senectus et. Justo laoreet sit amet cursus sit amet dictum sit amet. Lorem
			dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis varius
			quam quisque id diam vel quam elementum. Adipiscing elit pellentesque
			habitant morbi tristique senectus. Sit amet nisl suscipit adipiscing
			bibendum. Mauris pharetra et ultrices neque ornare aenean. In fermentum
			posuere urna nec tincidunt praesent. Morbi quis commodo odio aenean sed
			adipiscing diam donec adipiscing.
		</p>
	</section>
</div>

<style>
	#main {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
	}

	:global(#main section) {
		margin: 32px auto;
		padding-top: 32px;
	}

	:global(#main h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}
</style>
