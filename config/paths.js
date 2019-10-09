

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pagePath = path.resolve(__dirname, '../src/pages')
const glob = require('glob')
const modulesDir = glob.sync(pagePath + '/*')
let pageList = []
modulesDir.forEach((file) => {
  pageList.push(file.split('/')[file.split('/').length - 1])
})
const fs = require('fs');
const url = require('url');
const isEnvProduction = process.env.NODE_ENV === 'production' ? true : false
const isEnvDevelopment = process.env.NODE_ENV !== 'production' ? true : false
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};
// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  // appHtml: () => {
  //   let arr = []
  //   pageList.forEach((pageDir) => {
  //     arr.push(new HtmlWebpackPlugin(
  //       Object.assign({}, {
  //           inject: true,
  //           template: '../public/index.html',
  //           filename: `${pageList.length === 1 ? 'index' : pageDir}.html`,
  //         },
  //         isEnvProduction ? {
  //           minify: {
  //             removeComments: true,
  //             collapseWhitespace: true,
  //             removeRedundantAttributes: true,
  //             useShortDoctype: true,
  //             removeEmptyAttributes: true,
  //             removeStyleLinkTypeAttributes: true,
  //             keepClosingSlash: true,
  //             minifyJS: true,
  //             minifyCSS: true,
  //             minifyURLs: true,
  //           },
  //         } :
  //         undefined
  //       )
  //     ))
  //   })
  //   return arr
  // },
  appIndexJs: resolveModule(resolveApp, 'src/pages/demo/index'),
  // appIndexJs: () => {
  //   let entries = {}
  //   pageList.forEach((pageDir) => {
  //     entries[pageDir] =
  //       [
  //         isEnvDevelopment &&
  //           require.resolve('react-dev-utils/webpackHotDevClient'),
  //         resolveModule(resolveApp, `src/pages/${pageDir}/index`),
  //       ].filter(Boolean)
  //   })
  //   return entries
  // },
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
};



module.exports.moduleFileExtensions = moduleFileExtensions;
