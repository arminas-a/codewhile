import React from 'react';
import { Link } from "react-router-dom";
import { array } from "prop-types";
import logo_light from "../../images/logo_light2.svg";

const HeaderDesktop = ({ elements }) => (
    <div className="header-desktop-container">
    <Link className="header-desktop-logo-anchor" exact to="/">
      <img className="header-desktop-logo" src={logo_light} />
    </Link>
    <nav className="header-desktop-nav">
      <ul className="header-desktop-list">
        <li className="header-desktop-menu-item">
          <Link className="header-desktop-menu-link" to="/">
            Home
          </Link>
        </li>

        {elements.map(el => (
          <li className="header-desktop-menu-item">
            <Link className="header-desktop-menu-link" to={el.toLowerCase()}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>
);

HeaderDesktop.propTypes = {
    elements: array.isRequired
  };

export default HeaderDesktop;