import React, { Component } from "react";
import UserTable from "./components/UserTable";
import AddMatchButton from "./components/AddMatchButton";
import AddMatchPanel from "./components/AddMatchPanel";
import "bulma/css/bulma.css";
import "./App.css";
import MatchTable from "./components/MatchTable";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      matchData: [],
      isMatchPanelOpen: false
    };
  }

  fetchUserData() {
    const url = "http://localhost:8080/users";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        console.log("result", result);
        this.setState({
          userData: result
        });
      });
  }

  fetchMatchData() {
    const url = "http://localhost:8080/matches";

    fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        console.log("result", result);
        this.setState({
          matchData: result
        });
      });
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchMatchData();
  }

  deleteUser(id, key) {
    const url = "http://localhost:8080/users";

    console.log("Key:", key + " Id", id);

    fetch(url + "/" + id, { method: "DELETE" })
      .then(result => result.json())
      .then(result => {
        console.log("result at deleteUser", result);
        this.setState({
          userData: result
        });
      });
  }

  onDeleteUser(id, key) {
    this.deleteUser(id, key);
  }

  addUser(name) {
    const url = "http://localhost:8080/users";

    console.log("Name:", name);

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
          userData: [...this.state.userData, result]
        })
      );
  }

  onAddUser(name) {
    this.addUser(name);
  }

  onAddPoints(id, points, key, name) {
    console.log("id:", id, "points", points, "key", key, "name", name);
    console.log("this.userData:", this.state.userData);
    const url = "http://localhost:8080/users";
    console.log("id: " + id, "points: " + points);

    fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        points: this.state.userData[key].points + points
      })
    })
      .then(result => result.json())
      .then(result =>
        this.setState({
          userData: result
        })
      );
  }

  openMatchPanel() {
    this.setState({
      isMatchPanelOpen: this.state.isMatchPanelOpen === false ? true : false
    });
  }

  render() {
    return (
      <div className="App container is-fluid">
        <div className="box has-text-centered">
          <h1 className="title">Leaderboard</h1>
          <UserTable
            userData={this.state.userData}
            onDeleteUser={this.onDeleteUser.bind(this)}
            onAddPoints={this.onAddPoints.bind(this)}
          />
        </div>
        <MatchTable matchData={this.state.matchData} />
        <div className="box has-text-centered">
          <AddMatchButton
            onClickHandler={this.openMatchPanel.bind(this)}
            isMatchPanelOpen={this.state.isMatchPanelOpen}
          />
          <AddMatchPanel isMatchPanelOpen={this.state.isMatchPanelOpen} />
        </div>
      </div>
    );
  }
}

export default App;
