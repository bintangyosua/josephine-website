<script lang="ts">
	import { footerItems } from '$lib/utils/footer.js';
	import { DiscordIcon, FpsmsIcon, GithubIcon, LovePixelIcon } from './icons/icon.js';
</script>

<footer class="bg-black text-white">
	<div class="max-w-8xl mx-auto w-full p-4 text-gray-300 sm:p-6 md:p-8 lg:p-10">
		<div class="mb-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
			<span class="font-pixelify text-3xl">Josephine</span>
			<span class="text-lg whitespace-nowrap">
				<span class="inline-flex items-center gap-1">
					Made with <LovePixelIcon size={20} /> in Purwokerto, Indonesia
				</span>
			</span>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
			{#each Object.entries(footerItems) as [section, items]}
				<div class="flex flex-col gap-4">
					<div class="font-mono text-xl brightness-75">{section}</div>
					<div class="flex flex-col gap-1">
						{#each items as item}
							<a href={item.link} class="hover:underline">{item.label}</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-6 flex flex-col-reverse items-center justify-between gap-2 text-sm sm:flex-row">
			<div>© 2025 <b>Minuettaro</b>, All Rights Reserved.</div>
			<div class="flex items-center gap-2 text-4xl">
				<a href="https://github.com" target="_blank">
					<span><GithubIcon size={30} /></span>
				</a>

				<a href="https://fps.ms/" target="_blank">
					<span><FpsmsIcon size={45} color="currentColor" /></span>
				</a>
				<a href="https://discord.com" target="_blank">
					<span><DiscordIcon size={35} /></span>
				</a>
			</div>
		</div>
	</div>
</footer>
