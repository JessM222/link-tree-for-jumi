import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: resolve(__dirname, 'src/app.html')
		}
	},
	base: '/link-tree-for-jumi/'
});
