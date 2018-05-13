import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

class PlayerRow extends Component {
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
            onChange={e => this.props.handleResultChange(e, this.props.index)}
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
          className="button is-danger is-outlined"
          value={this.props.index}
          onClick={e => this.props.handleRemovePlayer(e, this.props.index)}
        >
          <FontAwesomeIcon icon={faTimes} />
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
              onChange={e => this.props.handlePlayerChange(e, this.props.index)}
            >
              <option value="Choose a player" disabled hidden>
                Choose a player
              </option>
              {this.playerRow()}
            </select>
          </div>
        </div>
        <div className="control">{this.addPlayerButtons()}</div>
      </div>
    );
  }
}

export default PlayerRow;
