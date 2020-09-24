<script>
	import { metatags } from "@sveltech/routify";
	import { projects } from "./_data.js"
	let lang = "en"
	let title = "Projects"
	let summary = "I write code every day and some of it ends up being open source. On this page I present projects that I've done or I've actively developing."
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<div id="head" class="tc mxa list pt">
	<h1>{title}</h1>
	<div class="summary mxa">{summary}</div>
</div>

<div id="projects" class="container mxa pb">
	<ul id="posts" class="tc three grid block">
	{#each projects as item}
		<li>
			<a class="article trf grid" href={item.url} target="_blank" rel="noopener">
				<div class="content">
					<h2>{item[lang].title}</h2>
					<p class="summary">{item[lang].body}</p>
					<p class="tech">{item.tech}</p>
				</div>
			</a>
		</li>
	{/each}
	</ul>
</div>

<a id="lang" class="toggle grid abs tw up cell" href="/fi/projektit" hreflang="fi" title="Projektit, joissa olen aktiivisesti mukana">fi</a>
