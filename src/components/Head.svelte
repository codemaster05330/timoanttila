<script>
	import { isActive, url, page } from "@sveltech/routify"
	import { Nav } from "../pages/_data.js"
	$: u = $page.path.split('/')
	$: i = u[1] == "pulina" ? 1 : 0;
	$: item = Nav[i]
	let active
</script>

{#if item[0]}
<div id="logo" class="abs"><a class="cell tw" href="/" hreflang="en">TA</a></div>
<nav id="menu" class="tc w1 tw up tc" class:block={active}><ul class={item[0][2]}>{#each item as [path, name, lang]}<li class="block"><a href={$url(path)} class:active={$isActive(path)} on:click={ () => active = !active} hreflang={lang}>{name}</a></li>{/each}</ul></nav>
<button id="openMenu" class="toggle menu" class:open={active} class:bgw={!active} on:click={ () => active = !active} title="Open/close main navigation"><svg viewBox="0 0 100 80" width="30" height="30"><title>Open or close navigation</title><desc>Pressing the button in the mobile version opens the main navigation menu. Pressing again closes the menu.</desc><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg></button>
{/if}