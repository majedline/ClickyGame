import React, { Component } from "react";
import HeaderScore from "./Header/HeaderScore";
import HeaderAppName from "./Header/HeaderAppName";
import HeaderInstruction from "./Header/HeaderInstruction";
import Footer from "./Footer/Footer";
import GameArea from "./GameComponents/GameArea/GameArea";
import GameTitle from "./GameComponents/GameTitle";
import rickMortyData from "../data.json";

class Game extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    rickMortyData
  };

  // handle a cick event
  clickHandler = (id, index) => {

    // find the selected item
    const selectedData = this.state.rickMortyData[index];
    console.log(selectedData);

    let goodGuess = false;

    if (selectedData.clicked) {
      goodGuess = false;
    } else {
      goodGuess = true;
      selectedData.clicked = true;
    }

    let updatedRickMortyList = [...this.state.rickMortyData];
    updatedRickMortyList[index] = selectedData;

    console.log(updatedRickMortyList);

    if (goodGuess) {
      this.handleCorrectSelection(updatedRickMortyList);
    } else {
      this.handleInvalidSelection(updatedRickMortyList);

    }
  }

  handleCorrectSelection = (data) => {
    let newScore = this.state.currentScore;
    newScore++;
    const existingTopScore = this.state.topScore;
    this.updateState(newScore, existingTopScore, this.shuffle(data));
  };

  handleInvalidSelection = (data) => {
    let newTopScore = this.state.topScore;

    if (this.state.currentScore > this.state.topScore) {
      newTopScore = this.state.currentScore;
    }

    let arr = [...this.state.rickMortyData];
    arr.map(record => record.clicked = false);

    this.updateState(0, newTopScore, this.shuffle(arr));
  };

  updateState = (currentScore, topScore, rickMortyData) => {
    this.setState({
      currentScore: currentScore,
      topScore: topScore,
      rickMortyData: rickMortyData
    });
  }

  shuffle = (arr) => {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };


  componentDidMount() {
    const score = this.state.currentScore;
    const existingTopScore = this.state.topScore;
    let data = [...this.state.rickMortyData];
    this.updateState(score, existingTopScore, this.shuffle(data));
  }

  render() {
    return (
        <div className="container  header-color">
          <div className="row">
            <div className="col-4"><HeaderAppName /></div>
            <div className="col-4"><HeaderInstruction /></div>
            <div className="col-4"><HeaderScore gameScore={this.state.currentScore} gameTopScore={this.state.topScore} /></div>
          </div>

          <div className="row">
            <div className="col-12"><GameTitle /></div>
          </div>

          <div className="row">
            <div className="col-12">
              <GameArea
                data={this.state.rickMortyData}
                clickHandler={this.clickHandler} />
            </div>
          </div>


          <div className="row">
            <div className="col-12 footer-area"><Footer /></div>
          </div>


        </div>

    );
  }
}

export default Game;
