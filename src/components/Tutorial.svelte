<script>
	import { metatags } from "@sveltech/routify";
	import Social from "../components/Social.svelte"
	export let title, summary
	$: metatags.title = title
	$: metatags.author = "Timo Anttila <moro@tuspe.com>"
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<div id="article" class="container mxa pb" itemscope itemtype="http://schema.org/NewsArticle">
	<div id="head" class="tc blog mxa">
		<h1 itemprop="headline">{title}</h1>
		<p id="summary" class="mxa" itemprop="description">{summary}</p>
	</div>
	<div id="body" class="mxa" itemprop="articleBody">
		<slot/>
	</div>
</div>
<footer><Social/></footer>