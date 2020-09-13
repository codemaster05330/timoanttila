<script>
	import { tricks } from "./_data"
</script>

<style>
	#magic {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
	}
</style>

{#if tricks}
<div id="magic" class="block">
{#each tricks as item}
	<a href={"https://www.youtube.com/watch?v="+ item.video +"?start=376&rel0"} target="_blank" rel="noopener">
		<figure>
			<img src={"https://img.youtube.com/vi/"+ item.video +"/mqdefault.jpg"} alt={item.title}>
			<figcaption>{item.title}</figcaption>
		</figure>
	</a>
{/each}
</div>
{/if}