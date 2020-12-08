<script>
	import { isActive, url, page } from "@sveltech/routify"
	import { metatags } from "@sveltech/routify";
	import { lang } from "../components/lang"
	import Social from "../components/Social.svelte"
	import { Nav } from "./_data.js"
	let active
	$: metatags.canonical = "https://timoanttila.com"+ $page.__file.shortPath
</script>

<div id="logo" class="abs bgw noUnd"><a class="cell grid" href="/" hreflang="en">TA</a></div>

<button id="openMenu" class="abs bgw toggle" class:open={active} class:bgw={!active} on:click={ () => active = !active} title="Open/close main navigation">{#if !active}<svg viewBox="0 0 100 80" width="30" height="30"><title>Open or close navigation</title><desc>Pressing the button in the mobile version opens the main navigation menu. Pressing again closes the menu.</desc><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg>{:else}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>{/if}</button>

{#if Nav[$lang]}
<nav id="menu" class="bgb cell" class:hidden={!active} class:grid={active}><ul class="block tc noUnd">{#each Nav[$lang] as [path, name, lang]}<li><a href={$url(path)} class:active={$isActive(path)} on:click={ () => active = !active} hreflang={lang}>{name}</a></li>{/each}</ul></nav>
{/if}

<main id="hello"><slot/></main>
<footer><div class="container mxa tc"><Social/></div></footer>

<svelte:head>
	<style>
		:root {
			--wt: rgba(255,255,255,.87);
			--wt6: rgba(255,255,255,.6);
			--wt4: rgba(255,255,255,.4);
			--wb: #fff;
			--red: rgb(64,0,0);
			--high: rgb(0,128,255);
			--neg: rgb(255,255,0);
			--black: #000;
			--blue: #03061b;
			--dark: rgba(23,25,35,0.87);
			--green: rgb(49,151,149);
			--light: rgba(255,255,255,.4);
			--link: rgb(126,255,225)
		}
		* { margin: 0; padding: 0 }
		body {
			box-sizing: border-box;
			font: 400 18px Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
			line-height: 1.5
		}
		#skills p:not(.green),
		#skills li { color: var(--dark) }
		.grid { display: grid }
		main,
		img,
		.block li,
		.block a { display: block }
		.abs { position: absolute }
		.hidden { display: none }
		.noUnd a { text-decoration: none }
		.bgw { background-color: var(--wb) }
		.bgb,
		body { background-color: var(--blue) }
		.bgb,
		#menu a,
		.dark a:hover,
		footer h4 { color: var(--wt) }
		.cell {
			width: 100%;
			height: 100%;
			place-content: center
		}
		#logo a { color: var(--blue) }
		.green { color: var(--green) }
		.tc { text-align: center }
		#logo,
		#openMenu {
			position: fixed;
			top: 1.5rem;
			z-index: 666;
			width: 48px;
			height: 48px;
			border-radius: 50%
		}
		#logo {
			left: 1.5rem;
			z-index: 666;
			border: 2px solid var(--blue);
			font-weight: 900;
			font-size: 1.3rem
		}
		#openMenu {
			right: 1.5rem;
			border: none
		}
		#openMenu svg {
			margin-top: 3px;
			fill: var(--blue)
		}
		#menu {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 600
		}
		#menu a {
			padding: 1.5rem 3rem;
			text-transform: uppercase;
			font-size: 1.4rem;
			border-top: 1px solid var(--light)
		}
		#menu li:last-child a { border-bottom: 1px solid var(--light) }
		.container { width: calc(100vw - 4rem) }
		.content .grid {
			place-content: center;
			width: 100%;
			height: 100%
		}
		a.btn {
			display: inline-block;
			padding: 8px 25px;
			background-color: rgba(16,54,112,0);
			border: 1px solid;
			border-radius: 4px
		}
		section { padding: 3rem 0 }
		section img {
			width: 100%;
			display: block
		}
		#hello:not(.dark) a.btn:hover {
			color: #fff;
			background-color: var(--red)
		}
		.dark { background-color: #000 }
		.high h1,
		.high h2,
		.high a { color: var(--high) }
		.high a { border-color: var(--high) }
		.high a:hover { background-color: var(--high) }
		.neg h1,
		.neg h2,
		.neg a { color: var(--neg) }
		.neg a { border-color: var(--neg) }
		.neg a:hover { background-color: var(--red) }
		p + p,
		p + ul { margin-top: 15px }
		img { border-radius: 5% }
		.mxa {
			margin-left: auto;
			margin-right: auto
		}
		.inl,
		code {
			display: inline-block;
			vertical-align: top;
		}
		.socialmedia a {
			width: 48px;
			height: 48px;
			align-content: center;
			justify-content: center;
		}
		footer {
			padding: 1.5rem 0;
			background-color:rgb(46, 56, 88);
			border-top: 1px ridge var(--wt4)
		}
		footer svg { fill: var(--wt6) }
		footer a:hover svg { fill: var(--wb) }
		footer h4 {
			font-size: 1.2rem;
			max-width: 260px;
			margin-bottom: 0.5rem;
			color: var(--wt6)
		}
		@media screen and (min-width:1000px){
			section .container.grid {
				grid-template-columns: 370px 1fr;
				grid-gap: 3rem;
				height: 100%
			}
		}
		@media screen and (max-width:1000px){
			section .img {
				width: 100%;
				max-width: 300px;
				margin: 0 auto 2rem
			}
		}
		@media screen and (max-width:580px){
			main { padding-top: calc(48px + 1.5rem) }
		}
	</style>
</svelte:head>
