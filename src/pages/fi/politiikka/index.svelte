<script>
	import { components, url, layout, metatags } from '@roxi/routify';

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

<section id="posts" class="noUnd" itemscope itemtype="http://schema.org/Blog">
	<h1 class="title violet">{title}</h1>
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
						<h2 class="violet">{meta.frontmatter.title}</h2>
						<p class="summary">{meta.frontmatter.summary}</p>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>

<style type="text/scss">
	#posts {
		article {
			padding: 1.5rem;
			border: 1px solid var(--violet);
			& + article {
				margin-top: 1rem;
			}
			h2 {
				color: var(--dark);
			}
			p {
				color: #444;
			}
		}
		h2,
		p {
			margin: 0;
		}
	}
</style>
