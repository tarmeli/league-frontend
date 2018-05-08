import React, { Component } from "react";

class UserRow extends Component {
  constructor() {
    super();
    this.state = {
      winPercentage: 0,
      matches: 0,
      wins: 0,
      ties: 0,
      losses: 0,
      points: 0
    };
  }

  deleteUserHandler(id, key) {
    this.props.onDeleteUser(id, key);
  }

  calculateStats() {
    return this.props.matchData.map((item, key) => {
      return item.players.map((innerItem, innerKey) => {
        const localId = Object.keys(innerItem);
        const outsideId = this.props.item._id;
        const result = innerItem[localId];

        if (String(localId) === outsideId && String(result) === "win") {
          this.setState(prevState => {
            return {
              wins: prevState.wins + 1,
              points: prevState.points + 2,
              matches: prevState.matches + 1
            };
          });
        } else if (String(localId) === outsideId && String(result) === "loss") {
          this.setState(prevState => {
            return {
              losses: prevState.losses + 1,
              matches: prevState.matches + 1
            };
          });
        } else if (String(localId) === outsideId && String(result) === "tie") {
          this.setState(prevState => {
            return {
              ties: prevState.ties + 1,
              points: prevState.points + 1,
              matches: prevState.matches + 1
            };
          });
        } else {
          return this.setState({
            winPercentage:
              this.state.wins / this.state.wins +
              this.state.losses +
              this.state.ties * 100
          });
        }
        return null;
      });
    });
  }

  componentWillMount() {
    setTimeout(() => {
      this.calculateStats();
    }, 500);
  }

  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.item.name}</td>
        <td>{this.state.points}</td>
        <td>{this.state.matches}</td>
        <td>{this.state.wins}</td>
        <td>{this.state.ties}</td>
        <td>{this.state.losses}</td>
        <td>
          {isNaN(
            this.state.wins /
              (this.state.wins + this.state.losses + this.state.ties) *
              100
          ) || null
            ? 0
            : this.state.wins /
              (this.state.wins + this.state.losses + this.state.ties) *
              100}%
        </td>
      </tr>
    );
  }
}

export default UserRow;
