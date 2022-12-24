<script setup>
const {path} = useRoute()
const {data: article} = await useAsyncData(path, () => queryContent(path).findOne())
</script>

<template>
	<article
		v-if="article && article.title"
		class="font-montserrat font-light max-w-screen-lg mx-auto px-4 py-10 text-content"
	>
		<ArticleHead :article="article" />
		<ContentRenderer :value="article" />
	</article>
</template>
