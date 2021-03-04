<script>
	import { components, url, layout, metatags } from '@roxi/routify';
	import Card from '../../components/Card.svelte';
	import Posts from '../../components/Postlist.svelte';
	import { mode } from '../../components/store';
	import { CardInfo } from '../_data';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	$: info = CardInfo.politics.en;

	const entriesFolder = $components.find((node) => node.path === '/politics');

	const entries = entriesFolder.children
		.filter((node) => node.meta['frontmatter'])
		.sort((a, b) =>
			b.meta['frontmatter'].published.localeCompare(
				a.meta['frontmatter'].published
			)
		);
	let title = 'Politics';
	let summary = '';
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<div id="politics" class="article mx">
	{#if info}
		<Card item={info} mod={subMod} />
	{/if}
	<h2 class="title tc pad">{title}</h2>
	<Posts posts={entries} />
</div>
