<script>
	import { projects } from "./_data"
	let lang = "en"
</script>

<style>
	#projects {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
	}
	figcaption { padding: 1.5rem }
	#projects a {
		background-color: #fff;
		box-shadow: 5px 5px 15px 5px rgba(0 0 0 / 10%)
	}
	#projects figure {
		display: grid;
		grid-template-rows: 225px 1fr
	}
</style>

<div id="projects">
{#each projects as item}
	<a href={item.url} target="_blank" rel="noopener">
		<figure>
			<picture>
				<source srcset={"/images/projects/"+ item.img +".webp"} type="image/webp">
				<source srcset={"/images/projects/"+ item.img +".jpg"} type="image/jpeg">
				<img src={"/images/dekstop-"+ item.img +".jpg"} alt={item[lang].title}>
			</picture>
			<figcaption>
				<h2 class="up">{item[lang].title}</h2>
				<p>{item[lang].body}</p>
			</figcaption>
		</figure>
	</a>
{/each}
</div>