import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Ben", inner: "" },
      { id: "b", name: "Carl", inner: "Nested Text" },
      { id: "c", name: "Egret", inner: "Nested" },
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
    let btnClass = [];

    let persons = null;
    if (this.state.showPersons) {
      persons = (
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
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>haha</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Person List Visibility
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App"));
  }
}

export default App;
