import { Component } from "react";

class UserWinPercent extends Component {
  render() {
    const matches = this.props.wins + this.props.losses + this.props.ties;

    return this.props.wins / matches * 100 + "%";
  }
}

export default UserWinPercent;
