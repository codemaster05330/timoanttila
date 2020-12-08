<script>
	import { gallery } from "../pages/_data.js"
	export let title
	export let desc
</script>

<section id="about" class="bgw noUnd">
	<div class="container content mxa tc">
		<h1>{title}</h1>
		<p class="summary mxa">{desc}</p>
		<p id="more"><a class="btn inl up" href="https://www.instagram.com/_timoanttila/" target="_blank" rel="noopener me"  hreflang="en">Instagram</a></p>
	</div>
</section>

<div id="content" class="bgb">
	<ul id="gallery" class="container mxa grid block">
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
</div>

<svelte:head>
	<style>
		h1 {
			font-size: clamp(2em, 3em, 10vw);
			margin-bottom: 20px;
			line-height: 1.1;
			font-weight: 400
		}
		.summary {
			font-size: 1.2em;
			line-height: 1.4
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover
		}
		#about .container {
			max-width: 650px
		}
		#gallery.container {
			padding: 3rem 0;
			max-width: 1250px
		}
		.pic,
		.pic picture,
		.pic img {
			width: 100%;
			height: 100%
		}
		.up { text-transform: uppercase }
		@media screen and (min-width:740px){
			#gallery {
				grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
				grid-gap: 1.5rem
			}
		}
		@media screen and (max-width:740px) and (min-width:400px){
			#gallery {
				grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
				grid-gap: 1.5rem
			}
		}
		@media screen and (max-width:400px){
			#gallery .pic + .pic { margin-top: 1.5rem }
		}
	</style>
</svelte:head>
