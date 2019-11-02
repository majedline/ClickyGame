import React from "react";

function HeaderScore(props) {
  return (
    <h3>Score: {props.gameScore} | Top Score: {props.gameTopScore}</h3>
  );
}

export default HeaderScore;
