import React from 'react';
import TestComponent from './components/TestComponent.jsx';

class App extends React.Component {
  render() {
    return (
    <div className="example">
      <h1>ReactES6-webpack-boilerplate</h1>
      <TestComponent />
       <ul>
        <li>ES6 React transpiled via Babel</li>
        <li>Sass module enabled</li>
        <li>ES6/JSx linters enabled</li>
        <li>Support to Jasmine tests enabled </li>
        <li>
          Live reloading with webpack-dev-server in Dev mode
        </li>
        <li>
          Webpack Production configuration generates index.hmtl, bundle.js and
          main.css already minified, deploys assets in <em>/dist</em> folder
        </li>
      </ul>
      <h2>...Happy coding!</h2>
    </div>
    );
  }
}
export default App;
