<script>
	import { Front, Skills } from "../pages/_data.js"
	export let lang
</script>

{#each Front as item,i}
	<section id={item.id} class="about noUnd">
		<div class="container grid mxa">
			<picture class="img">
				<source srcset={"/images/"+ item.img[0] +".webp"} type="media/webp">
				<source srcset={"/images/"+ item.img[0] +"."+ item.img[1]} type={"media/"+ item.img[1]}>
				<img src={"/images/"+ item.img[0] +"."+ item.img[1]} alt={item[lang].title}>
			</picture>
			<div class="content">
				<div class="grid">
					{#if i == 0}<h1>{item[lang].title}</h1>{:else}<h2>{item[lang].title}</h2>{/if}
					<p>{item[lang].body}</p>
					<p><a class="btn" href={item[lang].link.url} title={item[lang].link.title}>
						{#if lang == "fi"}Lue lisää{:else}Read more{/if} &rarr;
					</a></p>
				</div>
			</div>
		</div>
	</section>
{/each}
<section id="skills">
	<div class="container mxa grid tc">
		{#each Skills as item}
			<div class="skill bgw mxa">
				<div class="what">
					<h2 class="green">{item.title}</h2>
					<p>{item[lang]}</p>
				</div>
				<div class="tech">
					<p class="green">{item.title} Tools:</p>
					<ul class="block">
					{#each item.tools as item}
						<li>{item}</li>
					{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<svelte:head>
	<style>
		h1,
		.about h2 {
			font-size: clamp(2rem, 2.8rem, 10vw);
			margin-bottom: 20px;
			line-height: 1.1;
			font-weight: 400
		}
		section:nth-child(even),
		#hello:not(.dark) section:nth-child(even) a { color:var(--wt) }
		section:not(#skills) .container { max-width: 1100px }
		section.about:nth-child(even){ direction: rtl }
		section.about:nth-child(even) .content { direction: ltr }
		section:nth-child(even){ background-color: var(--blue) }
		#hello:not(.dark) section:nth-child(odd),
		#skills .skill { background-color: #fff }
		#hello:not(.dark) section:nth-child(odd) h1,
		#hello:not(.dark) section:nth-child(odd) h2,
		#hello:not(.dark) section:nth-child(odd) a { color: var(--blue) }
		#hello:not(.dark) section:nth-child(even) a { border-color: var(--wt) }
		#hello:not(.dark) section:nth-child(odd) a:not(:hover) { border-color: var(--blue) }
		#skills .skill {
			padding: 1.5rem;
			border-radius: 5%
		}
		#skills .what {
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
			border-bottom: 1px solid #bbb;
		}
		#skills h2 {
			font-size: clamp(1.6rem, 2.4rem, 10vw);
			font-weight: 700
		}
		#skills .what p { font-size: 15px }
		@media screen and (min-width:1000px){
			section.about {
				min-height: 370px;
				padding: 3rem 0
			}
			section .img { display: grid }
		}
		@media screen and (min-width:680.1px){
			#skills .container {
				grid-template-columns: 1fr 1fr;
				grid-gap: 2rem;
				max-width: 800px
			}
		}
		@media screen and (max-width:680px){
			#skills .skill + .skill { margin-top: 1.5rem }
			#skills .skill { max-width: 384px }
		}
		@media screen and (min-height:680px) and (min-width:1000px){
			section.about { height: 44vh }
		}
	</style>
</svelte:head>
