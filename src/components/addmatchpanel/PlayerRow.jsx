import React, { Component } from "react";

class PlayerRow extends Component {
  render() {
    console.log("this.props in playerrow", this.props);
    return <option>{this.props.item.name}</option>;
  }
}

export default PlayerRow;
