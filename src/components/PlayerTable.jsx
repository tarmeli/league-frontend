import React, { Component } from "react";
import PlayerRow from "./playertable/PlayerRow";

class PlayerTable extends Component {
  deletePlayerHandler(id, key) {
    this.props.onDeletePlayer(id, key);
  }

  addPointsHandler(id, value, key, name) {
    this.props.onAddPoints(id, value, key, name);
  }

  render() {
    const Players = this.props.playerData.map((item, key) => {
      console.log("key:", key);
      return (
        <PlayerRow
          onAddPoints={this.addPointsHandler.bind(this)}
          onDeletePlayer={this.deletePlayerHandler.bind(this)}
          item={item}
          key={key}
          index={key}
        />
      );
    });

    return (
      <div className="centered-table">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{Players}</tbody>
        </table>
      </div>
    );
  }
}

export default PlayerTable;
