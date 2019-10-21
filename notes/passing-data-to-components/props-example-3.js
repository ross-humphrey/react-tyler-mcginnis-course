class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <div>
        <h1>Name:  {this.props.name}</h1>
        <p> Firstname: {this.props.firstname} </p>
        <p> Surname: {this.props.surname} </p>
      </div>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username} </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img}/>
        <Label name={this.props.user.name} firstname={this.props.user.firstname} surname={this.props.user.surname}/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

// Still passing in an object here - prop called user - is an object
ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis',
    firstname: 'Ross',
    surname: 'Humphrey'

  }} />,
  document.getElementById('app')
);
