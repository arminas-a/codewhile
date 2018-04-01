import React from "react";
import { string } from "prop-types";
import { NavLink } from "react-router-dom";

const Button = ({ text, link }) => (
    <NavLink to={link} className="Button">{text}</NavLink>
);

Button.propTypes = {
  text: string.isRequired,
  link: string.isRequired
};

export default Button;