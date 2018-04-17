import React, { Component } from "react";
import PlayerRow from "./addmatchpanel/PlayerRow";
import _ from "lodash";

class AddMatchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlayerRow: [],
      playerValue: [],
      resultValue: [],
      disableButton: true
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
      }),
      playerValue: this.state.playerValue.filter((s, sidx) => {
        console.log("sidx", sidx);
        return Number(e.target.value) !== sidx;
      }),
      resultValue: this.state.resultValue.filter((s, sidx) => {
        console.log("sidx", sidx);
        return Number(e.target.value) !== sidx;
      }),
      disableButton: this.state.addPlayerRow.length === 0 ? false : true
    });
  }

  renderAddPlayerRow() {
    return (
      <PlayerRow
        key={this.state.addPlayerRow.length}
        addPlayerRow={this.state.addPlayerRow}
        userData={this.props.userData}
        handleRemovePlayer={this.handleRemovePlayer.bind(this)}
        handleResultChange={this.handleResultChange.bind(this)}
        handlePlayerChange={this.handlePlayerChange.bind(this)}
      />
    );
  }

  addPlayerHandler(e) {
    e.preventDefault();
    this.setState({
      addPlayerRow: this.state.addPlayerRow.concat([this.renderAddPlayerRow()])
    });
  }

  handlePlayerChange = e => {
    this.setState({
      playerValue: this.state.playerValue.concat(e.target.value),
      disableButton: this.state.resultValue.length === 0 ? true : false
    });
  };

  handleResultChange = e => {
    this.setState({
      resultValue: this.state.resultValue.concat(e.target.value),
      disableButton: this.state.playerValue.length === 0 ? true : false
    });
  };

  handleReset() {
    this.setState({
      addPlayerRow: [],
      resultValue: [],
      playerValue: [],
      disableButton: true
    });
  }

  addHandler(name) {
    this.props.onAddUser(name);
  }

  handleSubmit() {
    this.props.onAddMatch(
      _.zipObject(this.state.playerValue, this.state.resultValue)
    );
  }

  disableSubmitButton() {
    if (this.state.playerValue.length || this.state.resultValue.length === 0) {
      return true;
    } else {
      console.log("Joo");
      return false;
    }
  }

  renderAddMatch() {
    return (
      <div className="box has-text-centered">
        <h1 className="title">Add a match</h1>
        {this.state.addPlayerRow}
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button
              type="button"
              disabled={this.state.disableButton}
              className="button is-success"
              onClick={() => this.handleSubmit()}
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
              onClick={() => this.handleReset()}
              className="button is-light"
              value="Cancel"
            >
              Reset
            </button>
          </div>
        </div>
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
