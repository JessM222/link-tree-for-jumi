import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
	build: {
		rollupOptions: {
			input: resolve(__dirname, 'src/app.html')
		}
	},
	base: '/link-tree-for-jumi/'
});
