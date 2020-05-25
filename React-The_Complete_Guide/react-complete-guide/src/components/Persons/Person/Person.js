import React from "react";
import classes from "./Person.css";

const person = (props) => (
  <div className={classes.Person}>
    <p>
      I'm {props.name}, here is a random number:{" "}
      {Math.floor(Math.random() * 100)}!
    </p>
    <p onClick={props.click}>Click Here!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

export default person;
