<script lang="ts">
	import type { buttonColors } from '$lib/button-colors.js';

	export let children;

	export let className: string = '';
	export let color: buttonColors;
</script>

<button class={`${className} ${color}`}>{@render children()}</button>

<style>
	button {
		text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		border: 0;
		z-index: 1;
		user-select: none;
		cursor: pointer;
		letter-spacing: 1px;
		white-space: unset;
		padding: 0.5rem 1.2rem;
		text-decoration: none;
		font-weight: 800;
		transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
	}

	button:before {
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
		z-index: -1;
		box-shadow:
			0 -4px rgb(0 0 0 / 50%) inset,
			0 4px rgb(255 255 255 / 20%) inset,
			-4px 0 rgb(255 255 255 / 20%) inset,
			4px 0 rgb(0 0 0 / 50%) inset;
	}

	button:after {
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
		transition: 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
	}

	button:hover:before {
		box-shadow:
			0 -4px rgb(0 0 0 / 50%) inset,
			0 4px rgb(255 255 255 / 20%) inset,
			-4px 0 rgb(255 255 255 / 20%) inset,
			4px 0 rgb(0 0 0 / 50%) inset;
	}

	button:hover:after {
		box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
	}

	button:active {
		transform: translateY(4px);
	}

	button:active:after {
		box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
	}
</style>
