<script>
	import { gallery } from '../pages/_data.js';
	export let title;
	export let desc;
</script>

<div class="pad">
	<section id="about" class="noUnd">
		<div class="container content mx tc">
			<h1 class="title m0">{title}</h1>
			<p class="summary mx">{desc}</p>
			<p id="more">
				<a
					class="btn inl up"
					href="https://www.instagram.com/_timoanttila/"
					target="_blank"
					rel="noopener me"
					hreflang="en">Instagram</a
				>
			</p>
		</div>
	</section>

	<div id="content">
		<ul id="gallery" class="container mx grid list noUnd">
			{#each gallery as item}
				<li class="block">
					<a
						class="block"
						href={item.url}
						title={item.title + ' - ' + item.camera}
						rel="me noopener"
						target="_blank"
						hreflang="en"
					>
						<picture>
							<source
								srcset={'/images/gallery/' +
									item.name +
									'.webp'}
								type="image/webp"
							/>
							<source
								srcset={'/images/gallery/' + item.name + '.jpg'}
								type="image/jpeg"
							/>
							<img
								src={'/images/gallery/' + item.name + '.jpg'}
								alt={item.title}
								width="400"
								height="400"
							/>
						</picture>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
