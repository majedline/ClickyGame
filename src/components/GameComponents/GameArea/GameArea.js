import React from "react";
import GameTile from "../GameTile/GameTile";


function GameArea(props) {
  return (
    <div className="grid-container">
      {props.data.map((rickMortyData, index) => (
        <GameTile
          id={rickMortyData.id}
          key={rickMortyData.id}
          name={rickMortyData.name}
          image={rickMortyData.image}
          clickHandler={props.clickHandler}
          index={index}
        />
      ))}

    </div>
  );
}

export default GameArea;
