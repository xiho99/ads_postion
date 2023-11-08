import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
function resolve(dir: string) {
    return path.join(__dirname, dir);
}
const viteConfig = defineConfig ((mode: ConfigEnv) => {
    const env = loadEnv(mode.mode, process.cwd());
    const isProduction = mode.mode === 'development' ? 'http://192.168.1.117:8000' : 'http://nav.hls69.co'
    return {
        server: {
            host: '0.0.0.0',
            port: env.VITE_PORT as unknown as number,
            open: JSON.parse(env.VITE_OPEN),
            hmr: true,
            proxy: {
                '/api': {
                    target: `${isProduction}/api`,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, ''), // 移除/api前缀
                },
                '/uploads/': {
                    target: `${isProduction}/uploads`,
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
    }
});

export default viteConfig;
