import React from "react";
import { NavLink } from "react-router-dom";

const Button = () => (
    <NavLink exact to="/Services" className="Button">Services</NavLink>
);

export default Button;