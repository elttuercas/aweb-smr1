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
mix.sass('Divs/style.scss', 'Divs/style.css');
mix.sass('Ej-enlaces/style.scss', 'Ej-enlaces/style.css');
mix.sass('Ej-examen1/style.scss', 'Ej-examen1/style.css');
mix.sass('Ej-imagenes/style.scss', 'Ej-imagenes/style.css');
mix.sass('Ej-listas/style.scss', 'Ej-listas/style.css');
mix.sass('Ej-listas2/style.scss', 'Ej-listas2/style.css');
mix.sass('Ej-listas3/style.scss', 'Ej-listas3/style.css');
mix.sass('Ej-museo/style.scss', 'Ej-museo/style.css');
mix.sass('InternetEnEspaña/style.scss', 'InternetEnEspaña/style.css');

// JavaScript.
mix.js('bootstrap.ts', 'bootstrap.js');
