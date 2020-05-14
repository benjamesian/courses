import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ben", inner: "" },
      { name: "Carl", inner: "Nested Text" },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Benjamin", inner: "" },
        { name: "Carl", inner: "hehe" },
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, inner: "yeet" },
        { name: "Still Carl!", inner: "haha" },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
        >
          {this.state.persons[0].inner}
        </Person>
        <Person name={this.state.persons[1].name}>
          {this.state.persons[1].inner}
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App"));
  }
}

export default App;
