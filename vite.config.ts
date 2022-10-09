import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@api': path.resolve(__dirname, './src/api'),
			'@context': path.resolve(__dirname, './src/context'),
			'@hook': path.resolve(__dirname, './src/hook'),
			'@mapper': path.resolve(__dirname, './src/mapper'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@provider': path.resolve(__dirname, './src/provider'),
			'@services': path.resolve(__dirname, './src/services'),
			'@store': path.resolve(__dirname, './src/store'),
			'@ui': path.resolve(__dirname, './src/ui'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@scheme': path.resolve(__dirname, './src/scheme')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	}
})
