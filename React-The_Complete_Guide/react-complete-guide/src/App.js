import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.hov ? "red" : "green"};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hov ? "salmon" : "lightgreen"};
    color: black;
  }
`;

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

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
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push("red");
    }
    if (this.state.persons.length < 2) {
      classes.push("bold");
    }

    return (
      // <StyleRoot>
      //  StyleRoot needed for radium with media queries, keyframes (maybe other things too)
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>haha</p>
        <StyledButton hov={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Person List Visibility
        </StyledButton>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App"));
  }
}

// export default Radium(App);
export default App;
