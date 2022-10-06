import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
export default {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		})
	]
};
