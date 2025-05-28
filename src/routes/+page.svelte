<script lang="ts">
	import { buttonColors } from '$lib/button-colors.js';
	import Button from '$lib/components/button.svelte';
	import { Card } from '$lib/components/components.js';
	import HeroSection from '$lib/components/home/hero-section.svelte';
	import { DiscordIcon, FpsmsIcon, GithubIcon } from '$lib/components/icons/icon.js';
	import { config } from '$lib/utils/config.js';
</script>

<svelte:head>
	<title>Join Our Community - Josephine Discord Bot</title>
	<meta
		name="description"
		content="Join Josephine, the ultimate Discord bot, and manage your community with ease. Connect with over 1,400,000 servers and be part of the fun!"
	/>
	<meta name="keywords" content="Discord, Bot, Community, Josephine, Join, Servers" />
	<meta property="og:title" content="Join Our Community - Josephine Discord Bot" />
	<meta
		property="og:description"
		content="Join Josephine, the ultimate Discord bot, and manage your community with ease. Connect with over 1,400,000 servers and be part of the fun!"
	/>
	<meta property="og:image" content="/path/to/image.jpg" />
	<meta property="og:url" content="https://yourwebsite.com" />
</svelte:head>

<div class="relative">
	<!-- Hero Section with Background -->
	<HeroSection />

	<div class="relative h-[130vh]">
		<div class="bg-footer-background absolute inset-0 z-0 opacity-80 brightness-60"></div>
		<!-- gradient overlay for smooth transition ke atas -->
		<div
			class="absolute inset-0 z-[5] grid place-items-center bg-gradient-to-t from-transparent via-black/30 to-black"
		>
			<div class="flex max-w-7xl flex-col gap-3 px-4 text-center">
				<h2
					class="from-darkblue font-pixelify to-gray bg-gradient-to-b bg-clip-text text-6xl text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
				>
					Ready to Join?
				</h2>
				<p class="text-gray text-lg">
					Smash that button and pull up to our Discord — the squad’s waiting! We’re talkin’
					late-night grinds, random deep talks, and next-level collabs. No cap, this is where the
					real ones hang out and grow together. So don’t just scroll — join the chaos, claim your
					spot, and let’s make some noise!
				</p>
				<Button color={buttonColors.yellow} className="mx-auto mt-5 text-2xl">join here!</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-footer-background {
		background-image: url('/background-woman-driving.gif');
		background-size: cover;
		background-position: center bottom;
	}
</style>
