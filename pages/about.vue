<script setup>
const {data: article} = await useAsyncData('about', () => queryContent('/about').findOne())
</script>

<template>
	<div id="aboutMe" class="photoSide">
		<MyPic />

		<div v-if="article && article.title">
			<article
				class="block font-montserrat max-w-screen-md text-content z-30"
				itemscope
				itemtype="http://schema.org/Article"
			>
				<ArticleHead :article="article" articleType="Article" :datesActive="false" />
				<ContentRenderer :value="article" />
			</article>
		</div>
	</div>
</template>

<style scoped>
h1:after {
	content: '';
	display: block;
	background-color: #ccc;
	height: 1px;
	margin: 1.5rem auto 1.75rem;
	max-width: 65px;
}
h2#bigText {
	font-size: clamp(2rem, 3.8rem, 10vw);
}
@media screen and (max-width: 1000px) {
	#bigText {
		height: 100px;
	}
}
</style>
