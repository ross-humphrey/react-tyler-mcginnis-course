// In react - lots of components that take in some data via props,
// Output some UI, components with just a render method

class HelloWorld extends React.Component {
  render () {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

// This is a lot of overhead.
// Functions and function composition can be applied to react components with component composition
// Can be a plain old function just with ONLY a render method.

function HelloWorld(props){
  return (
    <div>Hello {props.name}</div>
  )
}

// A lot cleaner and makes React componetns more natural since its just a function
