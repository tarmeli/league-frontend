import React, { Component } from "react";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };
  }

  NameChangeHandler = e => {
    this.setState({
      playerName: e.target.value
    });
    console.log("set name as:", e.target.value);
  };

  addHandler(name) {
    this.props.onAddUser(name);
  }

  render() {
    return (
      <div className="field has-addons has-addons-centered">
        <p className="control">
          <input
            type="text"
            className="input"
            onChange={this.NameChangeHandler}
            value={this.state.playerName}
            placeholder="User Name"
          />
        </p>
        <p className="control">
          <button
            className="button is-primary"
            value="Add"
            onClick={() => this.addHandler(this.state.playerName)}
          >
            Add
          </button>
        </p>
        <br />
      </div>
    );
  }
}

export default AddUser;
