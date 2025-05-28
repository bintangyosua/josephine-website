<script>
	import { buttonColors } from '$lib/button-colors.js';
	import { config } from '$lib/utils/config.js';
	import { Button } from '../components.js';
	import { DiscordIcon, FpsmsIcon, GithubIcon } from '../icons/icon.js';
</script>

<div class="relative grid h-[91vh] place-items-center">
	<!-- background layer -->
	<div class="bg-home-background absolute inset-0 z-0 opacity-80 brightness-60"></div>

	<!-- gradient overlay for smooth transition -->
	<div class="absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-black/30 to-black"></div>

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
		<a href={config.inviteBot}>
			<Button color={buttonColors.yellow} className="text-2xl mt-5">start here</Button>
		</a>
		<div class="mt-10 flex flex-col items-center gap-2 font-mono sm:flex-row sm:gap-12">
			<p class="text-gray text-xl font-semibold">SUPPORTED BY</p>
			<div class="flex items-center gap-6 text-4xl">
				<a href="https://github.com" target="_blank">
					<span><GithubIcon size={40} /></span>
				</a>

				<a href="https://fps.ms/" target="_blank">
					<span><FpsmsIcon size={58} color="currentColor" /></span>
				</a>
				<a href="https://discord.com" target="_blank">
					<span><DiscordIcon size={43} /></span>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-home-background {
		background-image: url('/background-car-home.gif');
		background-size: cover;
		background-position: center bottom;
	}
</style>
