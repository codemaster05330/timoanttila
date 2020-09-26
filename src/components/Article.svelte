<script>
	import { metatags } from "@sveltech/routify";
	import { onMount } from "svelte";
	export let title, summary, img, pub, published, langLink
	$: metatags.title = title
	$: metatags.author = "Timo Anttila <moro@tuspe.com>"
	$: metatags.description = summary
	$: metatags.image = img
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
	$: metatags["twitter:image"] = img
</script>

<div id="article" class="container mxa pb" itemscope itemtype="http://schema.org/NewsArticle">
	<div id="head" class="tc mxa blog">
		<h1 itemprop="headline">{title}</h1>
		<p id="summary" class="mxa" itemprop="description">{summary}</p>
		<p id="published" itemprop="datePublished" content={published}>{pub[1]} {pub[0]}, {pub[2]}</p>
	</div>
	<div id="body" class="mxa" itemprop="articleBody">
		<slot/>
	</div>
</div>

{#if langLink}<a id="lang" class="toggle grid abs tw up cell" href={langLink[1]}>{langLink[0]}</a>{/if}