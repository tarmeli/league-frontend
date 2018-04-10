import React, { Component } from "react";
import UserTable from "./components/UserTable";
import AddMatchPanel from "./components/AddMatchPanel";
import "bulma/css/bulma.css";
import "./App.css";
import MatchTable from "./components/MatchTable";
import AddUser from "./components/AddUser";

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
    const url = "http://localhost:8080/users";

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
        <AddUser onAddUser={this.onAddUser.bind(this)} />
        <AddMatchPanel userData={this.state.userData} />
        <UserTable
          userData={this.state.userData}
          matchData={this.state.matchData}
          onDeleteUser={this.onDeleteUser.bind(this)}
          onAddPoints={this.onAddPoints.bind(this)}
        />
        <MatchTable
          matchData={this.state.matchData}
          userData={this.state.userData}
        />
      </div>
    );
  }
}

export default App;
