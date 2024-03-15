import React from "react";
import pro1 from "../assets/banner-bg.png";

export const Card = () => {
  return (
    <div className="projects-card-container">
      <div className="projects-card-content">
        <img className="pro1" src={pro1}></img>
      </div>
    </div>
  );
};
