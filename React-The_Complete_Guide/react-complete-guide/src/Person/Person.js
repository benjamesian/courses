import React from "react";
import "./Person.css";

const person = (props) => {
  const style = {
    border: "1px solid green",
  };

  return (
    <div className="Person">
      <p>
        I'm {props.name}, here is a random number:{" "}
        {Math.floor(Math.random() * 100)}!
      </p>
      <p style={style} onClick={props.click}>
        Click Here!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
