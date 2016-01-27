/**
 * Created by dpedro on 1/25/2016.
 */
'use strict';
var webpack = require('webpack'),
    path = require('path');
var yargs = require('yargs');
var argv = yargs.choices('env', ['development', 'staging', 'production', 'vagrant', 'ari']).default('env', 'development', 'ari').argv;



module.exports = {
    context: __dirname,
    entry: ['./src/app/app.ts','./src/model/CiudadanoModel.ts','./src/controllers/controllers.ts','./src/services/services.ts','./src/routing/routing.ts', './src/model/domicilioModel.ts', './src/directives/directives.ts'],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/,exclude: [/node_modules/], loader: 'ts-loader' }
        ],
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            host: '0.0.0.0',
            proxy: {
                '/ciudadanos/*': {
                    target: 'http://10.140.1.28:8081/*',
                    secure: false
                }
            }
        }
    },
    loader: {
        configEnvironment: argv.env
    }
}