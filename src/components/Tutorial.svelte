<script>
	import { metatags } from "@sveltech/routify";
	export let title, summary
	$: metatags.title = title
	$: metatags.author = "Timo Anttila <moro@tuspe.com>"
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<article itemscope itemtype="http://schema.org/NewsArticle">

	<div id="about" class="bgw pad">
		<div class="container content mxa tc noUnd">
			<h1 id="title" itemprop="headline">{title}</h1>
			<p class="summary mxa" itemprop="description">{summary}</p>
			<p id="more"><a class="btn inl up" href="/tutorials" hreflang="en">Tutorials</a></p>
		</div>
	</div>
			
	<div id="content" class="bgb pad" itemprop="articleBody"><div class="container mxa"><slot/></div></div>

</article>

<svelte:head>
	<style>
		#about .container {	max-width: 650px }
		#content .container { max-width: 800px }
		pre {
			padding: 1rem;
			margin: 15px 0;
			border-left: 6px solid #bb86fc;
			margin-left: -6px;
			width: calc(100% + 6px);
			overflow: hidden;
			border-radius: 10px
		}
		p code {
			padding: 0 5px;
			border-radius: 5px
		}
		pre,
		p code { background-color: var(--violet) }
		.up { text-transform: uppercase }
		h2 + p { margin-top: 15px }
		p + h2 { margin-top: 20px }
		h1 { font-size: clamp(2em, 2.6em, 10vw) }
		h2 {
			font-size: clamp(1.4em, 1.8em, 10vw);
			font-weight: 700
		}
	</style>
</svelte:head>
