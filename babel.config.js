module.exports = function (api) {
    api.cache(true);

    const presets = ["@babel/preset-typescript", "@babel/preset-env", "@babel/preset-react"];
    const plugins = ["@babel/plugin-transform-typescript", "macros"];

    return {
        presets,
        plugins
    };
}