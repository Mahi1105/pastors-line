import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Link to="/All-Contact" className="btn-A">
          All Contacts
        </Link>
        <Link to="/Us-Contact" className="btn-B">
          US Contacts
        </Link>
      </div>
    </>
  );
};

export default Home;
