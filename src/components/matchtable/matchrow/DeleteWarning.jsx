import React from "react";

const DeleteWarning = ({
  classes,
  matchName,
  toggleDeleteWarning,
  onDeleteMatch,
  gameId
}) => {
  return (
    <div className={classes.join(" ")}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Really delete {matchName}?</p>
        </header>
        <section className="modal-card-body">
          <div className="buttons has-addons is-centered">
            <span
              className="button is-danger"
              onClick={() => onDeleteMatch(gameId)}
            >
              Yes
            </span>
            <span className="button" onClick={toggleDeleteWarning}>
              No
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeleteWarning;
