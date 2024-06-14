<script>
	import { Html, LayerCake, ScaledSvg } from "layercake";
	import { group } from "d3";
	import MultiLine from "../../components/chartcomponents/MultiLine.svg.svelte";
	import AxisX from "./(components)/AxisX.html.svelte";
	import Label from "./(components)/Label.svelte";
	import data from "$data/gini_income.csv";

	const formattedData = data.map((d) => ({ ...d, value: +d.value }));
	const groupedByCountry = group(formattedData, (d) => d.country).entries();
	const groupedData = Array.from(groupedByCountry, ([key, value]) => ({
		country: key,
		values: value.map((item) => ({ ...item }))
	}));

	const countries = ["SE", "DE"];
	const highlightData = groupedData.filter((d) =>
		countries.includes(d.country)
	);
	let viewHeight = 100;
</script>

<div class="chartcontainer" style="height: {viewHeight}vh;">
	<LayerCake
		x="year"
		y="value"
		z="country"
		flatData={data}
		data={groupedData}
		yDomain={[1, 0]}
	>
		<ScaledSvg>
			<MultiLine stroke={"#fff"} strokeOpacity={0.3} strokeWidth={0.5} />
			<MultiLine
				{highlightData}
				stroke={"#fff"}
				strokeOpacity={1}
				strokeWidth={2}
			/>
		</ScaledSvg>

		<Html>
			<div class="leftfade" />
		</Html>

		<Html>
			<Label xValue="2010" zValue="SE" dy={-50} text="Sweden" />
			<Label xValue="2007" zValue="DE" dy={10} text="Germany" />
		</Html>

		<Html>
			<div class="axisLabel" style="top: 10px;">Full equality</div>
			<!-- <div class="axisLabel" style="bottom: 8px;">Full inequality</div> -->
			<AxisX />
		</Html>
	</LayerCake>
</div>

<style>
	.leftfade {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		width: 5%;
		background-image: linear-gradient(
			90deg,
			var(--color-background),
			rgba(40, 40, 40, 0)
		);
	}

	.axisLabel {
		position: absolute;
		left: 10px;
		opacity: 0.8;
	}
</style>
