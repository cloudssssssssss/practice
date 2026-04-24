const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[contenthash].js', // Додає хеш для кешування (ТЗ пункт 1)
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищує папку dist перед кожною збіркою
  },
  devServer: {
    port: 3000,
    open: true, // Автоматично відкриває браузер (ТЗ пункт "DevServer")
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        loader: 'ts-loader', 
        options: {
          // Вказуємо шлях до конфігу явно, щоб не було помилок шляхів у Windows
          configFile: path.resolve(__dirname, 'tsconfig.json')
        },
        exclude: /node_modules/ 
      },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // Babel (ТЗ)
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Зовнішній CSS (ТЗ)
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // Sass/SCSS (ТЗ)
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // LESS (ТЗ)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    
    // ОСЬ ТУТ ЗМІНИ ДЛЯ ESLINT:
    new ESLintPlugin({ 
         extensions: ['ts', 'js'],
         overrideConfigFile: path.resolve(__dirname, '.eslintrc.js') 
    }),
    
    new BundleAnalyzerPlugin(), // Візуалізація розміру пакетів (ТЗ)
  ],
};