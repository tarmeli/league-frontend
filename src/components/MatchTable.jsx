import React, { Component } from "react";
import MatchRow from "./matchtable/MatchRow";

class MatchTable extends Component {
  deleteMatchHandler(id, key) {
    this.props.onDeleteMatch(id, key);
  }

  renderMatchRow() {
    return this.props.matchData.map((item, key) => {
      return (
        <MatchRow
          key={key}
          players={item.players}
          userData={this.props.userData}
          matchName={item.matchName}
        />
      );
    });
  }

  render() {
    return <div className="box has-text-centered">{this.renderMatchRow()}</div>;
  }
}

export default MatchTable;
