import React from "react";
import "./AcceptScreen.css";
import Flower from "../components/Flower.jsx";

export default function AcceptScreen() {
  return (
    <>
      <span className="text">
        Happy Valentines Baby!!!!
        <p style={{ color: "#ff0000" }}>I LOVE YOU</p>
        <p>I hope you had a great day and here are some flowers for YOU!</p>
      </span>
      <span className="text2"></span>
      <Flower />
    </>
  );
}
