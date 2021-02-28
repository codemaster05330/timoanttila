<script>
	import { components, url, layout, metatags } from '@roxi/routify';
	import Card from '../../../components/Card.svelte';
	import Posts from '../../../components/Postlist.svelte';
	import { mode } from '../../../components/store';
	import { CardInfo } from '../../_data';
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	$: info = CardInfo.politics.fi;

	const entriesFolder = $components.find(
		(node) => node.path === '/fi/politiikka'
	);

	const entries = entriesFolder.children
		.filter((node) => node.meta['frontmatter'])
		.sort((a, b) =>
			b.meta['frontmatter'].published.localeCompare(
				a.meta['frontmatter'].published
			)
		);
	let title = 'Poliittiset mielipiteet';
	let summary =
		"A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn.";
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
