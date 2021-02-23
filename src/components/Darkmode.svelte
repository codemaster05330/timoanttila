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

<style type="text/scss">
	#darkmode {
		top: 80px;
		right: 1.2rem;
		z-index: 100;
		width: 60px;
		height: 34px;
		input {
			opacity: 0;
			width: 0;
			height: 0;
			&:focus + .slider {
				box-shadow: 0 0 1px var(--blue);
			}
			&:checked {
				& + .slider {
					background-color: var(--blue);
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
