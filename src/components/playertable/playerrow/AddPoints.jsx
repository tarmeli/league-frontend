import React, { Component } from "react";

class AddPoints extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0
    };
  }

  clickHandler(id, value, key, name) {
    console.log("id", id, "index", key, "value", value, "name", name);
    this.props.onAddPoints(id, value, key, name);
    this.setState({
      inputValue: 0
    });
  }

  addPointsChangeHandler(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div className="field has-addons">
        <span className="control">
          <input
            key={this.props.index}
            type="number"
            className="input"
            placeholder="Add points"
            value={
              this.state.inputValue === 0 ? "Add points" : this.state.inputValue
            }
            onChange={e => this.addPointsChangeHandler(e, this.props.index)}
          />
        </span>
        <span className="control">
          <button
            className="button is-primary"
            value="Add"
            onClick={() =>
              this.clickHandler(
                this.props.item._id,
                Number(this.state.inputValue),
                this.props.index,
                this.props.item.name
              )
            }
          >
            Add
          </button>
        </span>
      </div>
    );
  }
}

export default AddPoints;
