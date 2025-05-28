<script lang="ts">
	import '../app.css';

	// Fonts
	import '@fontsource-variable/pixelify-sans';
	import '@fontsource-variable/mulish';
	import { Header } from '$lib/components/components.js';

	let { children } = $props();
</script>

<Header></Header>
{@render children()}
