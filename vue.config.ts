const {
	defineConfig
} = require('@vue/cli-service')
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

//  引入terser-webpack-plugin,进行代码混淆加密
let TerserPlugin = require('terser-webpack-plugin');

module.exports = defineConfig({
	assetsDir: 'assets',
	parallel: false,
	publicPath: './',
	outputDir: `../build/output/${process.env.VUE_APP_ENV}/${process.env.VUE_APP_BUILD_CODE}/${process.env.VUE_APP_FLAVOR === 'app' ? 'app' : 'pc'}/dist/`,
	filenameHashing: process.env.VUE_APP_FLAVOR !== 'app', // 打包时去掉hash值
	runtimeCompiler: true, //关键点在这  
	configureWebpack: {
		plugins: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {
						drop_console: !process.env.VUE_APP_MOCK,
						drop_debugger: !process.env.VUE_APP_MOCK,
						pure_funcs: !process.env.VUE_APP_MOCK ? ['console.log'] : []
					}
				}
			})
		],
		resolve: {
			alias: {
				'@': resolve('src'),
				'@img': resolve('src/assets/image'),
			}
		},
	},
	 devServer: {
		host: '0.0.0.0',
		hot: true,
		proxy: {
		  '/api': {
			target: 'http://block-mate.vip1amazon.com',
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, ''), // 移除/api前缀
		  }
		}
	 },
})