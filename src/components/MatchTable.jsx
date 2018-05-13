import React, { Component } from "react";
import MatchRow from "./matchtable/MatchRow";

export default class MatchTable extends Component {
  renderMatchRow() {
    return this.props.matchData.map((item, key) => {
      return (
        <MatchRow
          key={key}
          players={item.players}
          userData={this.props.userData}
          matchData={item}
          matchName={item.matchName}
          onDeleteMatch={this.props.onDeleteMatch}
          onUpdateMatch={this.props.onUpdateMatch}
          gameId={item._id}
        />
      );
    });
  }

  render() {
    const display =
      this.props.matchData.length === 0 ? { display: "none" } : { display: "" };
    return (
      <div className="box has-text-centered" style={display}>
        {this.renderMatchRow()}
      </div>
    );
  }
}
