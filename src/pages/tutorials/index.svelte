<script>
	import { metatags } from '@sveltech/routify'
	import * as tuts from "./tutorials.json"
	let url = "https://timoanttila.com/tutorials"
	let img = "https://timoanttila.com/images/tutorials-1366.jpg"
	let data = Object.values(tuts.default)
	let sum = "A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn."
	metatags.title = "Tutorials and How-to articles"
	metatags.description = sum
	metatags.image = img
	metatags.url = url
	metatags.canonical = url
	metatags["twitter:card"] = "summary_large_image"
	metatags["twitter:description"] = sum
	metatags["twitter:image"] = img
</script>

<div id="homeTutorials">
	<div id="hero" class="obj tc sub">
		<picture>
			<source srcset="/images/tutorials-640.webp" media="(max-width:640px)" type="image/webp">
			<source srcset="/images/tutorials-1366.webp" media="(max-width:1366px)" type="image/webp">
			<source srcset="/images/tutorials-2048.webp" media="(min-width:1367px)" type="image/webp">
			<source srcset="/images/tutorials-640.jpg" media="(max-width:640px)" type="image/jpeg">
			<source srcset="/images/tutorials-1366.jpg" media="(max-width:1366px)" type="image/jpeg">
			<source srcset="/images/tutorials-2048.jpg" media="(min-width:1367px)" type="image/jpeg">
			<img src="/images/tutorials-1366.jpg" alt="Tutorials and how-to articles written by Timo Anttila">
		</picture>
		<div id="caption" class="cell tc bold dark">
			<div id="heroInner">
				<h1>Tutorials</h1>
				<div id="desc">{sum}</div>
			</div>
		</div>
	</div>

	<div id="tutorials" class="container">
		<div class="grid">
			{#each data as item}
			<a class="article" href={"/tutorials/"+ item.url}><div class="published">{item.pub1}</div><h2>{item.title}</h2><p>{item.desc}</p></a>
			{/each}
		</div>
	</div>
</div>