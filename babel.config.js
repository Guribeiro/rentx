module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx', '.svg', '.png', '.cjs'],
          root: ['./'],
          alias: {
            '@modules': './src/modules',
            '@shared': './src/shared',
          }
        }
      ]
    ]
  };
};
