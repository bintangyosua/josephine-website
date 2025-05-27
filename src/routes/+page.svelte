<script>
	import { buttonColors } from '$lib/button-colors.js';
	import Button from '$lib/components/button.svelte';
	import DiscordIcon from '$lib/components/icons/discord-icon.svelte';
	import GithubIcon from '$lib/components/icons/github-icon.svelte';
</script>

<div class="relative">
	<!-- Hero Section with Background -->
	<div class="relative grid h-[91vh] place-items-center">
		<!-- background layer -->
		<div class="bg-home-background absolute inset-0 z-0 opacity-80 brightness-60"></div>

		<!-- gradient overlay for smooth transition -->
		<div
			class="absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-black/50 to-black"
		></div>

		<!-- content layer -->
		<div
			class=" text-gray relative z-10 -mt-20 flex flex-col items-center text-center font-extrabold"
		>
			<div
				class="from-red to-yellow bg-gradient-to-b bg-clip-text text-6xl text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
			>
				<h1 class="font-pixelify">JOSEPHINE</h1>
				<h2 class="font-pixelify">DISCORD BOT</h2>
			</div>
			<p class="w-full text-lg font-normal md:w-3/4">
				Turn your community into the place to be! Join more than 1,400,000 Discord servers that use
				Josephine to manage and build a fun and inviting community.
			</p>
			<Button color={buttonColors.yellow} className="text-2xl mt-5">start here</Button>
			<div class="mt-10 flex flex-col items-center gap-2 font-mono sm:flex-row sm:gap-12">
				<p class="text-gray text-xl font-semibold">SUPPORTED BY</p>
				<div class="flex items-center gap-6 text-4xl">
					<a href="https://github.com" target="_blank">
						<span><GithubIcon size={40} /></span>
					</a>

					<a href="https://fps.ms/" target="_blank">
						<img
							src="/fps-icon.png"
							class="max-h-[60px] w-auto max-w-[60px] object-contain brightness-110 grayscale"
							alt="fps.ms"
						/>
					</a>
					<a href="https://discord.com" target="_blank">
						<span><DiscordIcon size={40} /></span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Gradient Transition Zone -->
	<div class="relative z-[8] h-48 bg-gradient-to-b from-black/95 via-black to-black"></div>

	<div class="h-[400px] bg-black"></div>
</div>

<style>
	.bg-home-background {
		background-image: url('/background-car-home.gif');
		background-size: cover;
		background-position: center bottom;
	}
</style>
