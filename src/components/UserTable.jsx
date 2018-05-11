import React, { Component } from "react";
import UserRow from "./usertable/UserRow";

class UserTable extends Component {
  renderUsers() {
    return this.props.userData.map((item, key) => {
      return (
        <UserRow
          matchData={this.props.matchData}
          userData={this.props.userData}
          onDeleteUser={this.props.onDeleteUser}
          item={item}
          key={key}
          index={key}
        />
      );
    });
  }

  render() {
    return (
      <div className="box has-text-centered">
        <h1 className="title">Leaderboard</h1>
        <div className="centered-table">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Points</th>
                <th>Matches</th>
                <th>Wins</th>
                <th>Ties</th>
                <th>Losses</th>
                <th>Win%</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.renderUsers()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserTable;
