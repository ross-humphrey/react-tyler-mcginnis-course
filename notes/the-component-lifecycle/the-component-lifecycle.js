// The Component Lifecycle

// Manage state
// Receive data thru props
// Describe UI

// AJAX
// Listeners
// New props

// How to hook into tasks in a component lifecycle
// 1. When the component gets added to the DOM (mounting)
// 2. When the component updates its state or recieves new data via props (updating)
// 3. When the component gets removed from the DOM (unmounting)

// mounting
// Set up the components initial state
// Render a DOM node
// Make an ajax request
// Set up listeners (i.e via Websockets or Firebase)

// Initial state

class Hello extends React.Component {
  // use a constructor (JS script thing)
  constructor(props){
    super(props)

    this.state = {
      name: 'Tyler'
    }
  }
  // render a DOM node (should be a pure function)
  render() {
    return (
      <h1>Hello, {this.state.name}</h1>
    )
  }
}

// componentDidMount() -> Invoked only one time when the component is first mounted to the DOM

class Hello extends React.Component {
  // use a constructor (JS script thing)
  constructor(props){
    super(props)

    this.state = {
      name: null
    }
  }
  componentDidMount() {
    fetchUser(this.props.username)
      .then((user)) => {
        this.setState({ user })
      })
  }
  // render a DOM node (should be a pure function)
  render() {
    return (
      if ( user === null){
        return <Loading />
      }
      return <Dashboard data={this.state.user}/>
    )
  }
}

// Set up Listeners
// componentDidMount

// Updating
// Re-render the UI with the updated state or props
// Re-fecting data
// Re-setting a listener

// Re-Render
// via render, setState
// React - the view is a relfection of your state

// Re-fetching data
// componentDidUpdate
// Invoked after the component's local state changes or after receiving new props, but not on the initial Render

class Repos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: null
    }
  }
  componentDidMount() {
    fetchRepos(this.props.language)
      .then((repos) => {
        this.setState({ repos })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.language !== prevProps.language){
      this.setState({repos: null})

      fetchRepos(this.props.language)
        .then((repos)) => {
          this.setState({ repos })
        })
    }
  }
  render() {
    if (this.state.repos === null) {
      return <Loading />
    }
    return <Grid data={this.state.repos} />
  }
}

// Resetting a listener - similair to re-fetching (componentDidUpdate)

// unmounting
// this is where we do cleanup (like removing listeners) - to avoid memory leaks
// componentWillUnmount

class Repos extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      repos: null
    }
  }
  componentDidMount() {
    this.removeListener = listenToRepos(this.props.language, (repos) => {
      this.setState({ repos })
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  render() {
    if (this.state.repos === null) {
      return <Loading />
    }
    return <Grid data={this.state.repos} />
  }
}

// Overview
class App extends React.Component {
  constructor(props){
    // establishes initial state
    super(props)
    this.state = {}
  }

  componentDidMount(){
    //Invoked once mounted to DOM
    // Good for making AJAX requests.
  }

  componentDidUpdate(){
    // Invoked immediately after updating occurs
    // Good for AJAX requests based on changing props or DOM ops
  }

  componentWillUnmount(){
    // Called right before a component is unmounted
    // Good for cleaning up listeners
  }
  render() {
    return ...
  }


// There are more getDerivedStateFromProps, shoudlComponentUdpate, getSnapshotBeforeUpdate
