<script>
	import { metatags } from '@sveltech/routify'
	import { gallery } from "./_data.js"
	let title = "Featured photos"
	let desc = "Photographing all kinds of beautiful things. Always loved photography and trying to learn new ways to create great shots."
	let img = "https://timoanttila.com/images/gallery/2019-deli-yawns.jpg"
	metatags.title = title +" | Timo Anttila"
	metatags.description = desc
	metatags.image = img
	metatags.url = "https://timoanttila.com/gallery"
	metatags.canonical = "https://timoanttila.com/gallery"
	metatags["twitter:card"] = "summary_large_image"
	metatags["twitter:description"] = desc
	metatags["twitter:image"] = img
</script>

<div id="head" class="tc mxa list pt">
	<h1>{title}</h1>
	<p class="summary mxa">{desc}</p>
	<p id="more"><a class="btn inl up" href="https://www.instagram.com/_timoanttila/" target="_blank" rel="noopener me"  hreflang="en">Instagram</a></p>
</div>

<ul id="gallery" class="container mxa grid block pb">
{#each gallery as item}
	<li>
		<a class="pic trf" href={item.url} title={item.title +' - '+ item.camera} rel="me noopener" target="_blank" hreflang="en">
			<picture>
				<source srcset={"/images/gallery/"+ item.name +".webp"} type="image/webp">
				<source srcset={"/images/gallery/"+ item.name +".jpg"} type="image/jpeg">
				<img src={"/images/gallery/"+ item.name +".jpg"} alt={item.title} width="400" height="400">
			</picture>
		</a>
	</li>
{/each}
</ul>

<a id="lang" class="toggle grid abs tw up cell" href="/fi/galleria" hreflang="fi">fi</a>
