import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import players from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    athletes: players,
    clickedPlayerIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedPlayerIds = this.state.clickedPlayerIds;

    if(clickedPlayerIds.includes(id)){
      this.setState({ clickedPlayerIds: [], score: 0, status:  "Game Over! You came up short. Click to play again!" });
      return;
    }else{
      clickedPlayerIds.push(id)

      if(clickedPlayerIds.length === 8){
        this.setState({score: 8, status: "Blazers Win! RIP CITY! Click to play again!", clickedPlayerIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ players, clickedPlayerIds: clickedPlayerIds, score: clickedPlayerIds.length, status: " " });

      for (let i = players.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
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
          {this.state.athletes.map(bballPlayer => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={bballPlayer.id}
              key={bballPlayer.id}
              image={bballPlayer.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>&copy;2020 Tim Biehl</p>
        </footer>
        
    </div>

    
    );
  }
}

export default App;