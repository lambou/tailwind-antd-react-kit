const CracoLessPlugin = require('craco-less');
const postcssConfig = require("./postcss.config.js");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#4B77FF' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    style: {
        postcss: postcssConfig,
    },
};