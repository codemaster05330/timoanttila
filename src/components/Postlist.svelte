<script>
	import { url } from '@roxi/routify';
	export let posts;
</script>

{#if posts[0]}
	<ul id="postList" class="container grid noUnd m0">
		{#each posts as { meta, path }}
			<li class="mx block">
				<a
					class="article block bor"
					href={$url(path)}
					title={meta.frontmatter.title}
				>
					<div class="content">
						<h3 class="m0">{meta.frontmatter.title}</h3>
						<p class="summary m0">{meta.frontmatter.summary}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
{/if}
