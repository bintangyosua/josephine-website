<script lang="ts">
	export let children;
	export let className: string = '';
</script>

<div class={className}>{@render children()}</div>

<style>
	div {
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
		transition: all 0.7s cubic-bezier(0, 0.8, 0.26, 0.99);
	}

	div:before {
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

	div:after {
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

	div:hover:before {
		box-shadow:
			0 -4px rgb(0 0 0 / 50%) inset,
			0 4px rgb(255 255 255 / 20%) inset,
			-4px 0 rgb(255 255 255 / 20%) inset,
			4px 0 rgb(0 0 0 / 50%) inset;
	}

	div:hover:after {
		box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
	}

	div:active {
		transform: translateY(4px);
	}

	div:active:after {
		box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);
	}
</style>
