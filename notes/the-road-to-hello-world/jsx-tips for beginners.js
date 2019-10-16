// Variables in JSX

// Rendering a variable in JSX

// Wrap expression in single curly braces

import React from 'react'

function isLoading(){
  return true
}

function isAuthed(){
  return true
}

function isNew(){
  return true
}

function showWarning(){
  return true
}

if (user && authenticated){}

export default class App extends React.Component {

  render() {

    // Render nothing
    // if (isLoading() === true) {
    //   return null
    // }

    // Can only ever return one top level component
    // i.e wrap your return in a <div>, but we are creating a div we don't need
    // React.Fragment solves this

    // React.Fragment
    const name = 'Tyler'

    // We always capitalize React components - the reason is ...
    // That's how react tells the difference between custom app
    // component and a built in HTML element

    // means you dont have to wrap in a div
    return (
      <React.Fragment>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleDateString()}</p>
        <p>What is 2+2? {2+2}</p>
      </React.Fragment>
    )

    // const authed = isAuthed()
    //const firstLogin = isNew()

    // Logical and to look after not having to return null
    // return (
    //   <div>
    //     <h1>😎</h1>
    //     {showWarning() === true && <h3>⚠</h3>}
    //   </div>
    // )

    // Conditional
    // return (
    //   <div>
    //     <h1>😎</h1>
    //     {showWarning() === true
    //       ? <h1>⚠</h1>
    //       : null
    //     }
    //   </div>
    // )

    // Ternary operator
    // return (
    //   <div>
    //     <h1>😎</h1>
    //     {authed === true
    //       ? <h1>Welcome back!</h1>
    //       : <h1>Login to see you dashboard</h1>
    //     }
    //   </div>
    // )


    // Conditional Rendering
    // if (firstLogin === true){
    //   return <h1>Welcome!</h1>
    // }
    // else if (authed === true){
    //   return <h1>Welcome Back!</h1>
    // }
    // else{
    //   return <h1>Login to see your dashboard</h1>
    // }

    // Variables in JSX
    // const name = 'Tyler'
    //
    // return (
    //   <div>
    //     <h1>Hello, {name}</h1>
    //     <p>Today is {new Date().toLocaleDateString()}</p>
    //     <p>What is 2+2? {2+2}</p>
    //   </div>
    // )
  }
}
// To do conditional rendering - it uses JS rather than increase API surface area
