<script>
	import { metatags } from '@roxi/routify';
	import Dark from '../components/Darkmode.svelte';
	import Card from '../components/Card.svelte';
	import { mode, lang } from '../components/store';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	export let title, summary, card, language;
	lang.set(language);
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<Dark />

<div id="profile" class="article container mx pad">
	<Card item={card} mod={subMod} />

	<div
		id="now"
		class={subMod}
		itemscope
		itemtype="http://schema.org/Blog"
	>
		<article itemscope itemtype="http://schema.org/blogPost">
			<div id="content" class="mx">
				<h2 class="title tc pt" itemprop="headline">{title}</h2>
				<div class="pad" itemprop="articleBody"><slot /></div>
			</div>
		</article>
	</div>
</div>
