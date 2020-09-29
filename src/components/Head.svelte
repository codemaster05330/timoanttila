<script>
	import { isActive, url, page } from "@sveltech/routify"
	import { metatags } from "@sveltech/routify";
	import { Nav } from "../pages/_data.js"
	$: u = $page.path.split('/')
	$: i = u[1] == "pulina" ? 1 : 0;
	let active
	$: metatags.canonical = "https://timoanttila.com"+ $page.path
</script>

{#if Nav[0]}
<div id="logo" class="abs"><a class="cell tw" href="/" hreflang="en">TA</a></div>
<nav id="menu" class="tc tw up tc block" class:hidden={!active} class:grid={active}><ul class="abs cell">{#each Nav as [path, name, lang]}<li><a href={$url(path)} class:active={$isActive(path)} on:click={ () => active = !active} hreflang={lang}>{name}</a></li>{/each}</ul></nav>
<button id="openMenu" class="abs toggle" class:open={active} class:bgw={!active} on:click={ () => active = !active} title="Open/close main navigation">{#if !active}<svg viewBox="0 0 100 80" width="30" height="30"><title>Open or close navigation</title><desc>Pressing the button in the mobile version opens the main navigation menu. Pressing again closes the menu.</desc><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg>{:else}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>{/if}</button>
{/if}