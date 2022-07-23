import React from "react";
import "./Feature.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text, result }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        {/* <BsHexagon color="#fc5412" size={20} /> */}
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
        <p className="result">{result}</p>
      </div>
      
    </div>
  );
};

export default Feature;
