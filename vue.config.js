const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        proxy: {
            '/v1/': {
                target: process.env.USE_LOCAL_SERVER ? 'http://localhost:8080' : `${process.env.VUE_APP_PREFIX_URL}`
            }
        }
    }
};

module.exports = {
    outputDir: 'dist',
    assetsDir: './',
    publicPath: '/',
}