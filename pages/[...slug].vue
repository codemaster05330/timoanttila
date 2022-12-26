<script setup>
const {path} = useRoute()
const {data: article} = await useAsyncData(path, () => queryContent(path).findOne())
</script>

<template>
	<article
		v-if="article && article.title"
		id="content"
		class="font-montserrat font-light max-w-screen-lg mx-auto text-content"
		itemscope
		itemtype="http://schema.org/BlogPosting"
	>
		<ArticleHead :article="article" />
		<ContentRenderer :value="article" />
	</article>
</template>
