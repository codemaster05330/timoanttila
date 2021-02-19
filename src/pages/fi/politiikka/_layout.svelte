<script>
	import Aside from '../../../components/Aside.svelte';
	import { mode } from '../../../components/store';
</script>

<div id="cols" class={'grid rtl wh ' + $mode}>
	<div id="content" class="ltr">
		<div class="container mx">
			<slot />
		</div>
	</div>
	<Aside />
</div>

<style type="text/scss">
	#cols {
		grid-template-columns: 1fr 300px;
		.container {
			max-width: 700px;
		}
	}
</style>
