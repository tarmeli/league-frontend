import React, { Component } from "react";
import MatchRow from "./matchtable/MatchRow";

class MatchTable extends Component {
  deleteMatchHandler(id, key) {
    this.props.onDeleteMatch(id, key);
  }

  addPointsHandler(id, value, key, name) {
    this.props.onAddPoints(id, value, key, name);
  }

  render() {
    const MatchesOuter = this.props.matchData.map((item, key) => {
      const MatchesInner = item.players.map((item, key) => {
        return (
          <MatchRow
            onAddPoints={this.addPointsHandler.bind(this)}
            onDeleteMatch={this.deleteMatchHandler.bind(this)}
            userData={this.props.userData}
            item={item}
            key={key}
            index={key}
          />
        );
      });
      return (
        <div className="box has-text-centered" key={key}>
          <h1 className="title">{item.matchName}</h1>
          <div className="centered-table">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Win</th>
                  <th>Loss</th>
                  <th>Tie</th>
                </tr>
              </thead>
              {MatchesInner}
            </table>
          </div>
        </div>
      );
    });

    return <div>{MatchesOuter}</div>;
  }
}

export default MatchTable;
