<script>
	import { components, url, layout, metatags } from '@roxi/routify';
	import { mode } from '../../components/store';

	const entriesFolder = $components.find(
		(node) => node.path === '/tutorials'
	);
	const entries = entriesFolder.children
		.filter((node) => node.meta['frontmatter'])
		.sort((a, b) =>
			b.meta['frontmatter'].published.localeCompare(
				a.meta['frontmatter'].published
			)
		);

	const posts = $layout.children
		.filter((c) => c.meta['frontmatter'])
		.sort((a, b) =>
			b.meta['frontmatter'].published.localeCompare(
				a.meta['frontmatter'].published
			)
		);
	$: subMod = $mode == 'bg2' ? 'white' : 'blue';
	let title = 'Tutorials';
	let summary =
		"A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn.";
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<section id="about" class="noUnd">
	<div class="container content mx tc">
		<h1 class="title m0">{title}</h1>
		<p class="summary mx">{summary}</p>
	</div>
</section>

<div id="content">
	<ul id="tutorials" class="container mx grid list noUnd">
		{#each posts as { meta, path }}
			<li class="mx block">
				<a
					class="content grid"
					href={$url(path)}
					title={meta.frontmatter.title}
				>
					<aside class="grid tc">
						<div class="pub bor pops bold">
							<div class="grid cell">
								<div class="day">{meta.frontmatter.pub[0]}</div>
								<div class="month">
									{meta.frontmatter.pub[1]}
								</div>
							</div>
						</div>
					</aside>
					<div class="article grid">
						<div class="content">
							<h3 class="m0">{meta.frontmatter.title}</h3>
							<p class="summary">{meta.frontmatter.summary}</p>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
