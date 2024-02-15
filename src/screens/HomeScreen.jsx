import React, { useState } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";

import BubuEating from "../assets/bubu-eating.gif";
import DuduCrying from "../assets/dudu-crying.gif";

export default function HomeScreen() {
  const [saidNo, setSaidNo] = useState(false);
  return (
    <>
      <div className="header">a present has arrived for you!!!!</div>
      {saidNo ? (
        <img className="dudu" src={DuduCrying} alt="bubu eating" />
      ) : (
        <img className="bubu" src={BubuEating} alt="bubu eating" />
      )}
      <div className="header">do you wish to accept it?</div>
      <div>
        <Link to="flower">
          <button className="accept-button">yes I want to see more!!</button>
        </Link>
      </div>
      <button
        className="decline-button"
        type="button"
        onClick={() => {
          setSaidNo(true);
        }}
      >
        no....
      </button>
    </>
  );
}
