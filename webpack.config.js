const path = require('path');

module.exports = {
    entry: './src/js/main.js', // Entry point for JavaScript
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js', // Bundled JavaScript output
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Match .scss files
                use: ['style-loader', 'css-loader', 'sass-loader'], // Process Sass files
            },
            {
                test: /\.js$/, // Match .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Match image files
                use: {
                    loader: 'file-loader', // Use file-loader to handle image files
                    options: {
                        name: '[name].[hash].[ext]', // Name format for output files
                        outputPath: 'images/', // Place images in the 'dist/images' folder
                    },
                },
            },
        ],
    },
    mode: 'development', // Use 'production' for optimized builds
    watch: true, // Watch for file changes
};
