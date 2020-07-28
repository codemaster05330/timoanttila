<script>
	let active = false
	let nav = [
		{
			title: "Home",
			url: "/"
		},{
			title: "Now",
			meta: "Where my focus is right now",
			url: "/now"
		},{
			title: "Gallery",
			meta: "Photographing all kinds of beautiful",
			url: "/gallery"
		},{
			title: "Tutorials",
			meta: "A collection of tutorials about things I've learned or discovered",
			url: "/tutorials"
		}
	]
	let projects = [
		{
			title: "Tuspe Design Oy",
			url: "https://tuspe.com/"
		},{
			title: "Ratsukko",
			url: "https://www.ratsukko.com/"
		}
	]
</script>

<button id="toggler" class="abs" class:open={active} class:close={!active} on:click={ () => active = !active} title="Open/close main navigation">{#if !active}<svg viewBox='0 0 100 80' width='30' height='30'><rect width='100' height='20'></rect><rect y='30' width='100' height='20'></rect><rect y='60' width='100' height='20'></rect></svg>{:else}<svg id="icoBg" width="30" height="30"><path d='M0, -4 30, 35' stroke-width='6' /><path d='M0, 35 30, -4' stroke-width='6' /></svg>{/if}</button>
<nav id="menu" class="abs bgDark" class:hidden={!active}>
	<div class="cell tc up">
		<ul>
			{#each nav as item}
				<li><a href={item.url} rel="prefetch" on:click={ () => active = false}>{item.title}</a></li>
			{/each}
			{#each projects as item}
				<li><a href={item.url} rel="me" target="_blank">{item.title}</a></li>
			{/each}
		</ul>
	</div>
</nav>