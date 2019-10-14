import React from 'react' // Building UI (no matter what env it is in)
import ReactDOM from 'react-dom' // Rendering react to the DOM
import './index.css' // All styles in index.css to be active in component

// Components
// State
// Lifecycle (fetching, some event when something is added to DOM etc)
// UI

// Use webpack to bundle, Babel to transform JSX->JS and future JS syntax->JS in browser
//npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

// How to define a component
class App extends React.Component {
    render(){
      // description to describe what UI looks like
      return (
        <div>Hello Ross</div>
      )
    }
}


// How to use a component
// Componenent, Where to put component
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
