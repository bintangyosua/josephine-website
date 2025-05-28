<script lang="ts">
	import { buttonColors } from '$lib/button-colors.js';
	import Button from '$lib/components/button.svelte';
	import { Card } from '$lib/components/components.js';
	import { DiscordIcon, FpsmsIcon, GithubIcon } from '$lib/components/icons/icon.js';
	import { config } from '$lib/utils/config.js';

	export let data;
	let { groupedCommands } = data;

	// Ambil list kategori sebagai tab labels
	let categories = Object.keys(groupedCommands);
	let activeTab = categories[0]; // tab aktif default

	function selectTab(cat: string) {
		activeTab = cat;
	}
</script>

<div class="relative">
	<!-- Hero Section with Background -->
	<div class="relative grid h-[91vh] place-items-center">
		<!-- background layer -->
		<div class="bg-home-background absolute inset-0 z-0 opacity-80 brightness-60"></div>

		<!-- gradient overlay for smooth transition -->
		<div
			class="absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-black/30 to-black"
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

	<!-- Gradient Transition Zone -->
	<div class="relative z-[8] h-20 bg-gradient-to-b from-black via-black to-black"></div>

	<div class="text-gray bg-black">
		<div class="mx-auto flex max-w-5xl flex-col">
			<h1 class="font-pixelify text-center text-7xl">COMMANDS</h1>
			<p class="mt-4 text-center">
				Turn your community into <b>THE</b> place to be! Join more than 1,400,000 Discord servers that
				use Tatsu to manage and build a fun and inviting community.
			</p>
			<div class="tabs mt-10">
				{#each categories as category}
					<button
						class="tab {category === activeTab ? 'active' : ''}"
						on:click={() => selectTab(category)}
					>
						{category}
					</button>
				{/each}
			</div>

			<div class="mb-40 grid grid-cols-3 gap-10">
				{#each groupedCommands[activeTab] as command}
					<Card className="flex flex-col gap-2 bg-transparent">
						<div class="flex w-full flex-row justify-between">
							<div class="font-extrabold">{command.name}</div>
							<div class="font-bold">{command.category}</div>
						</div>
						<div class="w-full">{command.description}</div>
					</Card>
				{/each}
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

	.tabs {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.tab {
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-bottom: 2px solid transparent;
	}
	.tab.active {
		font-weight: bold;
		border-color: var(--color-gray);
	}
</style>
