<script>
	import { isActive, url, page } from "@sveltech/routify"
	import { metatags } from "@sveltech/routify";
	import { not_equal } from "svelte/internal";
	import { lang } from "../components/lang"
	import Social from "../components/Social.svelte"
	import { Nav } from "./_data.js"
	let active, help, effect, styleNeg, styleHigh
	let font = 18
	styleHigh = "dark high"
	$: metatags.canonical = "https://timoanttila.com"+ $page.__file.shortPath
	function effects(i){
		if(i == "reset"){
			effect = ""
			font = 18
		} else if(effect && effect.includes(i)) effect = "";
		else effect = "effect " + i
	}
</script>

<div id="logo" class="abs bgw noUnd"><a class="cell grid" href="/" hreflang="en">TA</a></div>

<button id="openMenu" class="abs bgw toggle" class:open={active} class:bgw={!active} on:click={ () => active = !active} title="Open/close main navigation">{#if !active}<svg viewBox="0 0 100 80" width="30" height="30"><title>Open or close navigation</title><desc>Pressing the button in the mobile version opens the main navigation menu. Pressing again closes the menu.</desc><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg>{:else}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>{/if}</button>

{#if Nav[$lang]}
<nav id="menu" class="bgb cell" class:hidden={!active} class:grid={active}><ul class="block tc noUnd">{#each Nav[$lang] as [path, name, lang]}<li><a href={$url(path)} class:active={$isActive(path)} on:click={ () => active = !active} hreflang={lang}>{name}</a></li>{/each}</ul></nav>
{/if}

<main id="hello" class={effect} style={"font-size:"+ font +"px"}><slot/></main>
<footer class={effect}><div class="container mxa tc"><Social/></div></footer>

<div id="helpMe" class:active={help}>

	<button id="helper" class="abs bgw" on:click={ () => help = !help}><svg width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><title>Accessibility Tools</title><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10m0 1c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9m-.011 11.5c-.474.006-.765.448-.989.804-.483.767-1.005 1.58-1.455 2.264-.155.238-.325.43-.609.432-.285.002-.526-.343-.389-.632.366-.769 1.953-3.539 1.953-5.868 0-.806-.429-1-1-1h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.57 0-1 .194-1 1 0 2.329 1.587 5.099 1.953 5.868.137.289-.103.634-.389.632-.284-.002-.454-.194-.609-.432-.45-.684-.973-1.497-1.455-2.264-.226-.359-.52-.806-1-.804h-.011zm.011-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5"/></svg></button>

	{#if help}
		<div id="helpers" class="abs bgw">
			<h3>Accessibility</h3>
			<button on:click={ () => font += 1} data-message="Increase font size">Increase Text</button>
			<button on:click={ () => font -= 1} data-message="Decrease font size">Decrease Text</button>
			<button on:click={e => effects("high bgd")} data-message="Change colors to high contrast - black, white and blue">High Contrast</button>
			<button on:click={e => effects("neg bgd")} data-message="Change colors to negative contrast - black, white and yellow">Negative Contrast</button>
			<button on:click={e => effects("bgw")} data-message="Change background to white and text to black">Light Background</button>
			<button on:click={e => effects("reset")} data-message="Reset all accessibility choices">Reset</button>
		</div>
	{/if}

</div>

<svelte:head>
	<style>
:root {
    --wt: rgba(255, 255, 255, 0.87);
    --wt6: rgba(255, 255, 255, 0.6);
    --wt4: rgba(255, 255, 255, 0.4);
    --wb: #fff;
    --red: rgb(64, 0, 0);
    --high: rgb(0, 128, 255);
    --neg: rgb(255, 255, 0);
    --black: #000;
    --blue: #03061b;
    --dark: rgba(23, 25, 35, 0.87);
    --light: rgba(255, 255, 255, 0.4);
    --link: rgb(126, 255, 225);
    --violet: rgb(46, 56, 88);
}
* {
    margin: 0;
    padding: 0;
}
body {
    box-sizing: border-box;
    font-weight: 400;
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
}
h1,
.featured h2 {
    font-weight: 100;
    line-height: 1.1;
}
h1,
.featured h2 {
    margin-bottom: 20px;
}
h1:not(#title),
.featured h2 {
    max-width: 500px;
    font-size: clamp(2em, 2.6em, 10vw);
}
h1 {
    display: inline-block;
}
#content li,
#content p {
    font-size: 1em;
}
#about .summary {
    font-size: 1.2em;
    line-height: 1.3;
}
.grid {
    display: grid;
}
.block a,
.block li,
img,
main {
    display: block;
}
.abs {
    position: absolute;
}
.hidden {
    display: none;
}
.noUnd a {
    text-decoration: none;
}
.bgw,
.effect.bgw .bgb {
    background-color: var(--wb);
}
.bgb,
body {
    background-color: var(--blue);
}
.bgd,
.effect.bgd .bgb,
.effect.bgd .bgw {
    background-color: var(--black);
}
#menu a,
.bgb,
.effect.bgd .bgw,
.effect.bgd .featured,

		{
    color: var(--wt);
}
.effect.bgw .bgb,
footer.bgw h4 {
    color: var(--black);
}
footer.bgw svg {
    fill: var(--black);
}
.effect.bgw a {
    color: var(--high);
}
#logo a {
    color: var(--blue);
}
.cell {
    width: 100%;
    height: 100%;
    place-content: center;
}
.tc {
    text-align: center;
}
#logo,
#openMenu {
    position: fixed;
    z-index: 666;
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
#logo {
    border: 2px solid var(--blue);
    font-weight: 900;
    font-size: 1.3rem;
}
#openMenu {
    border: none;
}
#openMenu svg {
    margin-top: 3px;
    fill: var(--blue);
}
#menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 600;
}
#menu a {
    padding: 1.5rem 3rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    border-top: 1px solid var(--light);
}
#menu li:last-child a {
    border-bottom: 1px solid var(--light);
}
#menu a:hover,
article #content a { color: var(--link) }
.container {
    width: calc(100vw - 4rem);
}
.content .grid {
    place-content: center;
    width: 100%;
    height: 100%;
}
a.btn {
    display: inline-block;
    padding: 8px 25px;
    background-color: rgba(16, 54, 112, 0);
    border: 1px solid;
    border-radius: 4px;
}
a,
button {
    cursor: pointer;
}
#hello:not(.effect) .pad { padding: 3rem 0 }
#hello.effect .pad { padding: 1rem 0 }
.featured img {
    width: 100%;
    display: block;
}
#hello:not(.effect) a.btn:hover {
    color: #fff;
    background-color: var(--red);
}
.high a,
.high h1,
.high h2 {
    color: var(--high);
}
.high a {
    border-color: var(--high);
}
.high a:hover {
    background-color: var(--high);
}
.neg a,
.neg h1,
.neg h2 {
    color: var(--neg);
}
.neg a {
    border-color: var(--neg);
}
.neg a:hover {
    background-color: var(--red);
}
p + p,
p + ul {
    margin-top: 15px;
}
img {
    border-radius: 5%;
}
.mxa {
    margin-left: auto;
    margin-right: auto;
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
    background-color: var(--violet);
    border-top: 1px ridge var(--wt4);
}
footer svg {
    fill: var(--wt6);
}
footer a:hover svg {
    fill: var(--wb);
}
footer h4 {
    font-size: 1.2rem;
    max-width: 300px;
    margin-bottom: 0.5rem;
    color: var(--wt6);
}
#helpMe {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 500;
}
#helpMe:not(.active) {
    width: 48px;
}
#helpMe.active {
    width: 248px;
}
#helper {
    bottom: 0;
    left: 0;
    width: 48px;
    height: 48px;
    border-top-left-radius: 18px;
}
#helpers {
    right: 0;
    bottom: 0;
    width: 200px;
    padding-bottom: 5px;
    line-height: 20px;
}
#helpers button {
    width: 100%;
    height: 32px;
    font-size: 18px;
    background: 0 0;
    padding: 5px 15px;
    text-align: left;
}
#helper,
#helpers {
    box-shadow: -1px 0 5px 0 rgba(0, 0, 0, 0.3);
}
#helper,
#helpers button {
    border: 0;
}
#helper svg {
    margin-top: 3px;
}
#helpMe h3 {
    font-size: 20px;
    padding: 10px 15px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
}
@media screen and (min-width: 1000px) {
    .featured .container.grid {
        grid-template-columns: 370px 1fr;
        grid-gap: 3rem;
        height: 100%;
    }
}
@media screen and (max-width: 1000px) {
    .featured .img {
        width: 100%;
        max-width: 300px;
        margin: 0 auto 2rem;
    }
}
@media screen and (min-width: 580px) {
    #logo,
    #openMenu {
        top: 1.5rem;
    }
    #logo {
        left: 1.5rem;
    }
    #openMenu {
        right: 1.5rem;
    }
}
@media screen and (max-width: 580px) {
    #about .container {
        margin-top: 48px;
    }
    #logo {
        left: 0.5rem;
    }
    #openMenu {
        right: 0.5rem;
    }
    #logo,
    #openMenu {
        top: 0.5rem;
    }
}
	</style>
</svelte:head>
