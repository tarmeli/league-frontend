import React, { Component } from "react";
import EditModal from "./matchrow/EditModal";
import DeleteWarning from "./matchrow/DeleteWarning";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";

class MatchRow extends Component {
  constructor() {
    super();
    this.state = {
      editPanelOpen: false,
      deleteWarning: false
    };
  }

  renderPlayerName(outsideItem) {
    return this.props.userData.map((item, key) => {
      if (this.props.userData[key]._id === outsideItem) {
        return this.props.userData[key].name;
      } else {
        return null;
      }
    });
  }

  toggleEditPanel() {
    this.setState({
      editPanelOpen: this.state.editPanelOpen === false ? true : false
    });
  }

  toggleDeleteWarning() {
    this.setState({
      deleteWarning: this.state.deleteWarning === false ? true : false
    });
  }

  onDeleteMatch(id) {
    this.props.onDeleteMatch(id);
    this.setState({
      deleteWarning: false
    });
  }

  renderResultRows() {
    return this.props.players.map((item, key) => {
      return (
        <tr key={key}>
          <td>{this.renderPlayerName(String(Object.keys(item)))}</td>
          <td>{item[Object.keys(item)] === "win" ? "x" : ""}</td>
          <td>{item[Object.keys(item)] === "tie" ? "x" : ""}</td>
          <td>{item[Object.keys(item)] === "loss" ? "x" : ""}</td>
        </tr>
      );
    });
  }

  render() {
    const editModalClasses =
      this.state.editPanelOpen === true ? ["modal", "is-active"] : ["modal"];
    const deleteWarningClasses =
      this.state.deleteWarning === true ? ["modal", "is-active"] : ["modal"];
    console.log("gameId in matchrow", this.props.gameId);

    return (
      <div>
        <EditModal
          classes={editModalClasses}
          matchName={this.props.matchName}
          toggleEditPanel={this.toggleEditPanel.bind(this)}
        />
        <DeleteWarning
          classes={deleteWarningClasses}
          matchName={this.props.matchName}
          toggleDeleteWarning={this.toggleDeleteWarning.bind(this)}
          onDeleteMatch={this.onDeleteMatch.bind(this)}
          gameId={this.props.gameId}
        />
        <div>
          <div className="is-pulled-right">
            <div className="field has-addons">
              <p className="control">
                <button
                  className="button"
                  onClick={() => this.toggleEditPanel()}
                >
                  <span>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-danger is-outlined"
                  onClick={() => this.toggleDeleteWarning()}
                >
                  <span>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </button>
              </p>
            </div>
          </div>
          <h1 className="title">{this.props.matchName}</h1>
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Win</th>
                <th>Tie</th>
                <th>Loss</th>
              </tr>
            </thead>
            <tbody>{this.renderResultRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MatchRow;
