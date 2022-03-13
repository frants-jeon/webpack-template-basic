const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

require('path')

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정(html로 치면 index.html처럼 뭐 부터 읽을지.)
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // 아래 두 줄은 기본값이라 생략 가능
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  // devServer: {
  //   host: 'localhost'
  // }
}