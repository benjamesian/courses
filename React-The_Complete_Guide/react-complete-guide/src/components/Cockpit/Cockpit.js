import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  
  const assignedClasses = [];
  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>haha</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person List Visibility
      </button>
    </div>
  );
};

export default cockpit;
