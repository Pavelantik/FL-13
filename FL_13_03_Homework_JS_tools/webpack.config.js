const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports ={
    entry :"./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    mode: 'development',
    // module: {
    //     rules: [
    //       {
    //         test: /\.css$/i,
    //         use: ['style-loader', 'css-loader'],
    //       },
    //     ],
    // },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["env"],
                    // presets: ['@babel/preset-env']
                  }
                }
              },
            // {
            //             test: /\.css$/i,
            //             use: ['style-loader', 'css-loader'],
            //           },
            {
                test: /\.scss$/i, //    /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                       
                    
                  // Creates `style` nodes from JS strings
                //   'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img'
                }
            },
        ]
        
    },
    devServer: {
           contentBase: './dist',
          },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/style.css',
            
            // chunkFilename: '[id].css',
          }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        // new MiniCssExtractPlugin({
        //   // Options similar to the same options in webpackOptions.output
        //   // both options are optional
        //   filename: '[name].css',
        //   chunkFilename: '[id].css',
        // }),
      ],
}