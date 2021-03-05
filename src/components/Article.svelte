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

<article class="mb mt" itemscope itemtype="http://schema.org/blogPost">
	<div id="content" class="mx" itemprop="articleBody">
		<h1 class="title" itemprop="headline">{title}</h1>
		<slot />
	</div>
</article>

<Card item={CardInfo.politics.fi} mod={subMod} />
