module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': './assets',
            '@services': './src/services',
            '@redux': './src/redux',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
