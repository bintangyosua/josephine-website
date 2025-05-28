<script lang="ts">
	import { buttonColors } from '$lib/button-colors.js';
	import Button from '$lib/components/button.svelte';
	import { Card } from '$lib/components/components.js';
	import CommandsSection from '$lib/components/home/commands-section.svelte';
	import HeroSection from '$lib/components/home/hero-section.svelte';
	import { DiscordIcon, FpsmsIcon, GithubIcon } from '$lib/components/icons/icon.js';
	import { config } from '$lib/utils/config.js';

	export let data;
	let { groupedCommands } = data;
</script>

<div class="relative">
	<!-- Hero Section with Background -->
	<HeroSection />

	<!-- Gradient Transition Zone -->
	<div class="relative z-[8] h-20 bg-gradient-to-b from-black via-black to-black"></div>

	<CommandsSection {groupedCommands} />

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
				<Button color={buttonColors.yellow} className="mx-auto mt-5 text-2xl">Join Here!</Button>
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
