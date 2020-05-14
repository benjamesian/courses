import React from "react";
// import "./Person.css";
// import Radium from "radium";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    border: 1px solid yellow;
  }
`;

const person = (props) => {
  // const style = {
  //   border: "1px solid green",
  //   // "@media (min-width: 500px)": {
  //   //   border: "1px solid yellow",
  //   // },
  // };

  const style = {
    border: "1px solid green",
  };

  return (
    // <div className="Person">
    <StyledDiv>
      <p>
        I'm {props.name}, here is a random number:{" "}
        {Math.floor(Math.random() * 100)}!
      </p>
      <p style={style} onClick={props.click}>
        Click Here!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

// export default Radium(person);
export default person;
