const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: [
    //     require.resolve('style-loader'),
    //     {
    //       loader: require.resolve('css-loader'),
    //       options: {
    //         importLoaders: 1,
    //         modules: {
    //           localIdentName: '[name]__[local]___[hash:base64:5]',
    //         },
    //       },
    //     },
    //     require.resolve('less-loader'),
    //   ],
    //   include: path.resolve(__dirname, '../'),
    // });
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  }
}