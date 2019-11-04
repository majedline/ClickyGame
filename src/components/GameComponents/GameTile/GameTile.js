import React from "react";
import "./style.css";


function GameTile(props) {
    return (
        <div className="card">
            <div className="img-container">
                <span onClick={() => props.clickHandler(props.id, props.index)}>
                    <img src={"./img/" + props.image} alt={props.name} key={props.id} className="img-thumbnail"/>
                </span>
            </div>
        </div >
    );
}

export default GameTile;
