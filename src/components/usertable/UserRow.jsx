import React, { Component } from "react";
import UserPoints from "./userrow/UserPoints";
import UserMatches from "./userrow/UserMatches";
import UserWins from "./userrow/UserWins";
import UserWinPercent from "./userrow/UserWinPercent";
import UserLosses from "./userrow/UserLosses";
import UserTies from "./userrow/UserTies";
import DeleteUserButton from "./userrow/DeleteUserButton";

class UserRow extends Component {
  constructor() {
    super();
    this.state = {
      points: 0
    };
  }

  deleteUserHandler(id, key) {
    this.props.onDeleteUser(id, key);
    this.setState({
      points: 0
    });
  }

  addPointsHandler(id, value, key, name) {
    this.props.onAddPoints(id, value, key, name);
    this.setState({
      points: this.props.item.points + value
    });
  }

  render() {
    const pointsArray = this.props.matchData.map((item, key) => {
      const pointsInner = item.players.map((item, key) => {
        let counter = 0;
        if (item.win) {
          counter = 2;
        } else if (item.tie) {
          counter = 1;
        }

        return counter;
      });
      return pointsInner;
    });

    return (
      <tr key={this.props.index}>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.name}</td>
      </tr>
    );
  }
}

export default UserRow;
