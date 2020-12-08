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

	<section id="about" class="bgw">
		<div class="container content mxa tc noUnd">
			<h1 itemprop="headline">{title}</h1>
			<p class="summary mxa" itemprop="description">{summary}</p>
			<p id="more"><a class="btn inl up" href="/tutorials" hreflang="en">Tutorials</a></p>
		</div>
	</section>
			
	<section id="content" class="bgb" itemprop="articleBody"><div class="container mxa"><slot/></div></section>

</article>

<svelte:head>
	<style>
		h1 {
			font-size: clamp(2rem, 2.8rem, 10vw);
			margin-bottom: 20px;
			line-height: 1.1;
			font-weight: 400
		}
		#about .summary {
			font-size: 1.4rem;
			line-height: 1.3
		}
		#about .container {	max-width: 650px }
		#content .container { max-width: 800px }
		pre {
			padding: 1rem;
			margin: 15px 0;
			border-left: 6px solid #bb86fc;
			margin-left: -6px;
			width: calc(100% + 6px);
			overflow: hidden
		}
		pre,
		p code { background-color: #27242c }
		.up { text-transform: uppercase }
	</style>
</svelte:head>
