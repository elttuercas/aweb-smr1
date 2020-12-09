const mix = require('laravel-mix');

// Add TypeScript support.
mix.webpackConfig(
    {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        }
    }
);

// Stylesheets.
mix.sass('Ej-listas/style.scss', 'Ej-listas/style.css');

// JavaScript.
mix.js('bootstrap.ts', 'bootstrap.js');
