import React from "react";
import { string } from "prop-types";

const Card = ({ icon, heading, description }) => (
  <div className="card-container">
    <div className="card-icon-container">
      <img className="card-icon" src={icon} alt="" />
    </div>
    <div className="card-content">
      <h6 className="card-heading">{heading}</h6>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

Card.propTypes = {
  icon: string.isRequired,
  heading: string.isRequired,
  description: string.isRequired
};

export default Card;
