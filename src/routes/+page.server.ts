import { PUBLIC_API_URL } from '$env/static/public';
import type { Command } from '$lib/types/index.js';
import axios from 'axios';

export async function load() {
	const res = await axios.get(`${PUBLIC_API_URL}/commands`);
	const commands = res.data as Command[];

	// Tipe object hasil grouping: key = category, value = array Command
	type GroupedCommands = Record<string, Command[]>;

	const groupedCommands: GroupedCommands = commands.reduce((acc, command) => {
		const key = command.category;
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(command);
		return acc;
	}, {} as GroupedCommands);

	return {
		groupedCommands
	};
}
