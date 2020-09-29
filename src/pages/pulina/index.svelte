<script>
	import { url, layout, metatags } from "@sveltech/routify";
	import marked from "marked";
	const posts = $layout.parent.children
		.filter((c) => c.meta["frontmatter"])
		.sort((a, b) => b.meta["frontmatter"].published.localeCompare(a.meta["frontmatter"].published));
		console.log(posts[0].meta.frontmatter)
	let title = "Pohdiskelua elämästä"
	let summary = "Satunnaisia artikkeleita ajankohtaisista aiheista."
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<div class="py">

	<div id="head" class="tc mxa list">
		<h1>{title}</h1>
		<div class="summary mxa">{summary}</div>
	</div>

	<ul id="posts" class="container mxa three grid block pb">
	{#each posts as {meta, path}}
		<li>
			<div class="content grid">
				<aside class="grid tc">
					<div class="pub bor">
						<div class="cell">
							<div class="day">{meta.frontmatter.pub[0]}</div>
							<div class="month">{meta.frontmatter.pub[1]}</div>
						</div>
					</div>
					<div class="comments bgd bor">
						<a class="cell" href={"https://twitter.com/_timoanttila/status/"+ meta.frontmatter.tweet} target="_blank" rel="noopener">
							<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"/></svg>
						</a>
					</div>
				</aside>
				<a class="article grid" href={$url(path)} title={meta.frontmatter.title}>
					<div class="content">
						<h2 class="up">{meta.frontmatter.title}</h2>
						<p class="summary">{meta.frontmatter.summary}</p>
					</div>
				</a>
			</div>
		</li>
	{/each}
	</ul>

</div>