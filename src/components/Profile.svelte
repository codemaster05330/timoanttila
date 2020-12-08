<script>
	import { metatags } from "@sveltech/routify";
	import { lang } from "./lang.js"
	export let title, summary, desc, img, language
	lang.set(language)
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<article itemscope itemtype="http://schema.org/NewsArticle">
	<section id="about" class="bgw">
		<div class="container grid mxa">
			<picture class="img">
				<source srcset={"/images/"+ img +".webp"} type="media/webp">
				<source srcset={"/images/"+ img +".jpg"} type={"media/jpeg"}>
				<img src={"/images/"+ img +".jpg"} alt={title}>
			</picture>
			<div class="content">
				<div class="grid">
					<h1 itemprop="headline">{title}</h1>
					<p itemprop="description">{desc}</p>
				</div>
			</div>
		</div>
	</section>

	<section id="content" class="bgb" itemprop="articleBody"><div class="container mxa"><slot/></div></section>

</article>

<svelte:head>
	<style>
		h1 {
			font-size: clamp(2rem, 3.4rem, 10vw);
			margin-bottom: 20px;
			line-height: 1.1;
			font-weight: 400
		}
		h2 { font-size: 1.6rem }
		p + h2,
		ul + h2 { margin-top: 25px }
		h2 + p,
		h2 + ul { margin-top: 15px }
		.container { max-width: 900px }
		section a {
			color: var(--link)
		}
		section ul { margin-left: 18px }
		@media screen and (max-width:1000px){
			#about .content {
				max-width: 500px;
				margin: 0 auto;
				text-align: center
			}
		}
	</style>
</svelte:head>
