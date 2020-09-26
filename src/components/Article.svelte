<script>
	import { metatags } from "@sveltech/routify";
	export let title, summary, img, pub, published, langLink
	$: metatags.title = title
	$: metatags.author = "Timo Anttila <moro@tuspe.com>"
	$: metatags.description = summary
	$: metatags.image = img
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
	$: metatags["twitter:image"] = img
</script>

<style>
	#author {
		padding: 1.5rem;
		border: 1px solid rgba(255 255 255 / 20%);
		margin-top: 3rem
	}
	#author h4 {
		font-size: 1.2rem;
		margin-bottom: 10px
	}
	#author img {
		border-radius: 50%
	}
	#author a.btn { font-size: .9rem }
	@media screen and (min-width:650px){
		#author {
			grid-template-columns: 200px 1fr;
			grid-gap: 1.5rem
		}
	}
	@media screen and (max-width:650px){
		#authorImg { margin-bottom: 1.5rem }
	}
</style>

<div id="article" class="container mxa pb" itemscope itemtype="http://schema.org/NewsArticle">
	<div id="head" class="tc mxa blog">
		<h1 itemprop="headline">{title}</h1>
		<p id="summary" class="mxa" itemprop="description">{summary}</p>
		<p id="published" itemprop="datePublished" content={published}>{pub[1]} {pub[0]}, {pub[2]}</p>
	</div>
	<div id="body" class="mxa" itemprop="articleBody">
		<slot/>
	<div id="author" class="grid mxa" itemprop="articleAuthor">
		<div id="authorImg">
			<picture class="cell">
				<source srcset="/images/timo.webp" type="image/webp">
				<source srcset="/images/timo.jpg" type="image/jpeg">
				<img src="/images/timo.jpg" alt="Timo Anttila">
			</picture>
		</div>
		<div id="authorBody">
			<h4 class="up">Timo Anttila</h4>
			<p>Verkkosivustoja ja -kauppoja työkseen tekevä nokialainen duunari / yrittäjä. Ehdottoman oikeita mielipiteitä kommentoimassa siellä missä vähiten odotetaan. Työtä ihmisarvon ja -oikeuksien toteutumisen puolesta sekä yrittämisen edistamiseksi.</p>
			<p><a class="btn inl up" href="/about">Tutustu profiiliin</a></p>
		</div>
	</div>
	</div>
</div>

{#if langLink}<a id="lang" class="toggle grid abs tw up cell" href={langLink[1]}>{langLink[0]}</a>{/if}