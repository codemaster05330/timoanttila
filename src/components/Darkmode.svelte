<script>
	import { mode } from './store.js';
	function darkMode() {
		$mode = $mode == 'bg3' ? 'bg2' : 'bg3';
	}
</script>

<label id="darkmode" class="block abs">
	<input type="checkbox" on:click={darkMode} />
	<span class="slider round" />
</label>
