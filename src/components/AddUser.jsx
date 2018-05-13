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
  };

  addHandler(e) {
    this.props.onAddUser(this.state.playerName);
    e.preventDefault();
    this.setState({
      playerName: ""
    });
  }

  render() {
    return (
      <div className="box has-text-centered">
        <h1 className="title">Add a player to the league</h1>
        <form onSubmit={e => this.addHandler(e)}>
          <div className="field has-addons has-addons-centered">
            <p className="control">
              <input
                type="text"
                className="input"
                onChange={this.NameChangeHandler}
                value={this.state.playerName}
                placeholder="Player Name"
              />
            </p>
            <p className="control">
              <button type="submit" className="button is-primary" value="Add">
                Add
              </button>
            </p>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
