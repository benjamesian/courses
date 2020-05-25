import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
