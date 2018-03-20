import React, { Component } from "react";

class PlayerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: props.playerData,
      points: "",
      pointsArray: []
    };
  }

  addPointsChangeHandler = (e, key) => {
    const newPoints = this.props.playerData.map((item, id) => {
      if (key !== id) {
        return item;
      } else {
        return {
          ...item,
          points: this.props.playerData[key].points + e.target.value
        };
      }
    });
    this.setState({
      points: newPoints
    });
    console.log("new points: ", newPoints);
  };

  deletePlayerHandler(id, key) {
    this.props.onDeletePlayer(id, key);
  }

  addPointsHandler(id, points, key, name) {
    this.props.onAddPoints(id, points, key, name);
  }

  render() {
    const Players = this.props.playerData.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.name}</td>
          <td>{item.points}</td>
          <td>
            <div className="field has-addons">
              <span className="control">
                <input
                  key={key}
                  type="number"
                  className="input"
                  placeholder="Add points"
                  value={this.props.playerData[key].points}
                  onChange={e => this.addPointsChangeHandler(e, key)}
                />
              </span>
              <span className="control">
                <button
                  className="button is-primary"
                  value="Add"
                  onClick={() =>
                    this.addPointsHandler(
                      item._id,
                      this.state.points,
                      key,
                      item.name
                    )
                  }
                >
                  Add
                </button>
              </span>
            </div>
          </td>
          <td>
            <button
              className="button is-danger is-pulled-right"
              onClick={() => this.deletePlayerHandler(item._id, key)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="centered-table">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{Players}</tbody>
        </table>
      </div>
    );
  }
}

export default PlayerTable;
