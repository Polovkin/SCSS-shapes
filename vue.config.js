const path = require('path')
module.exports = {
    configureWebpack: (config) => {
        config.devtool = 'source-map'
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/assets/scss/core/base.scss'),
            ]
        },
    },
    assetsDir: 'assets',
    productionSourceMap: false,
    css: {
        sourceMap: true,
    }
}
