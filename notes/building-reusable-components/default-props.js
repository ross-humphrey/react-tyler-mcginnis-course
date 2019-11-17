// Color prop
<StarRating color='#ff0000' />

// Without parsing color prop - what would happen?
<StarRating />
// Depends on the implementation of StarRating

//Consumer of the component to specify color, if they dont, default it,

// Class Component - Default props
// class component - add static property of defaultProps

// defaultProps is an object whose keys represent props being passed to the component,
// with default values for those props.

class StarRating extends React.Component {
  ...
}

StarRating.defaultProps = {
  color: '#ECB244'
}

// if someone consumes StarRating without passing the color prop then it will default



// Function Componment - Default props
// ES6 - introduced default parameters

function StarRating ({ color = '#ECB244' }) {
  ...
}

// If someone consumes StarRating component without parsing in color prop, Color
// will default to #ECB244
