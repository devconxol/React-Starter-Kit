const PATH = require('../paths');

module.exports = ({production = false, browser = false} = {}) => {
    const enableHotModuleReplacement = !production && browser;

    const createPreset = enableHotModuleReplacement => {
        const presets = ['es2015', 'react', 'stage-0'];
        return enableHotModuleReplacement ? ['react-hmr', ...presets]  : presets
    };

    const presets = createPreset(enableHotModuleReplacement);

    const plugins = production ? [
        'transform-react-remove-prop-types',
        'transform-react-transform-elements',
        'transform-react-inline-elements'
    ] : [];

    return {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        options: {
            presets
        },
        exclude: PATH.modules
    };

};