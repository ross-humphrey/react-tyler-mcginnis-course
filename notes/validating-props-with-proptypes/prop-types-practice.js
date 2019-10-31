class Badge extends React.Component {
  render() {
    const { authed, style, name, handle, img, addFriend } = this.props

    if (authed !== true) {
      return <p>You need to log in.</p>
    }

    return (
      <div style={style}>
        <img
          style={{width: 200, borderRadius: '50%'}}
          src={img}
        />
        <h1 style={{margin: 5}}>{name}</h1>
        <h3 style={{margin: 5}}>@{handle}</h3>
        <button onClick={addFriend}>Add Friend</button>
      </div>
    )
  }
}

Badge.propTypes = {
  authed: PropTypes.bool,
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  addFriend: PropTypes.func.isRequired,
}

// The prop-types package has already been included for you. You can access it via "PropTypes".

console.log(PropTypes)

ReactDOM.render(
  <Badge
    name='Tyler McGinnis'
    handle='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
    authed={true}
    style={{
      width: 300,
      margin: '0 auto',
      border: '3px solid #000',
      padding: 10,
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    addFriend={() => alert('Added!')}
  />,
  document.getElementById('app')
);
