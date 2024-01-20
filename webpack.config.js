import path from 'path'
import { fileURLToPath } from 'url'
import CopyPlugin from 'copy-webpack-plugin'

import hljs from 'highlight.js'

import * as curlconverter from 'curlconverter'

import { createRequire } from 'module'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const STARTING_CODE = `import requests

response = requests.get('http://example.com')`

export default {
  // mode: 'production',
  // devtool: 'source-map',
  mode: 'development',
  // devtool: 'eval-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
    // rules: [
    //   {
    //     test: /\.js$/,
    //     enforce: 'pre',
    //     use: ['source-map-loader']
    //   },
    //   {
    //     test: /\.sh$/,
    //     type: 'asset/source'
    //   },
    // ]
  },
  resolve: {
    fallback: {
      url: require.resolve('url/'),
      path: require.resolve('path-browserify'),
      fs: false
    }
  },
  experiments: {
    topLevelAwait: true
  },
  devServer: {
    port: 3030, // you can change the port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new CopyPlugin({
      patterns: [
        'node_modules/web-tree-sitter/tree-sitter.wasm',
        'node_modules/curlconverter/dist/tree-sitter-bash.wasm',
      ]
    })
  ],
  // Don't warn that we have a big JS bundle.
  performance: { hints: false }
}