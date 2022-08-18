import React, { useState } from "react";
import { Link } from "react-router-dom";
const TopBar = (props) => {
  const handalInput = (e) => {
    e.preventDefault();
    props.setInput(e.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="">
            <a className="navbar-brand">{props.title}</a>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.input}
              onChange={handalInput}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
