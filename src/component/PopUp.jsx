import React, { useState } from "react";

const PopUp = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tacIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.userid}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="card-title">
                <h5>
                  <span className="me-1">{props.data.firstName}</span>
                  <span className="me-1">{props.data.maidenName}</span>
                  <span className="me-1">{props.data.lastName}</span>
                </h5>
              </h5>
              <p className="card-text">
                Number : <span>{props.data.phone}</span>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
