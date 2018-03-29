import React, { Component } from "react";

class AddMatchPanel extends Component {
  render() {
    const hidePanel = {
      display: this.props.isMatchPanelOpen ? "" : "none"
    };
    return <div style={hidePanel}>:D</div>;
  }
}

export default AddMatchPanel;
