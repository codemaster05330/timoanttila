<script>
	import { isActive, url, page, metatags } from '@roxi/routify';
	import { Nav } from '../pages/_data.js';
	import { lang } from './store.js';
	import Dark from './Darkmode.svelte';
	$: i = $lang.split('-');
	$: menu = Nav ? Nav[i[0]] : Nav.en;
	let active;
	$: metatags.canonical = 'https://timoanttila.com' + $page.path;
</script>

<button
	id="openMenu"
	class="abs toggle"
	class:open={active}
	on:click={() => (active = !active)}
	title="Open/close main navigation"
>
	{#if !active}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 22 22"
		>
			<title>Open or close navigation</title>
			<desc>
				Pressing the button in the mobile version opens the main
				navigation menu. Pressing again closes the menu.
			</desc>
			<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			><path
				d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
			/>
		</svg>
	{/if}
</button>

{#if menu}
	<div id="logo" class="abs noUnd bold">
		<a class="grid cell white" href="/" hreflang="en">TA</a>
	</div>
	<nav id="menu" class="tc up" class:hidden={!active} class:grid={active}>
		<ul class="m0 noUnd">
			{#each menu as item}
				<li class="block">
					<a
						class="block white"
						href={$url(item[0])}
						on:click={() => (active = !active)}
						hreflang={item[2]}>{item[1]}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<Dark />
