class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul id = "friends">
        {this.props.friends.map((friend, index)=>(
          <li key={index}>{friend}</li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <List friends={[
    'Mikenzi',
    'Cash',
    'Steven',
    'Kimmy',
    'Doug'
  ]} />,
  document.getElementById('app')
);
