import React from "react";

const EditModal = ({ classes, matchName, toggleEditPanel }) => {
  return (
    <div className={classes.join(" ")}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Game {matchName}</p>
        </header>
        <section className="modal-card-body" />
        <footer className="modal-card-foot">
          <div className="buttons has-addons is-centered">
            <span className="button is-success">Save Changes</span>
            <span className="button" onClick={toggleEditPanel}>
              Cancel
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EditModal;
