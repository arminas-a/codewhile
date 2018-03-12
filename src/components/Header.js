import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { array } from "prop-types";
import "./../styles/css/Global.css";
import "./../styles/css/Header.css";
import logo_dark from "./../images/logo_dark.svg";
import logo_light from "./../images/logo_light.svg";
import Social from "./../components/elements/Social";
import burger_button from "../images/burger_button4.svg";

const Header = ({ elements }) => (
  <div className="header-container">
    <div className="header">
      <Link exact to="/">
        <img className="header-desktop-logo" src={logo_light} />
      </Link>
      <nav className="header-desktop-container">
        <ul className="header-desktop-list">
          <li className="header-desktop-menu-item">
            <Link className="header-desktop-menu-link" to="/">
              Home
            </Link>
          </li>

          {elements.map(el => (
            <li className="header-desktop-menu-item">
              <Link className="header-desktop-menu-link" to={el}>
                {el}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Menu bodyClassName={"hidden"} right isOpen={false} width={"100%"}>
        <Link className="header-mobile-anchor" exact to="/">
          <img className="header-mobile-logo" src={logo_dark} />
        </Link>
        <hr className="header-mobile-hr" />
        <ul className="header-mobile-list">
          <li className="header-mobile-menu-item">
            <Link className="header-mobile-menu-link" to="/">
              Home
            </Link>
          </li>
          {elements.map(el => (
            <li className="header-mobile-menu-item">
              <Link className="header-mobile-menu-link" to={el}>
                {el}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-mobile-footer">
          <hr className="header-mobile-hr" />
          <Social color={"#000"} />
          <a className="header-mobile-email" href="">
            info@codewhile.com
          </a>
          <p className="header-mobile-copyright">
            © Codewhile, Inc 2013 - 2017. All rights reserved.
          </p>
        </div>
      </Menu>
    </div>
  </div>
);

Header.propTypes = {
  elements: array.isRequired
};

export default Header;
