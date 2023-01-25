const rootMain = require('./main.root');
const { mergeConfig } = require('vite');
const viteTsConfigPaths = require('vite-tsconfig-paths').default;
module.exports = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: './../',
        }),
      ],
    });
  },
  framework: '@storybook/react-vite',
};
