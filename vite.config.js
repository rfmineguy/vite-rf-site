import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vite-rf-site/',
	title: "RF Site",
  plugins: [vue()],
	server: {
		fs: {
			cachedChecks: false
		}
	}
})
