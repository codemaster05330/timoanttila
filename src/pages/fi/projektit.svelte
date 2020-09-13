<script>
	import { projects } from "../_data"
	let lang = "fi"
</script>

<style>
	#projects {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
	}
	figcaption {
		padding: 1.5rem;
		background-color: #fff
	}
	#projects a { box-shadow: 5px 5px 10px 0 rgba(0 0 0 / 20%) }
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