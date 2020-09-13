<script>
	import { metatags } from '@sveltech/routify'
	import { gallery } from "./_data.js"
	let data = Object.values(pics.default)
	let desc = "Photographing all kinds of beautiful. Always loved photography and trying to learn new ways to create great shots."
	let img = "https://timoanttila.com/images/gallery/2019-deli-yawns.jpg"
	metatags.title = "Featured photos | Timo Anttila"
	metatags.description = desc
	metatags.image = img
	metatags.url = "https://timoanttila.com/gallery"
	metatags.canonical = "https://timoanttila.com/gallery"
	metatags["twitter:card"] = "summary_large_image"
	metatags["twitter:description"] = desc
	metatags["twitter:image"] = img
</script>

<div id="gallery" class="container">
	<div id="galGrid">
	{#each data as item}
		<a class="pic" href={item.url} title={item.title +' - '+ item.camera} rel="me noopener" target="_blank" hreflang="en">
			<picture>
				<source srcset={"/images/gallery/"+ item.name +".webp"} type="image/webp">
				<source srcset={"/images/gallery/"+ item.name +".jpg"} type="image/jpeg">
				<img src={"/images/gallery/"+ item.name +".jpg"} alt={item.title} width="400" height="400">
			</picture>
		</a>
	{/each}
	</div>
</div>