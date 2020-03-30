const {
  addLessLoader,
  addWebpackPlugin,
  adjustStyleLoaders,
  fixBabelImports,
  override,
  enableEslintTypescript,
  removeModuleScopePlugin,
  babelInclude,
} = require('customize-cra');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
// const themeStylePath = require.resolve('@project/shared/src/styles/theme.scss');
const themeStylePath = require.resolve('@project/components-typescript/src/theme.scss');
const path = require("path");

module.exports = override(
  babelInclude([path.resolve('src'), path.resolve("../../components-typescript/src")]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  enableEslintTypescript(),
  addWebpackPlugin(new AntdScssThemePlugin(themeStylePath)),
  adjustStyleLoaders(rule => {
    const loaders = rule.use;
    const newUse = [];
    loaders.forEach(loaderObj => {
      if (typeof loaderObj === 'object') {
        let renamedLoader = null;
        if (loaderObj.loader.indexOf('sass-loader') !== -1) renamedLoader = 'sass-loader';
        if (loaderObj.loader.indexOf('less-loader') !== -1) renamedLoader = 'less-loader';
        if (renamedLoader) {
          loaderObj.loader = renamedLoader;
          newUse.push(AntdScssThemePlugin.themify(loaderObj));
        } else {
          newUse.push(loaderObj);
        }
      } else {
        newUse.push(loaderObj);
      }
    });
    rule.use = newUse;
    return rule;
  }),
);
