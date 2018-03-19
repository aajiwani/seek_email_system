import React, {Component} from "react";
import logo from "./logo.svg";
import Button from "material-ui/Button";
import "./App.css";
import UsersList from "./component/UsersList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users,
        });
        console.log(users);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
        {this.state.users.length > 0 ? (
          <UsersList users={this.state.users} />
        ) : null}
      </div>
    );
  }
}

export default App;
