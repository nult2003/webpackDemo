const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.ts',
     print: './src/print.js'
   },
   plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Output Management'
    })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module:{
    rules:[
        {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test:/\.(csv|tsv)$/,
            use:[
                'csv-loader'
            ]
        },
        {
            test:/\.xml$/,
            use:[
                'xml-loader'
            ]
        },
        {
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node-modules/
        }
    ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }
 };