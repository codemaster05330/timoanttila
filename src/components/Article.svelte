<script>
	import { metatags } from '@roxi/routify';
	import Card from '../components/Card.svelte';
	import { CardInfo } from '../pages/_data.js';
	import { mode } from '../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	export let title, summary, image;
	let img = '/images/articles/' + image;
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags.image = img;
</script>

<article class="mb" itemscope itemtype="http://schema.org/blogPost">
	<div id="header" class="tc rel white">
		<div id="caption" class="abs grid cell">
			<div class="content">
				<h2 class="title m0" itemprop="headline">{title}</h2>
				{#if summary}<p>{summary}</p>{/if}
			</div>
		</div>
		<picture class="w100 h100">
			<img class="h100" src={img} alt={title} />
		</picture>
	</div>
	<div id="content" class="container mx" itemprop="articleBody">
		<slot />
	</div>
</article>

<Card item={CardInfo.politics.fi} mod={subMod} />
