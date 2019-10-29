class Count extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState((state) => {
      return{
        count: state.count+1
      }
    })
  }
  decrement() {
    this.setState((state) => {
      return{
        count: state.count-1
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Count />,
  document.getElementById('app')
);
