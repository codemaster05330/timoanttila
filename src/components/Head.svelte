<script>
	import { isActive, url, page, metatags } from '@roxi/routify';
	import { Nav } from '../pages/_data.js';
	import { mode } from './store.js';
	$: u = $page.path.split('/');
	let active;
	$: metatags.canonical = 'https://timoanttila.com' + $page.path;

	function darkMode() {
		$mode = $mode == 'bg3' ? 'bg2' : 'bg3';
	}
</script>

{#if Nav[0]}
	<div id="logo" class="abs">
		<a class="cell tw" href="/" hreflang="en">TA</a>
	</div>
	<nav
		id="menu"
		class="cell tc up block"
		class:hidden={!active}
		class:grid={active}
	>
		<ul class="abs cell">
			{#each Nav as [path, name, lang]}<li>
					<a
						href={$url(path)}
						class:active={$isActive(path)}
						on:click={() => (active = !active)}
						hreflang={lang}>{name}</a
					>
				</li>{/each}
		</ul>
	</nav>
	<button
		id="openMenu"
		class="abs toggle"
		class:open={active}
		class:bgw={!active}
		on:click={() => (active = !active)}
		title="Open/close main navigation"
	>
		{#if !active}
			<svg viewBox="0 0 100 80" width="30" height="30">
				<title>Open or close navigation</title>
				<desc>
					Pressing the button in the mobile version opens the main
					navigation menu. Pressing again closes the menu.
				</desc>
				<rect width="100" height="20" /><rect
					y="30"
					width="100"
					height="20"
				/><rect y="60" width="100" height="20" /></svg
			>{:else}<svg
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
{/if}

<label id="darkmode" class="block abs">
	<input type="checkbox" on:click={darkMode} />
	<span class="slider round" />
</label>

<style type="text/scss">
	#menu {
		display: grid;
		place-content: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 500;
		width: 100vw;
		height: 100vh;
	}
	#darkmode {
		top: 1rem;
		right: 1rem;
		z-index: 100;
		width: 60px;
		height: 34px;
		input {
			opacity: 0;
			width: 0;
			height: 0;
			&:focus + .slider {
				box-shadow: 0 0 1px #2196f3;
			}
			&:checked {
				& + .slider {
					background-color: #2196f3;
					&:before {
						-webkit-transform: translateX(26px);
						-ms-transform: translateX(26px);
						transform: translateX(26px);
					}
				}
			}
		}
		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #ccc;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			&:before {
				position: absolute;
				content: '';
				height: 26px;
				width: 26px;
				left: 4px;
				bottom: 4px;
				background-color: white;
				-webkit-transition: 0.4s;
				transition: 0.4s;
			}
			&.round {
				border-radius: 34px;
				&:before {
					border-radius: 50%;
				}
			}
		}
	}
</style>
