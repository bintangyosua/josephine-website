import { config } from './config.js';

export const footerItems = {
	Company: [
		{
			link: '#',
			label: 'About'
		},
		{
			link: '#',
			label: 'Blog'
		},
		{
			link: '#',
			label: 'Shop'
		},
		{
			link: '#',
			label: 'Community'
		},
		{
			link: '#',
			label: 'Help Center'
		}
	],
	'Discord Bot': [
		{
			link: '#',
			label: 'Features'
		},
		{
			link: '#',
			label: 'Commands'
		},
		{
			link: config.inviteBot,
			label: 'Invite Bot'
		},
		{
			link: '#',
			label: 'Status'
		},
		{
			link: config.joinServer,
			label: 'Support Server'
		}
	],
	Legal: [
		{ link: '#', label: 'Privacy Policy' },
		{ link: '#', label: 'Terms of Service' },
		{ link: '#', label: 'Cookie Policy' }
	],
	Stacks: [
		{
			link: '#',
			label: 'Nodejs'
		},
		{
			link: '#',
			label: 'Sveltekit'
		},
		{
			link: '#',
			label: 'Discordjs'
		},
		{
			link: '#',
			label: 'Hono'
		},
		{
			link: '#',
			label: 'MongoDB'
		}
	]
};

export type FooterItems = typeof footerItems;
export type FooterItem = FooterItems[keyof FooterItems];
