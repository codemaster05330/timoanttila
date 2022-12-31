<script setup>
const {path} = useRoute()
const {data: article} = await useAsyncData(path, () => queryContent(path).findOne())
</script>

<template>
	<article
		v-if="article && article.title"
		id="content"
		class="max-w-screen-lg mx-auto text-content"
		itemscope
		itemtype="http://schema.org/BlogPosting"
	>
		<ArticleHead :article="article" :datesActive="!article.type || article.type !== 'page'" />
		<ContentRenderer :value="article" />
	</article>
</template>
