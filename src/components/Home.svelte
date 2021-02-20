<script>
	import { Front, Skills } from '../pages/_data.js';
	export let lang;
	$: data = lang.split('-');
</script>

{#each Front as item, i}
	<section id={item.id} class="about featured pad noUnd">
		<div class="container grid mx">
			<picture class="img">
				<source
					srcset={'/images/' + item.img[0] + '.webp'}
					type="media/webp"
				/>
				<source
					srcset={'/images/' + item.img[0] + '.' + item.img[1]}
					type={'media/' + item.img[1]}
				/>
				<img
					src={'/images/' + item.img[0] + '.' + item.img[1]}
					alt={item[data[0]].title}
				/>
			</picture>
			<div class="content">
				<div class="grid">
					{#if i == 0}<h1>{item[data[0]].title}</h1>{:else}<h2>
							{item[data[0]].title}
						</h2>{/if}
					<p>{item[data[0]].body}</p>
					<p>
						<a
							class="btn"
							href={item[data[0]].link.url}
							title={item[data[0]].link.title}
						>
							{#if lang == 'fi'}Lue lisää{:else}Read more{/if} &rarr;
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>
{/each}
<section id="skills" class="pad">
	<div class="container mxa grid tc">
		{#each Skills as item}
			<div class="skill bgw mxa">
				<div class="what">
					<h2 class="green">{item.title}</h2>
					<p>{item[data[0]]}</p>
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
