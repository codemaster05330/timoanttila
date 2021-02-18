<script>
	import { metatags } from '@roxi/routify';
	import Gallery from '../components/Gallery.svelte';
	let title = 'Featured photos';
	let desc =
		'Photographing all kinds of beautiful things. Always loved photography and trying to learn new ways to create great shots.';
	let img = 'https://timoanttila.com/images/gallery/2019-deli-yawns.jpg';
	metatags.title = title + ' | Timo Anttila';
	metatags.description = desc;
	metatags.image = img;
	metatags.url = 'https://timoanttila.com/gallery';
	metatags.canonical = 'https://timoanttila.com/gallery';
	metatags['twitter:card'] = 'summary_large_image';
	metatags['twitter:description'] = desc;
	metatags['twitter:image'] = img;
</script>

<Gallery {title} {desc} />
