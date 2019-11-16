// Pass data to components - like setting attributes on HTML

<a href='/' class='link'>Home</a>

<Clock time='12:49' period='AM'/>

// Can pass in data via the opening and closing tag of the element

<h1>You can have text between tags.</h1>

<div>
  <h1> You can also have</h1>
  <p>elements  between tags </p>
</div>

// Regular HTML elements - now you have react components instead

<Header>You can have text between tags.</Header>

<Container>
  <h1>You can have elements</h1>
  <p>between tags</h1>
</Container>

// Instead of using data (props) into component via setting attributes
// Pass data into components via opening and closing tags

// WHATEVER IS BETWEEN OPENING AND CLOSING TAG OF ELEMENT WILL BE ACCESSIBLE
// VIA props.children

function Header ({ children }){
  return (
    <h1 className='header'>
      { children }
    </h1>
  )
}

function Container({ children }){
  return (
    <div>
      <Logo />
      {children}
    </div>
  )
}

// Allows you to abstract common UI/functionallity into its own reusable component
