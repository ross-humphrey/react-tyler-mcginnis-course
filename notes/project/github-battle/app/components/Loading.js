import React from 'react'
import PropTypes from 'prop-types'

// Makes component more reusable - as style sheet does not need to be downloaded separately
const styles = {
  content = {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default class Loading extends React.Component {
  constructor() {
    super(props)

    this.state = {
      content: props.text
    }
  }

  componentDidMount () {
    const { speed, text } = this.props
    // set instance property - to access in other points in the component
    this.interval = window.setInterval(() =>{
      this.state.content === text + '...'
      ? this.setState({ content: text })
      : this.setState(({content}) => ({content: content + '.' }))
    }, speed)
  }
  // Look after the unmounting - to prevent memory leak
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  render(){
    return (
      <p style = {styles.content}>
        {this.state.content}
      </p>
    )
  }
}

// Make the component more reusable
Loading propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

// Default properties
Loading defaultProps = {
  text: 'Loading',
  speed: 300,
}
