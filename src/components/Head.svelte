<script>
	import { isActive, url, page } from "@sveltech/routify"
	import { Nav } from "../pages/_data.js"
	$: u = $page.path.split('/')
	$: i = u[1] == "fi" ? 1 : 0;
	$: item = Nav[i]
	let active
</script>

{#if item[0]}
<nav id="menu" class="tc w1 fix tw up block" class:grid={active} class:hidden={!active}><ul>{#each item as [path, name]}<li><a href={$url(path)} class:active={$isActive(path)} on:click={ () => active = !active}>{name}</a></li>{/each}</ul></nav>
<button id="openMenu" class="fix toggle menu" class:open={active} class:bgw={!active} on:click={ () => active = !active} title="Open/close main navigation"><svg viewBox="0 0 100 80" width="30" height="30"><title>Open or close navigation</title><desc>Pressing the button in the mobile version opens the main navigation menu. Pressing again closes the menu.</desc><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg></button>
{/if}
