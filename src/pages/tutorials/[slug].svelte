<script>
	import { metatags } from '@sveltech/routify'
	import * as tuts from "./tutorials.json"
	let seg = window.location.pathname.split("/").pop()
	seg = seg.split("-").join("");
	let data = tuts.default[seg]
	let sum = "A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn."
	let img = "https://timoanttila.com/images/tutorials-1366.jpg"
	metatags.title = data.title
	metatags.description = data.desc
	metatags.image = img
	metatags.url = window.location
	metatags.canonical = window.location
	metatags["article:published_time"] = data.pub2
	metatags["article:author"] = "https://timoanttila.com"
	metatags.type = "article"
	metatags["twitter:card"] = "summary_large_image"
	metatags["twitter:description"] = sum
	metatags["twitter:image"] = img
</script>

<article>
	<div id="hero" class="obj tc sub">
		<picture>
		<source srcset="/images/tutorials-640.webp" media="(max-width:640px)" type="image/webp">
		<source srcset="/images/tutorials-1366.webp" media="(max-width:1366px)" type="image/webp">
		<source srcset="/images/tutorials-2048.webp" media="(min-width:1367px)" type="image/webp">
		<source srcset="/images/tutorials-640.jpg" media="(max-width:640px)" type="image/jpeg">
		<source srcset="/images/tutorials-1366.jpg" media="(max-width:1366px)" type="image/jpeg">
		<source srcset="/images/tutorials-2048.jpg" media="(min-width:1367px)" type="image/jpeg">
		<img src="/images/tutorials-1366.jpg" alt="Tutorial written by Timo Anttila">
		</picture>
		<div id="caption" class="cell tc bold dark">
			<div id="heroInner">
				<h1>{data.title}</h1>
				<div id="desc">{data.desc}</div>
			</div>
		</div>
	</div>
	<div class="container">{@html data.body}</div>
</article>