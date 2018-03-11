import React from "react";
import { string } from "prop-types";
import "./../../styles/css/Elements.css";

const Section = ({ image, heading, description, comments }) => (
  <div className="section-container">
    <div className={`section ${heading.replace(" ", "-").toLowerCase()}`}>
      <div className="section-image">
        <img src={image} alt={heading} />
      </div>
      <div className="section-content">
        <h6 className="header">{heading}</h6>
        <p className="description">{description}</p>
        <hr />
        <p className="comments">Expertise: {comments}</p>
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
