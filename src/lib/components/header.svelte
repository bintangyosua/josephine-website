<script lang="ts">
	import { buttonColors } from '$lib/button-colors.js';
	import { config } from '$lib/utils/config.js';
	import Button from './button.svelte';
</script>

<header class="bg-black">
	<nav class="max-w-8xl mx-auto w-full p-4">
		<div class="w-full">
			<div class="flex w-full flex-col items-center justify-between gap-y-4 md:flex-row">
				<a href="/" class="p-0">
					<h1 class="flex items-center gap-1 p-0 text-xl font-bold">
						<span class="font-pixelify flex items-center text-3xl text-white">Josephine</span>
					</h1>
				</a>
				<ul class="flex items-center gap-3 text-lg sm:gap-4 md:gap-5">
					<li class="flex items-center gap-4">
						<a href={config.inviteBot}>
							<Button color={buttonColors.gray}>invite bot</Button>
						</a>
						<a href={config.joinServer}>
							<Button color={buttonColors.green}>join server</Button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
