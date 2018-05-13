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
      disableSubmitButton: true
    };
  }

  handleRemovePlayer(e, index) {
    console.log(e.target.value);
    this.setState({
      addPlayerRow: this.state.addPlayerRow.filter((item, key) => {
        console.log("addplayerrow", item, "key", key, "index", index);
        return key !== index;
      }),
      playerValue: this.state.playerValue.filter((item, key) => {
        console.log("playervalue", item, "key", key, "index", index);
        return key !== index;
      }),
      resultValue: this.state.resultValue.filter((item, key) => {
        console.log("resultvalue", item, "key", key, "index", index);
        return key !== index;
      }),
      disableSubmitButton: this.state.addPlayerRow.length === 0 ? false : true
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
        index={this.state.addPlayerRow.length}
      />
    );
  }

  addPlayerHandler(e) {
    e.preventDefault();
    this.setState({
      addPlayerRow: this.state.addPlayerRow.concat([this.renderAddPlayerRow()]),
      disableSubmitButton: true
    });
  }

  handlePlayerChange = (e, key) => {
    const tempPlayerValue = this.state.playerValue;
    tempPlayerValue[key] = e.target.value;
    const playerValueNullCheck = [];
    this.setState(
      {
        playerValue: tempPlayerValue
      },
      () => {
        this.state.playerValue.map(item => {
          playerValueNullCheck.push(item);
          return null;
        });
        this.setState({
          disableSubmitButton:
            playerValueNullCheck.length === this.state.resultValue.length
              ? false
              : true
        });
      }
    );
  };

  handleResultChange = (e, key) => {
    let tempResultValue = this.state.resultValue;
    tempResultValue[key] = e.target.value;
    const resultValueNullCheck = [];
    this.setState(
      {
        resultValue: tempResultValue
      },
      () => {
        this.state.resultValue.map(item => {
          resultValueNullCheck.push(item);
          return null;
        });
        this.setState({
          disableSubmitButton:
            resultValueNullCheck.length === this.state.playerValue.length
              ? false
              : true
        });
      }
    );
  };

  handleReset() {
    this.setState({
      addPlayerRow: [],
      resultValue: [],
      playerValue: [],
      disableSubmitButton: true
    });
  }

  addHandler(name) {
    this.props.onAddUser(name);
  }

  handleSubmit() {
    this.props.onAddMatch(
      _.zipObject(this.state.playerValue, this.state.resultValue)
    );
    this.setState({
      addPlayerRow: [],
      resultValue: [],
      playerValue: [],
      disableSubmitButton: true
    });
  }

  renderAddMatch() {
    return (
      <div>
        <h1 className="title">Add a match</h1>
        {this.state.addPlayerRow}
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button
              type="button"
              disabled={this.state.disableSubmitButton}
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
    const display =
      this.props.userData.length === 0 ? { display: "none" } : { display: "" };
    return (
      <div className="box has-text-centered" style={display}>
         {this.renderAddMatch()}
      </div>
    );
  }
}

export default AddMatchPanel;
