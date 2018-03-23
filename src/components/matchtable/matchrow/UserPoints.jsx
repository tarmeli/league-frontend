import { Component } from "react";

class UserPoints extends Component {
  render() {
    return this.props.wins * 2 + this.props.ties * 1;
  }
}

export default UserPoints;
