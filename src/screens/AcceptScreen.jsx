import React from "react";
import "./AcceptScreen.css";
import Flower from "../components/Flower.jsx";

export default function AcceptScreen() {
  return (
    <>
      <div className="container">
        <span className="text">Happy Valentines Baby!!!!</span>
        <span className="text">
          I hope you had a great day and here are some flowers!
        </span>
      </div>
      <Flower />
    </>
  );
}
