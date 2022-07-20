const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const context = path.resolve(__dirname, 'src')

module.exports = {
  stats: {
    children: true,
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    mainFields: ['module', 'browser', 'main'],
    modules: [
      'node_modules',
    ],
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@controllers': path.resolve(__dirname, './src/controllers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@middlewares': path.resolve(__dirname, './src/middlewares'),
      '@strum/file-pack': path.resolve(__dirname, '../@strum/file-pack/'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@protocols': path.resolve(__dirname, '../protocols'),
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src'),
      config: path.resolve(__dirname, './src/config'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },
    ],
  },

  plugins: [
  ],
}
