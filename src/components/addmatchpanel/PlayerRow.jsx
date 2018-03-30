import React, { Component } from "react";

class PlayerRow extends Component {
  render() {
    return <option>{this.props.item.name}</option>;
  }
}

export default PlayerRow;
