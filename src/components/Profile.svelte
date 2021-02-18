<script>
	import { metatags } from '@roxi/routify';
	import { lang } from './lang.js';
	export let title, summary, desc, img, language;
	lang.set(language);
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<article itemscope itemtype="http://schema.org/NewsArticle">
	<div id="about" class="bgw pad featured">
		<div class="container grid mxa">
			<picture class="img">
				<source srcset={'/images/' + img + '.webp'} type="media/webp" />
				<source
					srcset={'/images/' + img + '.jpg'}
					type={'media/jpeg'}
				/>
				<img src={'/images/' + img + '.jpg'} alt={title} />
			</picture>
			<div class="content">
				<div class="grid">
					<h1 itemprop="headline">{title}</h1>
					<p class="summary" itemprop="description">{desc}</p>
				</div>
			</div>
		</div>
	</div>

	<div id="content" class="bgb pad" itemprop="articleBody">
		<div class="container mxa"><slot /></div>
	</div>
</article>

<svelte:head>
	<style>
		h2 {
			font-size: clamp(1.4em, 1.6em, 10vw);
			font-weight: 700;
		}
		p + h2,
		ul + h2 {
			margin-top: 25px;
		}
		h2 + p,
		h2 + ul {
			margin-top: 15px;
		}
		.container {
			max-width: 900px;
		}
		#content ul {
			margin-left: 18px;
		}
		@media screen and (max-width: 1000px) {
			#about .content {
				max-width: 500px;
				margin: 0 auto;
				text-align: center;
			}
		}
	</style>
</svelte:head>
