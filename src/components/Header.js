import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { array } from "prop-types";

// Static imports

import "./../styles/css/Global.css";
import "./../styles/css/Header.css";
import HeaderDesktop from "./elements/HeaderDesktop";
import HeaderMobile from "./elements/HeaderMobile";

const menuList = ["About", "Services", "Career", "Contact"];

const Header = ({ elements }) => (
  <div className="header">
    <HeaderDesktop elements={menuList} />
    <HeaderMobile elements={menuList} />
  </div>
);

export default Header;
