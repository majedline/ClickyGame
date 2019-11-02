import React, { Component } from "react";
import HeaderScore from "./Header/HeaderScore";
import HeaderAppName from "./Header/HeaderAppName";
import HeaderInstruction from "./Header/HeaderInstruction";
import Footer from "./Footer/Footer";
import GameArea from "./GameArea/GameArea";
import GameTitle from "./GameArea/GameTitle";
import rickMortyData from "../data.json";

class Game extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    rickMortyData
  };

  handleCorrectSelection = () => {
    let newScore = this.state.currentScore;
    newScore++;
    const existingTopScore = this.state.topScore;
    this.setState({
      currentScore: newScore,
      topScore: existingTopScore
    });
  };


  handleInvalidSelection = () => {
    let newTopScore = this.state.topScore;

    if (this.state.currentScore > this.state.topScore) {
      newTopScore = this.state.currentScore;
    }

    this.setState({
      currentScore: 0,
      topScore: newTopScore
    });
  };

  render() {
    return (
      <div>
        <div class="container header-color">
          <div class="row">
            <div class="col-4"><HeaderAppName /></div>
            <div class="col-4"><HeaderInstruction /></div>
            <div class="col-4"><HeaderScore gameScore={this.state.currentScore} gameTopScore={this.state.topScore} /></div>
          </div>

          <div class="row">
            <div class="col-12"><GameTitle /></div>
          </div>

          <div class="row">
            <div class="col-12"><GameArea data={this.state.rickMortyData} /></div>
          </div>


          <div class="row">
            <div class="col-12 footer-area"><Footer /></div>
          </div>


        </div>

      </div>
    );
  }
}

export default Game;
