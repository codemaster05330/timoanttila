<script>
	import { components, url, layout, metatags } from '@roxi/routify';

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

	console.log(entries);

	const posts = $layout.children
		.filter((c) => c.meta['frontmatter'])
		.sort((a, b) =>
			b.meta['frontmatter'].published.localeCompare(
				a.meta['frontmatter'].published
			)
		);
	let title = 'Tutorials';
	let summary =
		"A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn.";
	$: metatags.title = title;
	$: metatags.description = summary;
	$: metatags['twitter:title'] = title;
	$: metatags['twitter:description'] = summary;
</script>

<section id="about" class="bg3 pad noUnd">
	<div class="container content mx tc">
		<h1 class="title">{title}</h1>
		<p class="summary mx">{summary}</p>
	</div>
</section>

<div id="content" class="bg2 pad">
	<ul id="tutorials" class="container mx grid block noUnd">
		{#each posts as { meta, path }}
			<li class="mx">
				<div class="content grid">
					<aside class="grid tc">
						<div class="pub bor">
							<div class="grid cell">
								<div class="day">{meta.frontmatter.pub[0]}</div>
								<div class="month">
									{meta.frontmatter.pub[1]}
								</div>
							</div>
						</div>
					</aside>
					<a
						class="article grid"
						href={$url(path)}
						title={meta.frontmatter.title}
					>
						<div class="content">
							<h2 class="m0">{meta.frontmatter.title}</h2>
							<p class="summary">{meta.frontmatter.summary}</p>
						</div>
					</a>
				</div>
			</li>
		{/each}
	</ul>
</div>
