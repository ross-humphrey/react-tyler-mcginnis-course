import React from 'react'
import Hello from './Hello'

class App extends React.Component {
  render(){
    // passing in multiple props
    return <Hello
      username = 'tylermcginnis'
      authed = {true}
      logout = {() => alert('Logged Out!')}
      header={<h1>👋</h1>}
    />
  }
}

export default App

// if you pass a prop without a value, that value will be set to true
// <Profile authed={true}/>
// <Profile authed />
// These are equivalent
