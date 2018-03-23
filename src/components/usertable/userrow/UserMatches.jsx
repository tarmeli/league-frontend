import { Component } from "react";

class UserMatches extends Component {
  render() {
    return this.props.wins + this.props.losses + this.props.ties;
  }
}

export default UserMatches;
