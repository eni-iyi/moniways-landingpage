import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <img className="image" src="./image/Re_skale.png" alt="LOGO" />

      <ul className="container">
        <li className="how">Home</li>
        <li className="how">How it works</li>
        <li className="">Testimonials</li>
      </ul>

      <button className="btn">Download</button>
    </div>
  );
};

export default Navigation;
