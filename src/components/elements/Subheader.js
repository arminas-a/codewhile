import React from "react";
import { array } from "prop-types";

const Subheader = ({ sublinks }) => (
  <div className="subheader-container">
    <ul className="subheader-list">
      {sublinks.map(sublink => (
        <li className="subheader-item">
          <a className="subheader-sublink" href={`#${sublink}`}>{sublink}</a>
        </li>
      ))};
    </ul>
  </div>
);

Subheader.propTypes = {
  sublinks: array.isRequired
};

export default Subheader;
