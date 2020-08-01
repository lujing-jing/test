module.exports = {
        configureWebpack: {
            output: {
                library: 'singleVue',
                libraryTarget: 'umd' //umd模块，
            },
            devServer: {
                port: 10000
            }

        }

    }
    //都会配置打window上
    //window.singleVue.bootstrap