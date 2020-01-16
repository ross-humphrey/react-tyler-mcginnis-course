/**
  Higher Order components

  > Are a pattern
  > More general 'Componenet Architecture' pattern
  > Higher order components give you a pattern to fulfil the D.R.Y principle

**/

// An example of some JS components that repeat themselves - carrying out the same functionallity

// Simple SVG Icon
class Info extends React.Component {
  constructor(super){
    super(props)

    this.state = {
      hovering: false
    }

    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }
  mouseOver(){
    this.setState({hovering: true})
  }
  mouseOut(){
    this.setState({hovering: false})
  }
  render(){
    return (
      <>
        {this.state.hovering === true
            ? <ToolTip id={this.props.id}/>
            :null}
        <svg
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          className="Icon-svg Icon--hoverable-svg"
          height={this.props.height}
          viewBox="0 0 16 16" width="16">
            <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      </>
    )
  }
}

class TrendChart extends React.Component {
  constructor(super){
    super(props)

    this.state = {
      hovering: false
    }

    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }
  mouseOver(){
    this.setState({hovering: true})
  }
  mouseOut(){
    this.setState({hovering: false})
  }
  render(){
    return (
      <>
        {this.state.hovering === true
            ? <ToolTip id={this.props.id}/>
            :null}
        <Chart
          type='trend'
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        />
      </>
    )
  }
}

class DailyChart extends React.Component {
  constructor(super){
    super(props)

    this.state = {
      hovering: false
    }

    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }
  mouseOver(){
    this.setState({hovering: true})
  }
  mouseOut(){
    this.setState({hovering: false})
  }
  render(){
    return (
      <>
        {this.state.hovering === true
            ? <ToolTip id={this.props.id}/>
            :null}
        <Chart
          type='daily'
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
      </>
    )
  }
}

// Not exactly DRY - we want to avoid duplicating our hover logic when a new component needs it.

// Before getting to the bit about avoiding duplication across the code above - cover off
// > callbacks and higher order functions

// in JS functions are first-class-objects. Meaning they can be assigned to a variable, passed as an arg to a function or returned.

function add (x, y) {
  return x + y
}

function addFive (x, addReference) { // Function parsed as a parameter
  return addReference(x, 5) // invoke the function parsed in
}

addFive(10, add) //15

/**
  When pass in a function as an argument - the function is called a 'callback' and
  the function you are passing the callback function to is called a 'higher order function'
  Below is the same code - but with the concepts labelled explicitly by use of variable names
**/

function add (x, y) {
  return x + y
}

function higherOrderFunction (x, callback){
  return callback(x, 5)
}

higherOrderFunction(10, add)

// The pattern is all over JS

/**
  Higher Order Components are:

  > A component
  > Takes in a component as an arg
  > Returns a new component
  > Component it returns can render the original component parsed in
**/

function higherOrderComponent (Component) {
  return class extends React.Component {
    render() {
      return <Component />
    }
  }
}

// Of the Chart functions above we can now build a higher order component.

// Invoke the function as so
const InfoWithHover = withHover(Info)
const TrendChartWithHover = withHover(TrendChart)
const DailyChartWithHover = withHover(DailyChart)

function Info ({ hovering, height }) {
  return (
    <>
      {hovering === true
        ? <Tooltip id={this.props.id} />
        : null}
      <svg
        className="Icon-svg Icon--hoverable-svg"
        height={height}
        viewBox="0 0 16 16" width="16">
          <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </>
  )
}

function withHover(Component) {
  return class WithHover extends React.Component {
    constructor(super){
      super(props)

      this.state = {
        hovering: false
      }

      this.mouseOver = this.mouseOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }
    mouseOver(){
      this.setState({hovering: true})
    }
    mouseOut(){
      this.setState({hovering: false})
    }
    render(){
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component hovering={this.state.hovering}
        </div>
      );
    }
  }
}
