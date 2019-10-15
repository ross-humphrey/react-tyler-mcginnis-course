// Function definition
function add (x,y) {
  return x + y
}

// Function invocation
add(1, 2)

// Componenet definition
class Icon extends Component {}

// Component invocation???
<Icon />

// Abstraction layer between JSX and whats going on in react

// To create our object representation of a DOM node (aka React element)

const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)

// Three elements as input
// first - tag name string
// second - any attributes you want the element to have
// third - contents or the children of the element

// createElement will return this object:

{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}

// When rendered to the dom
<div id='login-btn'>Login</div>

// Once you understand elements, understanding componenets is a smooth transition
// Component is a function or class which optionally accepts input and returns a React element

function Button({ onLogin }){
  return React.createElement(
    'div',
    {id: 'login-btn', onClick: onLogin},
    'Login'
  )
}

// Button that accepts an onLogin input and returns a react element.

// So far we have covered creating React elements with the type property of native
// HTML elements - but you can also pass in other react components to the first argument

const element = React.createElement(
  User,
  {name: 'Tyler McGinnis'},
  null
)

// Unlike HTML tag name, if react sees a class or function as first arg, it will then check to see what
// element it renders, given the props.

function Button({ addFriend }) {
  return React.createElement(
    "button",
    { onClick: addFriend },
    "Add Friend"
  )
}

function User({ name, addFriend}) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      name
    ),
    React.createElement(Button, { addFriend })
  )
}

// Swap out the createElement invocations with what they actually return
function Button({ addFriend }) {
  return {
    type: 'button',
    props: {
      onClick: addFriend,
      children: 'Add Friend'
    }
  }
}

function User({ name, addFriend}) {
  return {
    type: 'div',
    props: {
      children: [
        {
          type: 'p',
          props: {
            children: name
          }
        },
        {
          type: Button,
          props: {
            addFriend
          }
        }
      ]
    }
  }
}


// In the DOM tree it looks like this
{
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: {
          children: 'Tyler McGinnis'
        }
      },
      {
        type: Button,
        props: {
          onClick: addFriend,
          children: 'Add Friend'
        }
      }
    ]
  }
}

// JSX is always going to get compiled to React.createElement invocations
// typically via Babel


// Writing a component like this <Icon/> - is creating an element-
// after JSX is compiled thats what is happening

React.createElement(Icon, null)
