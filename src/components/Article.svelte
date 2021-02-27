<script>
	import { metatags } from '@roxi/routify';
	import Card from '../components/Card.svelte';
	import { mode, lang } from '../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	export let title, summary, language;
	lang.set(language);
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
	let item = 'moromoro';
</script>

<article class="mx mb" itemscope itemtype="http://schema.org/blogPost">
	<div id="header" class="tc mx">
		<h2 class="title tc mx m0" itemprop="headline">{title}</h2>
		{#if summary}<p>{summary}</p>{/if}
	</div>
	<div itemprop="articleBody">
		<slot />
	</div>
</article>

<Card {item} mod={subMod} />
