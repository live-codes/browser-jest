const { nodeModulesPolyfillPlugin } = require('esbuild-plugins-node-modules-polyfill');
const esbuild = require('esbuild');

/** @type {Partial<esbuild.BuildOptions>} */
const baseOptions = {
  bundle: true,
  minify: true,
  format: 'esm',
  define: {
    global: 'window',
    'process.env.NODE_ENV': '"production"',
    'process.env.TERM': '"dumb"',
    'process.stdout.isTTY': 'false',
  },
  logLevel: 'error',
  plugins: [
    nodeModulesPolyfillPlugin({
      globals: {
        process: true,
        Buffer: true,
      },
    }),
  ],
  outdir: 'dist',
};

esbuild.build({
  ...baseOptions,
  entryPoints: ['src/index.ts'],
});
