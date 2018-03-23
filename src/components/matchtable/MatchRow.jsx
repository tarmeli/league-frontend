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
    console.log(this.props.item);

    const wasTie = this.props.item.tie === true ? "x" : "";
    const wasWin = this.props.item.win === true ? "x" : "";
    const wasLoss =
      this.props.item.win === false && this.props.item.tie !== true ? "x" : "";

    return (
      <tbody>
        <tr key={this.props.index}>
          <td> {this.props.item.name} </td>
          <td>{wasWin}</td>
          <td>{wasLoss}</td>
          <td>{wasTie}</td>
        </tr>
      </tbody>
    );
  }
}

export default MatchRow;
