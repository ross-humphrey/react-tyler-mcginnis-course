// Managing State in react

// Advantage of React is: components manage their own state.
// Surface layer of concers can be minimized to the state of an individual component

// Two questions to answer
// How to add state to a react component ?
// How to update a React components state ?


// Adding state
// Use a constructor method

class Hello extends React.Component {
  constructor(props) {
    super(props) // Get into the habit of doing this

    this.state = { // Add state to instance
      name: 'Tyler'
    }
  }
  render() {
    return (
      <h1>Hello, {this.state.name}</h1>
    )
  }
}

// Updating State
// react gives you a helper method you can use to update the state of your component called setState living on this.
// There are two forms of setState. The first and most popular accepts and object as its first argument - merged with
// current State
updateName(newName){
  this.setState({
    name: newName
  })
}

// Whenever updateName is invoked, React will update the name property on the components state to be whatever newName is
// Because the state has changed - react will re-invoke the render method and get a new description of the UI
// based on the new state. Finally with thew new description of the UI, React will update the DOM

// FULL version

class Hello extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: 'Tyler'
    }
    this.updateName = this.updateName.bind(this) // bind is used to say 'whenever updateName is invoked always make sure its invoked in the context of the current component'
  }
  updateName(){
    this.setState({
      name: 'Mikenzi'
    })
  }
  render(){
    return (
      <React.Fragment>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.updateName}>change name</button>
      </React.Fragment>
    )
  }
}

// The other way
// setState accepts a function as its first argument instead of an object
// function is then passd the curernt state and the object it returns will be merged into the new State

addFriend(newFriend){ // takes newFriend and adds its to the state.friends
  this.setState((state) => {
    return {
      friends: state.friends.concat(newFriend)
    }
  })
}

// When to use what?
// Depends on what changes you are making to the state.
// If updating current state based on previous - use the function (setState)
// For everything else use the object setState.

// The reason is state updates may be async. There is lots happening under the
// hood when setState is called. For react to guarantee that the state value is what you'd expect
// it to be they have you pass them a function that receives state. Rather than relying on referencing State
// from the component instance.
