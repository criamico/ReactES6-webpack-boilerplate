# ReactES6-webpack-boilerplate

Boilerplate for a React ES6 project compiled in webpack. Features:
- React 16 / Webpack 4
- ES6 transpiled via Babel
- Sass module enabled
- ES6/JSx linters enabled
- Code splitting enabled
- Live reloading with webpack-dev-server in Dev mode
- Tests with Karma + Webpack + Enzyme + Jasmine
- Webpack production configuration generates already minified assets and deploys in /dist folder


## Installation and use
Currently used versions of node/npm:
6.10.0/6.1.0

Grab the npm version specified in .nvmrc: (only works on linux/mac OS)
`nvm use`

- Install npm dependencies:
`npm i`

- To run in dev mode (dev server runs on `http://localhost:8080/`):
`npm run dev`

- To generate the production build:
`npm build`

- To run tests with Karma (debug on `http://localhost:9876/`)
`npm run test`

- To execute tests once (continuous integration mode):
`npm run test-ci`

- To execute a web server on the local production build (for testing purpose, runs on `http://localhost:8000/`):
`npm run http-server`
