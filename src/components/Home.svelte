<script>
	import { Front } from '../pages/_data.js';
	export let lang;
</script>

{#each Front as item, i}
	<section id={item.id} class="about featured pad noUnd">
		<div class="container grid mx">
			<picture class="img grid cell">
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
					alt={item[lang].title}
				/>
			</picture>
			<div class="content">
				<div class="grid cell">
					{#if i == 0}
						<h1 class="title">{item[lang].title}</h1>
					{:else}
						<h2 class="title">{item[lang].title}</h2>
					{/if}
					<p>{item[lang].body}</p>
					<p>
						<a
							class="btn bold inl"
							href={item[lang].link.url}
							title={item[lang].link.title}
						>
							{#if lang == 'fi'}Lue lisää{:else}Read more{/if}
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>
{/each}
