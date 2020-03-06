const mix = require('laravel-mix');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/entry-client.js', 'public/js/app.js')
   .sass('resources/sass/app.scss', 'public/css');


if (mix.inProduction()) {
   // Production
   mix.version();
  
   mix.webpackConfig(webpack => ({
      // Для асинхронных компонентов
      output: {
         chunkFilename: 'js/components/[name].[chunkhash].js',
      },
      plugins: [
         new LodashModuleReplacementPlugin(),
      ],
   })).options({
      clearConsole: true
   });
} else {
   // local dev
   mix.webpackConfig(webpack => ({
      // Для асинхронных компонентов
      output: {
         chunkFilename: 'js/components/[name].js',
      },
      plugins: [
         new LodashModuleReplacementPlugin(),
      ],
   })).options({
      clearConsole: true
   });
}