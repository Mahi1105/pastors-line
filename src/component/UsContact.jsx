import React, { useState, useEffect } from "react";
import TopBar from "./_TopBar";
import _card from "./_card";
import { Link } from "react-router-dom";
import axios from "axios";
import PopUp from "./PopUp";
import _cardLoader from "./_cardLoader";

const UsContact = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState("");
  console.log(input);

  var offSet = 12;
  const loadData = () => {
    axios
      .get(
        `https://dummyjson.com/users/filter?key=address.state&value=CA&limit=${offSet}&q=`
      )
      .then((data) => {
        setUsers(data.data.users);
        setLoader(true);
      });

    offSet += 12;
  };
  const handlescroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadData();
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("scroll", handlescroll);
  }, []);
  const [even, setEven] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setEven(true);
    } else {
      setEven(false);
    }
  };
  const [userid, setuserid] = useState(null);
  const [fusers, setFUsers] = useState({});
  useEffect(() => {
    axios.get("https://dummyjson.com/users/" + userid).then((data) => {
      setFUsers(data.data);
    });
  }, [userid]);

  return (
    <>
      <TopBar title="All Contact" setInput={setInput} input={input} />

      <PopUp userid={userid} data={fusers} />
      {loader ? (
        <div
          className="container mt-4 grid-wrepper"
          style={{ marginBottom: "10rem" }}
        >
          {users
            .filter((value) => {
              if (input === "") {
                return value;
              } else if (
                value.firstName.toLowerCase().includes(input.toLowerCase()) ||
                value.lastName.toLowerCase().includes(input.toLowerCase()) ||
                value.maidenName.toLowerCase().includes(input.toLowerCase()) ||
                value.phone.includes(input)
              ) {
                return value;
              }
            })
            .map((item, i) => {
              if (even == true) {
                if ((i + 1) % 2 == 0) {
                  return <_card item={item} index={i} setuserid={setuserid} />;
                }
              } else {
                return <_card item={item} index={i} setuserid={setuserid} />;
              }
            })}
        </div>
      ) : (
        <_cardLoader />
      )}

      <div className=" fixed-bottom bg-light  mt-3 py-2 ">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(event) => handleChange(event)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Only even
            </label>
          </div>
          <Link to="/" className="btn-C">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default UsContact;

// https://dummyjson.com/users/filter?key=id&value=1
