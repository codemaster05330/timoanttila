<template>
	<Home
		title="Timo Anttila | Kaikki alkaa unelmasta!"
		body="Itseoppinut intohimoinen verkkokehittäjä, joka rakastaa luomista tyhjästä, ongelmien ratkaisemista ja verkkosivustojen kehittämistä nopeammiksi ja paremmiksi. Vietän suurimman osan päivästäni näytön edessä koodaten metallin ja rokin soidessa taustalla, mutta en kuitenkaan unohda päivittäistä kuntoilua ja metsälenkkejä koiran kanssa. Toimin myös aktiivisesti erilaisissa vapaaehtoistöissä. Mottoni on 'vain tyhmä on huolissaan siitä, mitä hän ei voi hallita'."
		description="TTimo Anttila on itseoppinut intohimoinen verkkokehittäjä, joka rakastaa luomista, ongelmien ratkaisemista ja verkkosivustojen kehittämistä nopeammiksi ja paremmiksi."
		lang="fi"
		:text="[
			'Itseoppinut verkkovelho',
			'Nuorisotyön vapaaehtoinen',
			'Yrittäjä ja sijoittaja',
			'Luonnon ja eläinten ystävä',
		]"
	/>
</template>

<script>
	import Home from "@/components/home";
	export default {
		components: {
			Home,
		},
		name: "HomeFI",
	};
</script>