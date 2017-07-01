const resolve = require('../webpack/resolve');
const rules = require('../webpack/rules');
//console.log(resolver)
const baseConfig = {resolve: resolve, rules: rules({production:false, browser:true})};

module.exports = storybookBaseConfig => {
    console.log(storybookBaseConfig)
    return Object.assign({}, storybookBaseConfig, {
        entry: Object.assign({}, storybookBaseConfig.entry, {
            preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview),
        }),
        resolve: {
            modules: baseConfig.resolve.modules,
        },
        module: Object.assign({}, storybookBaseConfig.module, {
            loaders: storybookBaseConfig.module.rules.concat(baseConfig.rules),
        }),
    })
}

