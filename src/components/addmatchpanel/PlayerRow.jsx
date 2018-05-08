import React, { Component } from "react";

class PlayerRow extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      resultValue: ""
    };
  }

  playerRow() {
    return this.props.userData.map((item, key) => {
      return (
        <option key={key} value={item._id}>
          {item.name}
        </option>
      );
    });
  }

  addPlayerButtons() {
    return (
      <div>
        <div className="select">
          <select
            defaultValue="Choose result"
            onChange={this.props.handleResultChange}
          >
            <option disabled hidden>
              Choose result
            </option>
            <option value="win">Win</option>
            <option value="loss">Loss</option>
            <option value="tie">Tie</option>
          </select>
        </div>
        <button
          className="button is-danger"
          value={this.props.addPlayerRow.length}
          onClick={e => this.props.handleRemovePlayer(e)}
        >
          Remove
        </button>
      </div>
    );
  }

  render() {
    return (
      <div
        key={this.props.addPlayerRow.length}
        className="field has-addons has-addons-centered"
      >
        <div className="control">
          <div className="select">
            <select
              defaultValue="Choose a player"
              onChange={this.props.handlePlayerChange}
            >
              <option value="Choose a player" disabled hidden>
                Choose a player
              </option>
              {this.playerRow()}
            </select>
          </div>
        </div>
        <div className="control">
          {this.addPlayerButtons(this.props.addPlayerRow.length)}
        </div>
      </div>
    );
  }
}

export default PlayerRow;
