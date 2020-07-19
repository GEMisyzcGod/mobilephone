const path = require('path');

//拼接路径
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@components', resolve('src/components'))
            .set('@static', resolve('src/static'))
            .set('@network', resolve('src/network'))
            .set('@store', resolve('src/store'))
            .set('@tools', resolve('src/tools'))
			.set('@views', resolve('src/views'))
			.set('@assets', resolve('src/assets'))
	},
	// 跨域
	devServer: {
		proxy: {
			'/api': {
			target: 'http://192.168.4.233:8360',	//目标地址
			changeOrigin: true,	//是否跨域，默认false
			}
			},
	}
}