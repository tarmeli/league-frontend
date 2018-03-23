import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTrashAlt from "@fortawesome/fontawesome-free-solid/faTrashAlt";

class DeleteUserButton extends Component {
  deleteUserHandler(id, key) {
    this.props.onDeleteUser(id, key);
    console.log("index:", this.props.index, "key", key);
  }
  render() {
    return (
      <button
        className="button is-danger is-pulled-right"
        onClick={() =>
          this.deleteUserHandler(this.props.item._id, this.props.index)
        }
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    );
  }
}

export default DeleteUserButton;
