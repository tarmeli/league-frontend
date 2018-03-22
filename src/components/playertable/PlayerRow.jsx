import React, { Component } from "react";
import AddPoints from "./playerrow/AddPoints";
import PlayerPoints from "./playerrow/PlayerPoints";
import DeletePlayerButton from "./playerrow/DeletePlayerButton";

class PlayerRow extends Component {
  constructor() {
    super();
    this.state = {
      points: 0
    };
  }

  deletePlayerHandler(id, key) {
    this.props.onDeletePlayer(id, key);
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
    return (
      <tr key={this.props.index}>
        <td>{this.props.item.name}</td>
        <td>
          <PlayerPoints
            points={
              this.state.points === 0
                ? this.props.item.points
                : this.state.points
            }
          />
        </td>
        <td>
          <AddPoints
            onAddPoints={this.addPointsHandler.bind(this)}
            index={this.props.index}
            item={this.props.item}
          />
        </td>
        <td>
          <DeletePlayerButton
            onDeletePlayer={this.deletePlayerHandler.bind(this)}
            item={this.props.item}
            index={this.props.index}
          />
        </td>
      </tr>
    );
  }
}

export default PlayerRow;
