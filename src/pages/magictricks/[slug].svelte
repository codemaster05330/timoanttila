<script>
	import { params, metatags } from '@sveltech/routify'
	import { tricks } from "./_data"
	$: data = tricks[$params.slug]
	$: metatags.title = data.title +" | Timo Anttila";
	$: metatags.description = data.desc;
	$: metatags["twitter:title"] = data.title;
	$: metatags["twitter:description"] = data.desc;
</script>

{#if data}

<style>
	#double {
		max-width: 1250px;
		margin: 3rem auto;
		display: grid;
		grid-template-columns: 1fr 1fr
	}
	#video {
		position: relative;
		padding-bottom: 56.25%;
		max-width: 100%;
		margin-bottom: 20px
	}
	#video iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none
	}
	#info {
		display: grid;
		place-content: center;
		text-align: left
	}
	#info h1 {
		font-size: 2.4rem;
		margin-bottom: 1.5rem
	}
	p + p { margin-top: 15px }
	#info .content {
		padding: 2rem;
		max-width: 600px
	}
</style>

<div id="double">

	<div id="video">
		<iframe src={"https://www.youtube-nocookie.com/embed/"+ data.video +"?start=376&rel0"} title={"YouTube: "+ data.title}></iframe>
	</div>

	<div id="info">
		<div class="content">
			<h1>{data.title}</h1>
			<p>{data.desc}</p>
			<p>Publisher: {data.publisher}</p>
			<p>Tags:
				{#each data.tags as item, i}
					{#if i > 0}, {/if}
					{item}
				{/each}
			</p>
		</div>
	</div>

</div>

{/if}