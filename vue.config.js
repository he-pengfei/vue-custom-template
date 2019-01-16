module.exports = {
     // 基本路径
     baseUrl: '',
     // 输出文件目录
     outputDir: 'dist',
     // eslint-loader 是否在保存的时候检查
     lintOnSave: true,
     chainWebpack: () => { },
     configureWebpack: () => { },
     productionSourceMap: true,
     // css相关配置
     css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,   //可以当作css热更新，false 开发模式启动热更新，true生产模式
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
     },
     parallel: require('os').cpus().length > 1,
     pwa: {},
     // webpack-dev-server 相关配置
     devServer: {
        //open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 3000,
        open:true,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => { }
     },
     // 第三方插件配置
     pluginOptions: {
        // ...
     }
}


