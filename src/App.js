import React, { Component } from "react";
import PlayerTable from "./components/PlayerTable";
import AddPlayer from "./components/AddPlayer";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:8080/players";

    fetch(url, { method: "GET" })
      .then(result => result.json())
      .then(result =>
        this.setState({
          playerData: result
        })
      );
  }

  deletePlayer(id, key) {
    const url = "http://localhost:8080/players";

    console.log("Key:", key + " Id", id);
    const playerData = this.state.playerData.filter((player, i) => i !== key);
    this.setState({
      playerData
    });

    fetch(url + "/" + id, { method: "DELETE" }).then(result => result.json());
  }

  onDeletePlayer(id, key) {
    this.deletePlayer(id, key);
  }

  addPlayer(name) {
    const url = "http://localhost:8080/players";

    console.log("Name:", name);

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        points: "0"
      })
    })
      .then(result => result.json())
      .then(result =>
        this.setState({
          playerData: [...this.state.playerData, result]
        })
      );
  }

  onAddPlayer(name) {
    this.addPlayer(name);
  }

  onAddPoints(id, points, key, name) {
    const url = "http://localhost:8080/players";
    console.log("id: " + id, "points: " + points);
    console.log("playerData.points: ", this.state.playerData[key].points);
    fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        points: this.state.playerData[key].points + Number(points)
      })
    });
  }

  render() {
    return (
      <div className="App container is-fluid">
        <div className="box has-text-centered">
          <AddPlayer onAddPlayer={this.onAddPlayer.bind(this)} />
          <PlayerTable
            playerData={this.state.playerData}
            onDeletePlayer={this.onDeletePlayer.bind(this)}
            onAddPoints={this.onAddPoints.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
