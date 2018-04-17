import React, { Component } from "react";

class MatchRow extends Component {
  renderPlayerName(outsideItem) {
    return this.props.userData.map((item, key) => {
      if (this.props.userData[key]._id === outsideItem) {
        return this.props.userData[key].name;
      } else {
        return null;
      }
    });
  }

  renderResultRows() {
    return this.props.players.map((item, key) => {
      return (
        <tr key={key}>
          <td>{this.renderPlayerName(String(Object.keys(item)))}</td>
          <td>{item[Object.keys(item)] === "win" ? "x" : ""}</td>
          <td>{item[Object.keys(item)] === "tie" ? "x" : ""}</td>
          <td>{item[Object.keys(item)] === "loss" ? "x" : ""}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.matchName}</h1>
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Win</th>
              <th>Tie</th>
              <th>Loss</th>
            </tr>
          </thead>
          <tbody>{this.renderResultRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default MatchRow;
