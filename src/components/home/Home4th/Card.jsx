import React from "react";
import "./Services.css";

const Card = ({ title, text, logo }) => {
  return (
    <div className="card">
      <div className="card-logo">{logo}</div>
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
