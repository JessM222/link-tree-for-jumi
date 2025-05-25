import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: 'src/app.html'
		}
	},
	base: '/link-tree-for-jumi/'
});
