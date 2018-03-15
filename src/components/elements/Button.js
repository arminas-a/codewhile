import React from "react";
import { string } from "prop-types";
import { NavLink } from "react-router-dom";

const Button = ({ text }) => (
    <NavLink to={text.toLowerCase()} className="Button">{text}</NavLink>
);

Button.propTypes = {
  text: string.isRequired
};

export default Button;