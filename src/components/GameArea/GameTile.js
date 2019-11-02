import React from "react";

function GameTile(props) {
    return (
        <div>
            {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> */}
            <span>
                <img src={"./img/" + props.image} alt={props.name} key={props.id} class="img-thumbnail rounded" />
            </span>
        </div >
    );
}

export default GameTile;
