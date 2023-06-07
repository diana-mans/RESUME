import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [typescriptsLoader];
}
