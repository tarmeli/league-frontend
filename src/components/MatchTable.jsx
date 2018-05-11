import React, { Component } from "react";
import MatchRow from "./matchtable/MatchRow";

class MatchTable extends Component {
  renderMatchRow() {
    return this.props.matchData.map((item, key) => {
      console.log("item", item._id);
      return (
        <MatchRow
          key={key}
          players={item.players}
          userData={this.props.userData}
          matchName={item.matchName}
          onDeleteMatch={this.props.onDeleteMatch}
          gameId={item._id}
        />
      );
    });
  }

  render() {
    return <div className="box has-text-centered">{this.renderMatchRow()}</div>;
  }
}

export default MatchTable;
