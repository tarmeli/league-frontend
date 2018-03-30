import React, { Component } from "react";
import PlayerRow from "./addmatchpanel/PlayerRow";

class AddMatchPanel extends Component {
  addHandler(e) {
    console.log(e.target.value);
  }

  render() {
    const playerRow = this.props.userData.map((item, key) => {
      return <PlayerRow item={item} key={key} index={key} />;
    });

    return (
      <div className="box has-text-centered">
        <h1 className="title">Add a match</h1>
        <div className="field has-addons has-addons-centered">
          <div className="control">
            <div className="select">
              <select>{playerRow}</select>
            </div>
          </div>
          <p className="control">
            <button
              className="button is-primary"
              value="Win"
              onClick={this.addHandler}
            >
              Win
            </button>
          </p>
          <p className="control">
            <button
              className="button is-primary"
              value="Tie"
              onClick={this.addHandler}
            >
              Tie
            </button>
          </p>
          <p className="control">
            <button
              className="button is-primary"
              value="Loss"
              onClick={this.addHandler}
            >
              Loss
            </button>
          </p>
          <button
            className="button is-primary"
            value="Add"
            onClick={this.addHandler}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddMatchPanel;
