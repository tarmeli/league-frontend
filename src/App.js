import React, { Component } from "react";
import UserTable from "./components/UserTable";
import AddMatchPanel from "./components/AddMatchPanel";
import MatchTable from "./components/MatchTable";
import AddUser from "./components/AddUser";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      matchData: [],
      resultArray: []
    };
  }

  fetchUserData() {
    const url = "https://leaguebackend.herokuapp.com/users";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          userData: result,
          matchData: this.state.matchData
        });
      });
  }

  fetchMatchData() {
    const url = "https://leaguebackend.herokuapp.com/matches";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          matchData: result,
          userData: this.state.userData
        });
      });
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchMatchData();
  }

  deleteUser(id) {
    const url = "https://leaguebackend.herokuapp.com/users";

    fetch(url + "/" + id, { method: "DELETE" })
      .then(result => result.json())
      .then(result => {
        this.setState({
          userData: result,
          matchData: this.state.matchData
        });
      });
  }

  onDeleteUser(id) {
    this.deleteUser(id);
  }

  deleteMatch(id) {
    const url = "https://leaguebackend.herokuapp.com/matches";
    console.log(id);

    fetch(url + "/" + id, { method: "DELETE" })
      .then(result => result.json())
      .then(result => {
        console.log("result", result);
        this.setState({
          matchData: result,
          userData: this.state.userData
        });
      });
  }

  onDeleteMatch(id) {
    this.deleteMatch(id);
  }

  addUser(name) {
    const url = "https://leaguebackend.herokuapp.com/users";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
      .then(result => result.json())
      .then(result =>
        this.setState({
          userData: [...this.state.userData, result],
          matchData: this.state.matchData
        })
      );
  }

  onAddUser(name) {
    this.addUser(name);
  }

  addMatch(matchResults) {
    const url = "https://leaguebackend.herokuapp.com/matches";
    console.log("matchResults", matchResults);

    for (const player in matchResults) {
      const actualPlayer = player;
      const result = { [actualPlayer]: matchResults[player] };
      console.log("result", result);
      this.setState({
        resultArray: this.state.resultArray.push(result)
      });
    }

    console.log("resultarray", this.state.resultArray);

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        matchName:
          this.state.matchData.length === 0
            ? "Match " + 1
            : "Match " + (this.state.matchData.length + 1),
        players: this.state.resultArray
      })
    })
      .then(result => result.json())
      .then(result =>
        this.setState({
          matchData: [...this.state.matchData, result],
          resultArray: [],
          userData: this.state.userData
        })
      );
  }

  onAddMatch(matchResults) {
    this.addMatch(matchResults);
  }

  updateMatch(updatedResults, matchId, matchName) {
    const url = "https://leaguebackend.herokuapp.com/matches";
    console.log("matchid", matchId);
    console.log("updatedresults", updatedResults);

    for (const player in updatedResults) {
      const actualPlayer = player;
      const result = { [actualPlayer]: updatedResults[player] };
      console.log("result", result);
      console.log("this.state.resultArray", this.state.resultArray);
      this.setState({
        resultArray: this.state.resultArray.push(result)
      });
      console.log(this.state.resultArray);
    }

    fetch(url + "/" + matchId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        matchName: matchName,
        players: this.state.resultArray
      })
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          resultArray: [],
          matchData: result,
          userData: this.state.userData
        });
      });
  }

  onUpdateMatch(updatedResults, matchId, matchName) {
    this.updateMatch(updatedResults, matchId, matchName);
  }

  render() {
    return (
      <div className="App container is-fluid">
        <AddUser onAddUser={this.onAddUser.bind(this)} />
        <AddMatchPanel
          userData={this.state.userData}
          onAddMatch={this.onAddMatch.bind(this)}
        />
        <UserTable
          userData={this.state.userData}
          matchData={this.state.matchData}
          onDeleteUser={this.onDeleteUser.bind(this)}
        />
        <MatchTable
          matchData={this.state.matchData}
          userData={this.state.userData}
          onDeleteMatch={this.onDeleteMatch.bind(this)}
          onUpdateMatch={this.onUpdateMatch.bind(this)}
        />
      </div>
    );
  }
}

export default App;
