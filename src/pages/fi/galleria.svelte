<script>
	import { metatags } from '@sveltech/routify'
	import Gallery from "../../components/Gallery.svelte"
	let title = "Galleria"
	let desc = "Olen aina rakastanut valokuvausta. Kuvaan kaikenlaista kaunista ja mielenkiintoista."
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

<Gallery title={title} desc={desc}/>
