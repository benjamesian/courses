import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Ben", inner: "" },
      { id: "b", name: "Carl", inner: "Nested Text" },
    ],
    showPersons: false,
  };

  nameChangedHandler = (e, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === id);
    persons[personIndex] = { ...persons[personIndex], name: e.target.value };
    this.setState({ persons });
  };

  togglePersonsHandler = (e) => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    const persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map((person, i) => (
          <Person
            key={person.id}
            name={person.name}
            click={this.deletePersonHandler.bind(this, i)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          >
            {person.inner}
          </Person>
        ))}
      </div>
    ) : null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person List Visibility
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App"));
  }
}

export default App;
