import React, { Component } from "react";

class AddMatchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlayerRow: []
    };
  }

  renderLoading(string) {
    return <div>Loading {string}</div>;
  }

  handleRemovePlayer(e) {
    console.log("removed id:", e.target.value);
    this.setState({
      addPlayerRow: this.state.addPlayerRow.filter((s, sidx) => {
        console.log("sidx", sidx);
        return Number(e.target.value) !== sidx;
      })
    });
  }

  addPlayerButtons(key) {
    return (
      <div>
        <div className="select">
          <select defaultValue="Choose result">
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
          value={this.state.addPlayerRow.length}
          onClick={e => this.handleRemovePlayer(e)}
        >
          Remove
        </button>
      </div>
    );
  }

  playerRow() {
    return this.props.userData.map((item, key) => {
      return (
        <option key={key} value={item.name}>
          {item.name}
        </option>
      );
    });
  }

  renderAddPlayerRow() {
    return (
      <div
        key={this.state.addPlayerRow.length}
        className="field has-addons has-addons-centered"
      >
        <div className="control">
          <div className="select">
            <select defaultValue="Choose a player">
              <option value="Choose a player" disabled hidden>
                Choose a player
              </option>
              {this.playerRow()}
            </select>
          </div>
        </div>
        <div className="control">
          {this.addPlayerButtons(this.state.addPlayerRow.length)}
        </div>
      </div>
    );
  }

  addPlayerHandler(e) {
    e.preventDefault();
    this.setState({
      addPlayerRow: this.state.addPlayerRow.concat([this.renderAddPlayerRow()])
    });
  }

  handleCancel() {
    this.setState({
      addPlayerRow: []
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log("SUBMIT!", data);
  }

  renderAddMatch() {
    return (
      <div className="box has-text-centered">
        <h1 className="title">Add a match</h1>
        <form onSubmit={this.handleSubmit}>
          {this.state.addPlayerRow}
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button
                className="button is-success"
                value="Submit"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                className="button is-primary"
                value="Add Player"
                onClick={e => this.addPlayerHandler(e)}
              >
                Add Player
              </button>
            </div>
            <div className="control">
              <button
                onClick={() => this.handleCancel()}
                className="button is-light"
                value="Cancel"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    if (this.props.userData.length === 0) {
      return this.renderLoading("Add Match");
    } else {
      return this.renderAddMatch();
    }
  }
}

export default AddMatchPanel;
