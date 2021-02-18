<script>
    import { isActive, url, page, metatags } from '@roxi/routify';
    import { lang } from '../components/lang';
    import Social from '../components/Social.svelte';
    import { Nav } from './_data.js';
    let active, help, effect, styleNeg, styleHigh;
    let font = 18;
    styleHigh = 'dark high';
    $: metatags.canonical = 'https://timoanttila.com' + $page.__file.shortPath;
    function effects(i) {
        if (i == 'reset') {
            effect = '';
            font = 18;
        } else if (effect && effect.includes(i)) effect = '';
        else effect = 'effect ' + i;
    }
</script>

<div id="logo" class="abs bgw noUnd">
    <a class="cell grid" href="/" hreflang={$lang}>TA</a>
</div>

<button
    id="openMenu"
    class="abs bgw toggle"
    class:open={active}
    class:bgw={!active}
    on:click={() => (active = !active)}
    title="Open/close main navigation"
    >{#if !active}<svg viewBox="0 0 100 80" width="30" height="30"
            ><title>Open or close navigation</title><desc
                >Pressing the button in the mobile version opens the main
                navigation menu. Pressing again closes the menu.</desc
            ><rect width="100" height="20" /><rect
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
            /></svg
        >{/if}</button
>

{#if Nav[$lang]}
    <nav id="menu" class="bgb cell" class:hidden={!active} class:grid={active}>
        <ul class="block tc noUnd">
            {#each Nav[$lang] as [path, name, lang]}<li>
                    <a
                        href={$url(path)}
                        class:active={$isActive(path)}
                        on:click={() => (active = !active)}
                        hreflang={lang}>{name}</a
                    >
                </li>{/each}
        </ul>
    </nav>
{/if}

<main id="hello" class={effect} style={'font-size:' + font + 'px'}>
    <slot />
</main>
<footer class={effect}><div class="container mxa tc"><Social /></div></footer>

<div id="helpMe" class:active={help}>
    <button id="helper" class="abs bgw" on:click={() => (help = !help)}
        ><svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            ><title>Accessibility Tools</title><path
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10m0 1c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9m-.011 11.5c-.474.006-.765.448-.989.804-.483.767-1.005 1.58-1.455 2.264-.155.238-.325.43-.609.432-.285.002-.526-.343-.389-.632.366-.769 1.953-3.539 1.953-5.868 0-.806-.429-1-1-1h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.57 0-1 .194-1 1 0 2.329 1.587 5.099 1.953 5.868.137.289-.103.634-.389.632-.284-.002-.454-.194-.609-.432-.45-.684-.973-1.497-1.455-2.264-.226-.359-.52-.806-1-.804h-.011zm.011-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5"
            /></svg
        ></button
    >

    {#if help}
        <div id="helpers" class="abs bgw">
            <h3>Accessibility</h3>
            <button
                on:click={() => (font += 1)}
                data-message="Increase font size">Increase Text</button
            >
            <button
                on:click={() => (font -= 1)}
                data-message="Decrease font size">Decrease Text</button
            >
            <button
                on:click={(e) => effects('high bgd')}
                data-message="Change colors to high contrast - black, white and blue"
                >High Contrast</button
            >
            <button
                on:click={(e) => effects('neg bgd')}
                data-message="Change colors to negative contrast - black, white and yellow"
                >Negative Contrast</button
            >
            <button
                on:click={(e) => effects('bgw')}
                data-message="Change background to white and text to black"
                >Light Background</button
            >
            <button
                on:click={(e) => effects('reset')}
                data-message="Reset all accessibility choices">Reset</button
            >
        </div>
    {/if}
</div>

<svelte:head>
    <meta http-equiv="content-language" content={$lang} />
</svelte:head>
