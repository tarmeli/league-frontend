import React, { Component } from "react";

class AddMatchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlayerRow: [],
      nextId: 0
    };
  }

  renderLoading(string) {
    return <div>Loading {string}</div>;
  }

  handleRemovePlayer(e) {
    console.log("removed id:", e.target.value);
    this.setState({
      nextId: this.state.nextId - 1,
      addPlayerRow: this.state.addPlayerRow.filter(
        (s, sidx) => Number(e.target.value) !== sidx
      )
    });
  }

  addPlayerButtons() {
    return (
      <p className="control">
        <button
          className="button is-primary"
          value="Win"
          onClick={this.addHandler}
        >
          Win
        </button>

        <button
          className="button is-primary"
          value="Loss"
          onClick={this.addHandler}
        >
          Loss
        </button>
        <button
          className="button is-primary"
          value="Tie"
          onClick={this.addHandler}
        >
          Tie
        </button>
        <button
          className="button is-danger"
          value={this.state.nextId}
          onClick={e => this.handleRemovePlayer(e)}
        >
          Remove
        </button>
      </p>
    );
  }

  playerRow() {
    return this.props.userData.map((item, key) => {
      return <option key={key}>{item.name}</option>;
    });
  }

  renderAddPlayerRow() {
    return (
      <div
        key={this.state.nextId}
        className="field has-addons has-addons-centered"
      >
        <div className="control">
          <div className="select">
            <select>{this.playerRow()}</select>
          </div>
        </div>
        {this.addPlayerButtons()}
      </div>
    );
  }

  addPlayerHandler(e) {
    this.setState({
      nextId: this.state.nextId + 1,
      addPlayerRow: this.state.addPlayerRow.concat([this.renderAddPlayerRow()])
    });
  }

  renderAddMatch() {
    return (
      <div className="box has-text-centered">
        <h1 className="title">Add a match</h1>
        {this.state.addPlayerRow}
        <button
          className="button is-primary"
          value="Add Player"
          onClick={e => this.addPlayerHandler(e)}
        >
          Add Player
        </button>
      </div>
    );
  }

  render() {
    if (this.props.userData.length === 0) {
      console.log("LOADING");
      return this.renderLoading("Add Match");
    } else {
      return this.renderAddMatch();
    }
  }
}

export default AddMatchPanel;
