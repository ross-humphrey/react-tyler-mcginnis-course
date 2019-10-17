import React from 'react'

class Hello extends React Component {
  render(){
    console.log(this.props)
    return (
      <h2>
        {this.props.header} {this.props.username}
        {this.props.authed === true ?
          <button onClick = {this.props.logout}>Logout</button>}
      </h2>
    )
  }
}

export default Hello
