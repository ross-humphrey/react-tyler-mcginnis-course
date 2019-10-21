class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.
    return (
      <ul id = "friends">
        {this.props.friends.map((friend) => (
          <li key={friend.id}>
            {friend.name}
          </li>
        ))}
      </ul>
    )
  }
}

ReactDOM.render(
  <List friends={[
    { id: 893, name: 'Mikenzi' },
    { id: 871, name: 'Cash' },
    { id: 982, name: 'Steven' },
    { id: 061, name: 'Kimmy' },
    { id: 117, name: 'Doug' }
  ]} />,
  document.getElementById('app')
);
