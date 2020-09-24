<script>
	import Social from "../../components/Social.svelte"
	import { url, layout, metatags } from "@sveltech/routify";
	import marked from "marked";
	const posts = $layout.parent.children[2].children
		.filter((c) => c.meta["frontmatter"])
		.sort((a, b) => b.meta["frontmatter"].published.localeCompare(a.meta["frontmatter"].published));
	let title = "Tutorials"
	let summary = "A collection of tutorials about things I've learned or discovered. Most of the tutorials are easy to read and to learn."
	$: metatags.title = title
	$: metatags.description = summary
	$: metatags["twitter:title"] = title
	$: metatags["twitter:description"] = summary
</script>

<style>
#hello {
	display: grid;
	width: 100%;
	height: 100vh;
	min-height: 620px;
	align-content: center;
	justify-content: center;
	background-position: fixed;
	background-size: cover
}
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0 0 0 / 40%);
	z-index:1
}
#itsMe {
	position: relative;
	z-index: 100;
	max-width: 480px;
	width: 80%
}
#itsMe picture,
#itsMe img {
	width: 200px;
	height: 200px
}
#itsMe img {
	border-radius: 50%;
	border: 5px solid rgba(255 255 255 / 80%)
}
#itsMe picture { margin-bottom: 1.5rem }
#itsMe h1 {
	font-size: clamp(2.2rem,2.6rem,10vw);
	margin-bottom: 10px
}
#itsMe p { font-size: 1.2rem }
#newest h2.title {
	font-size: clamp(2.4rem, 3.2rem, 12vw)
}
@media screen and (max-width:450px){
	#hello { background-image: url("/images/railway-360.jpg") }
}
@media screen and (min-width:450px) and (max-width:768px){
	#hello { background-image: url("/images/railway-768.jpg") }
}
@media screen and (max-width:750px){
	#itsMe { padding-top: 3rem }
}
@media screen and (min-width:768px) and (max-width:1440px){
	#hello { background-image: url("/images/railway-1440.jpg") }
}
@media screen and (min-width:1440px){
	#hello { background-image: url("/images/railway-2048.jpg") }
}
</style>

<div id="hello" class="tc obj">
	<div class="overlay"></div>
	<div id="itsMe" class="mxa">
		<picture id="pic" class="mxa">
			<source srcset="/images/timo.webp" type="image/webp">
			<source srcset="/images/timo.jpg" type="image/jpeg">
			<img src="/images/timo.jpg" alt="Timo Anttila">
		</picture>
		<h1>Timo Anttila</h1>
		<p>Verkkosivustoja ja verkkokauppoja työkseen loihtivat nörtti Nokialta. Valokuvaus ja tekniikka intohimona.</p>
	</div>
</div>

<div id="newest" class="container mxa pt pb tc">

	<h2 class="title">Uusimmat artikkelit</h2>
	<ul id="posts" class="three grid block pt">
	{#each posts as {meta, path}}
		<li>
			<a class="article trf grid" href={$url(path)} title={meta.frontmatter.title}>
				<div class="content">
					<h2>{meta.frontmatter.title}</h2>
					<p class="summary">{meta.frontmatter.summary}</p>
					<p class="published">{meta.frontmatter.pub}</p>
				</div>
			</a>
		</li>
	{/each}
	</ul>

</div>

<a id="lang" class="toggle grid abs tw up cell" href="/" hreflang="en" title="Timo Anttila">en</a>

<Social/>