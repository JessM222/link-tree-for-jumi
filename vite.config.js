import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	base: '/link-tree-for-jumi/'
});
