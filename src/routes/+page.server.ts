import { env } from '$env/dynamic/private';
import type { Command } from '$lib/types/index.js';
import axios from 'axios';

export async function load() {
	// const res = await axios.get(`${env.API_URL}/commands`);
	// const commands = res.data as Command[];

	// // Tipe object hasil grouping: key = category, value = array Command
	// type GroupedCommands = Record<string, Command[]>;

	// const groupedCommands: GroupedCommands = commands.reduce((acc, command) => {
	// 	const key = command.category;
	// 	if (!acc[key]) {
	// 		acc[key] = [];
	// 	}
	// 	acc[key].push(command);
	// 	return acc;
	// }, {} as GroupedCommands);

	return {
		// groupedCommands
	};
}
