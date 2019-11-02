import React from "react";
import GameTile from "./GameTile";


function GameArea(props) {
  return (
    <div>
      {props.data.map(rickMortyData => (
        <GameTile
          id={rickMortyData.id}
          name={rickMortyData.name}
          image={rickMortyData.image}
        />
      ))}

    </div>
  );
}

export default GameArea;
