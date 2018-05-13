import React, { Component } from "react";
import UserRow from "./usertable/UserRow";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSync from "@fortawesome/fontawesome-free-solid/faSync";

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

  renderUserTable() {
    return (
      <div>
        <div className="is-pulled-right">
          <button className="button" onClick={() => this.forceUpdate()}>
            <span>
              <FontAwesomeIcon icon={faSync} />
            </span>
          </button>
        </div>
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

  renderLoading() {
    return <span>Loading</span>;
  }

  render() {
    const display =
      this.props.userData.length === 0 ? { display: "none" } : { display: "" };
    return (
      <div className="box has-text-centered" style={display}>
        {this.renderUserTable()}
      </div>
    );
  }
}

export default UserTable;
