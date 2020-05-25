import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "../Persons/Person/Person";

const persons = (props) => props.persons.map((person, i) => (
    <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        click={props.clicked.bind(null, i)}
        changed={(e) => props.changed(e, person.id)}
      >
        {person.inner}
      </Person>
    </ErrorBoundary>
  ));

export default persons;
