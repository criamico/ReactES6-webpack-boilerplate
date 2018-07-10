# ReactES6-webpack-boilerplate

Boilerplate for a React ES6 project compiled in webpack. Features:
- React 16
- ES6 transpiled via Babel
- Sass module enabled
- ES6/JSx linters enabled
- Live reloading with webpack-dev-server in Dev mode
- Support for tests with Jasmine enabled
- Webpack Production configuration generates already minified assets and deploys in /dist folder
- Test enabled

## Installation and use
Currently used versions of node/npm:
6.10.0/6.1.0

Grab the npm version specified in .nvmrc: (only works on linux/mac OS)
`nvm use`

Install npm dependencies:

`npm install`

To run in dev mode:

`npm run dev`

This enables the server to run on `http://localhost:8080/`.

When a file changes the server automatically reloads the page on the browser.

Since in dev mode ESLint is enabled, warnings are printed on the console but errors stop the compilation.

To generate the production build:

`npm build`
bundle.js and main.css are minified and deployed in /prod folder

To run tests:

`npm run test`
