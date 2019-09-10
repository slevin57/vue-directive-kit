var path = require('path')
var webpack = require('webpack')

module.exports = env => {
    return {
        entry: env.lib ? './packages/index.js' : './examples/main.js',
        output: {
            path: path.resolve(__dirname, env.lib ? './lib' : './dist'),
            publicPath: env.lib ? '/lib/' : '/dist/',
            filename: env.lib ? 'vue-directive-kit.js' : 'build.js',
            library: env.lib ? 'vie-directive-kit' : '',
            libraryTarget: env.lib ? 'umd' : 'var',
            umdNamedDefine: env.lib ? true : false,
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.sass$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ],
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                            // the "scss" and "sass" values for the lang attribute to the right configs here.
                            // other preprocessors should work out of the box, no loader config like this necessary.
                            'scss': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader'
                            ],
                            'sass': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader?indentedSyntax'
                            ]
                        }
                        // other vue-loader options go here
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true
        },
        performance: {
            hints: false
        },
        devtool: '#eval-source-map'
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
