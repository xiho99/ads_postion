import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
function resolve(dir: string) {
    return path.join(__dirname, dir);
}
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8000,
        hmr: true,
        proxy: {
            '/api': {
                target: 'http://admin-adsposition.hgsoog.com/api',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''), // 移除/api前缀
            },
            '/uploads/': {
                target: 'http://admin-adsposition.hgsoog.com/storage/uploads',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/uploads/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            '@img': resolve('src/assets/image'),
        }
    },
    plugins: [
        vue(),
    ],
})
