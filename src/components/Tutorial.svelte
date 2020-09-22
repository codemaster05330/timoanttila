<script>
	import { metatags } from "@sveltech/routify";
	export let title, summary, pub, published
	$: metatags.title = title
	$: metatags.author = "Timo Anttila <moro@tuspe.com>"
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<div id="article" itemscope itemtype="http://schema.org/NewsArticle">
	<div id="head" class="tc mxa blog">
		<h1 itemprop="headline">{title}</h1>
		<p id="summary" class="mxa" itemprop="description">{summary}</p>
		<p id="published" itemprop="datePublished" content={published}>{pub}</p>
	</div>
	<div id="body" class="mxa" itemprop="articleBody">
		<slot/>
	</div>
</div>