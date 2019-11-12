// Forms in React - Controlled vs Uncontrolled

// State lives in React Components not in the DOM
// Forms - State lives in the DOM

// FORMS IN REACT

// Controlled Components - the REACT way (lives in the component)
// Uncontrolled Components - state lives in the DOM, grab state from DOM


 // Controlled Component example
 class Form extends React.Component {
   constructor(props){
     super(props)

     this.state = {
       email: ''
     }

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
     this.setState({
       email: e.target.value
     })
   }
   handleSubmit(){
     alert('The email is ' + this.state.email)
   }

   render(){
     return(
       <div>
         <pre>The email is {this.state.email}</pre>
         <br />
         <input
           type='text'
           placeholder='Email'
           value={this.state.email}
           onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
       </div>
     )
   }
 }

// Uncontrolled component version
class Form extends React.Component {
  constructor(props){
    super(props)

    this.input = React.createRef('')
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    alert('The email is ' + this.input.current.value)
  }
  render(){
    return (
      <div>
        <input
          type='text'
          placeholder='Email'
          ref={this.input}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }


}
// YOU SHOULD PREFER THE CONTROLLED APPROACH
