<script>
	import { components, url, layout, metatags } from '@roxi/routify';
	import { mode } from '../../../components/store.js';

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

	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
</script>

<section
	id="posts"
	class={'noUnd ' + subMod}
	itemscope
	itemtype="http://schema.org/Blog"
>
	<h1 class="title">{title}</h1>
	<div id="postList">
		{#each entries as { meta, path }}
			<article
				itemprop="blogPosts"
				itemscope
				itemtype="http://schema.org/BlogPosting"
			>
				<a
					class="article grid"
					href={$url(path)}
					title={meta.frontmatter.title}
				>
					<div class="content">
						<h2>{meta.frontmatter.title}</h2>
						<p class="summary">{meta.frontmatter.summary}</p>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
