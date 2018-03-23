import React, { Component } from "react";

class AddMatchPanel extends Component {
  render() {
    console.log(this.props.isMatchPanelOpen);
    const hidePanel = {
      display: this.props.isMatchPanelOpen ? "" : "none"
    };
    return <div style={hidePanel}>:D</div>;
  }
}

export default AddMatchPanel;
