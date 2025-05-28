<script lang="ts">
	export let children;
	export let className: string = '';
</script>

<div class={className}>
	{@render children()}
</div>

<style>
	div {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 0.8rem 1.5rem;
		border-radius: 12px;
		/* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
		color: white;
		font-weight: 500;
		letter-spacing: 0.5px;
		cursor: pointer;
		user-select: none;
		border: 2px solid transparent;
		transition: all 0.2s ease;
		box-shadow: none;
		overflow: hidden;

		/* 3D border effect */
		border-top: 2px solid rgba(255, 255, 255, 0.6);
		border-left: 2px solid rgba(255, 255, 255, 0.6);
		border-bottom: 2px solid rgba(255, 255, 255, 0.6);
		border-right: 2px solid rgba(255, 255, 255, 0.6);
	}

	div::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom right,
			rgba(255, 255, 255, 0) 70%,
			rgba(255, 255, 255, 0.15) 100%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		border-radius: inherit;
	}

	div:hover {
		transform: translateY(-1px);
	}

	/* div:hover::before {
		opacity: 1;
	} */

	div:active {
		transform: translateY(1px);
		/* Ubah efek border ketika ditekan untuk efek "masuk ke dalam" */
		border-top: 2px solid rgba(0, 0, 0, 0.2);
		border-left: 2px solid rgba(0, 0, 0, 0.2);
		border-bottom: 2px solid rgba(255, 255, 255, 0.6);
		border-right: 2px solid rgba(255, 255, 255, 0.6);
		transition: transform 0.1s ease;
	}
</style>
