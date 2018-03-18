import React, {Component} from "react";
import logo from "./logo.svg";
import Button from "material-ui/Button";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => console.log(users));
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
      </div>
    );
  }
}

export default App;
