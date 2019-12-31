const path = require('path');

const storybookTsConfigPath = path.resolve(__dirname, '../tsconfig.json');

module.exports = async ({ config }) => {
  // typescript
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: storybookTsConfigPath,
        },
      },
    ],
  });

  /**
   * Ignores the file-system module from Winston. Without this,
   * webpack will try to package up the file-system module which
   * won't work since the target of the storybook webpack output
   * is the browser
   */
  config.node = {};
  config.node['fs'] = 'empty';

  /**
   * Tells webpack to look for ts and tsx file extensions so
   * we don't have to define file extensions when we import
   * typescript modules
   */
  config.resolve.extensions.push('.ts', '.tsx', '.scss');

  /**
   * Enables SVGR for storybook which is included by default
   * in Create React App. Allows us to import SVGs and use
   * them as react components
   * (Documentation)[https://www.smooth-code.com/open-source/svgr/docs/webpack/]
   *
   * The below strips out SVG and then uses SVGR to load SVGs
   */
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      },
      'url-loader',
    ],
  });

  return config;
};
