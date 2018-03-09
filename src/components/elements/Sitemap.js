import React from "react";
import "./../../styles/css/Global.css";
import "./../../styles/css/Elements.css";
import { Link } from "react-router-dom";
import { array } from "prop-types";

const Sitemap = ({ sublinks, links }) => (
  <div className="sitemap-container">
    <div className="sitemap-left">
        <Link className="big-link" to="/services">Services</Link>
      {sublinks.map(sublink => <p><Link to="/services">{sublink}</Link></p>)}
    </div>
    <div className="sitemap-right">
        <Link className="big-link" to="/">Home</Link>
      {links.map(link => (
          <Link className="big-link" to={link}>{link}</Link>
      ))}
    </div>
  </div>
);

Sitemap.propTypes = {
  elements: array.isRequired
};

export default Sitemap;
