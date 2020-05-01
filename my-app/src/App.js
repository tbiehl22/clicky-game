import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    pups,
    clickedPlayerIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedPlayerIds = this.state.clickedPlayerIds;

    if(clickedPlayerIds.includes(id)){
      this.setState({ clickedPlayerIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPlayerIds.push(id)

      if(clickedPlayerIds.length === 8){
        this.setState({score: 8, status: "You Won! RIP CITY! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ pups, clickedPuppyIds: clickedPlayerIds, score: clickedPlayerIds.length, status: " " });

      for (let i = pups.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pups[i], pups[j]] = [pups[j], pups[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Portland Trail Blazers Clicky Game!</h1>
          <p className="App-intro">
            Click on an image to earn points, but try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.pups.map(puppy => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
        
    </div>
    );
  }
}

export default App;