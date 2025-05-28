<script lang="ts">
	import type { Command } from '$lib/types/command.js';
	import { Card } from '../components.js';

	export let groupedCommands: Record<string, Command[]>;

	// Ambil list kategori sebagai tab labels
	let categories = Object.keys(groupedCommands);
	let activeTab = categories[0]; // tab aktif default

	function selectTab(cat: string) {
		activeTab = cat;
	}
</script>

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

<style>
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
