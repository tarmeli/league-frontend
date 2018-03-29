import React, { Component } from "react";

class MatchRow extends Component {
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
    const wasTie = this.props.item.tie === true ? "x" : "";
    const wasWin = this.props.item.win === true ? "x" : "";
    const wasLoss =
      this.props.item.win === false && this.props.item.tie !== true ? "x" : "";
    const playerName = this.props.userData.map((item, key) => {
      if (this.props.item.playerId === item._id) {
        return item.name;
      }
    });
    return (
      <tbody>
        <tr key={this.props.index}>
          <td> {playerName} </td>
          <td>{wasWin}</td>
          <td>{wasLoss}</td>
          <td>{wasTie}</td>
        </tr>
      </tbody>
    );
  }
}

export default MatchRow;
