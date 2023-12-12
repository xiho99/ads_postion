import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/

const viteConfig = defineConfig ((mode: ConfigEnv) => {
    const env = loadEnv(mode.mode, process.cwd());
    const isProduction = mode.mode === 'development' ? 'http://www.xn--iqro9o0j.club' : 'http://wa.hgsoog.com'
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
                    target: `${isProduction}/storage/uploads`,
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/uploads/, ''),
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
              },
        },
        plugins: [
            vue(),
        ],
    }
});

export default viteConfig;
