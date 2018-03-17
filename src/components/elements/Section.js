import React from "react";
import { Route } from "react-router-dom";
import { string } from "prop-types";
import "./../../styles/css/Elements.css";
import { ScrollIntoView } from "rrc";

const Section = ({ image, heading, description, comments }) => (
  <div className="section-container">
    <div className={`section ${heading.replace(" ", "-").toLowerCase()}`}>
      <div className="section-image">
        <img
          src={image}
          alt={heading}
          id={heading.replace(" ", "-").toLowerCase()}
        />
      </div>
      <div className="section-content">
        <h6 className="section-header">{heading}</h6>
        <p className="section-description">{description}</p>
        <hr />
        <p className="section-extra">Expertise: {comments}</p>
      </div>
    </div>
  </div>
);

Section.propTypes = {
  image: string.isRequired,
  heading: string.isRequired,
  description: string.isRequired,
  comments: string.isRequired
};

export default Section;
