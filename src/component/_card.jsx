import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";

const _card = (props) => {
  return (
    <>
      <div
        className="card"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id={props.item.id}
        onClick={() => {
          props.setuserid(props.item.id);
          props.setUserIndex(props.index + 1);
        }}
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{props.index + 1}</h6>
          <h5 className="card-title">{props.item.phone}</h5>
          <p className="card-text">
            <span className="me-1">{props.item.firstName}</span>
            <span className="me-1">{props.item.maidenName}</span>
            <span className="me-1">{props.item.lastName}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default _card;
