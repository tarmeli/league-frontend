import React, { Component } from "react";

class AddMatchButton extends Component {
  buttonClickHandler() {
    this.props.onClickHandler();
  }

  render() {
    const buttonText =
      this.props.isMatchPanelOpen === false ? "Open Match Panel" : "Add Match";
    return (
      <div>
        <button
          className="button is-primary"
          onClick={() => this.buttonClickHandler()}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default AddMatchButton;
