import React, { Component } from "react";
import _ from "lodash";

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerValue: [],
      resultValue: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    let playerValueArray = [];
    let resultValueArray = [];
    for (const key in this.props.matchData.players) {
      playerValueArray.push(
        String(Object.keys(this.props.matchData.players[key]))
      );
      resultValueArray.push(
        String(Object.values(this.props.matchData.players[key]))
      );
    }
    this.setState({
      playerValue: playerValueArray,
      resultValue: resultValueArray
    });
  }

  playerRow() {
    return this.props.userData.map((item, key) => {
      return (
        <option key={key} value={item._id} id={key}>
          {item.name}
        </option>
      );
    });
  }

  renderPlayerName(id) {
    return this.props.userData.map((item, key) => {
      if (item._id === id) {
        return item.name;
      } else {
        return null;
      }
    });
  }

  handlePlayerChange = (e, key) => {
    console.log(key);
    let tempPlayerValue = this.state.playerValue;
    tempPlayerValue[key] = e.target.value;
    this.setState({
      playerValue: tempPlayerValue
    });
  };

  handleResultChange = (e, key) => {
    console.log(key);
    let tempResultValue = this.state.resultValue;
    tempResultValue[key] = e.target.value;
    console.log("tempresultvalue", tempResultValue);
    this.setState({
      resultValue: tempResultValue
    });
  };

  handleSubmit() {
    console.log(this);
    this.props.onUpdateMatch(
      _.zipObject(this.state.playerValue, this.state.resultValue),
      this.props.matchData._id,
      this.props.matchName
    );
    this.props.toggleEditPanel();
  }

  renderEditBody() {
    return this.props.matchData.players.map((item, key) => {
      return (
        <div key={key} className="field has-addons has-addons-centered">
          <div className="control">
            <div className="select">
              <select
                defaultValue={String(Object.keys(item))}
                onChange={e => this.handlePlayerChange(e, key)}
              >
                <option value={Object.keys(item)} disabled hidden>
                  {this.renderPlayerName(String(Object.keys(item)))}
                </option>
                {this.playerRow()}
              </select>
            </div>
          </div>
          <div className="select">
            <select
              defaultValue={String(Object.values(item))}
              onChange={e => this.handleResultChange(e, key)}
            >
              <option disabled hidden>
                {Object.values(item) === "win"
                  ? "Win"
                  : Object.values(item) === "loss"
                    ? "Loss"
                    : "Tie"}
              </option>
              <option value="win">Win</option>
              <option value="loss">Loss</option>
              <option value="tie">Tie</option>
            </select>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={this.props.classes.join(" ")}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit {this.props.matchName}</p>
          </header>
          <section className="modal-card-body">{this.renderEditBody()}</section>
          <footer className="modal-card-foot">
            <div className="buttons has-addons is-centered">
              <span
                className="button is-success"
                onClick={() => this.handleSubmit()}
              >
                Save Changes
              </span>
              <span className="button" onClick={this.props.toggleEditPanel}>
                Cancel
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
