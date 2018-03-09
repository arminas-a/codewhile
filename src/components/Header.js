import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { array } from "prop-types";
import "./../styles/css/Global.css";
import "./../styles/css/Header.css";
import logo from "./../images/codewhile_red.svg";
import logoAlt from "./../images/codewhile_white.svg";
import Social from "./../components/elements/Social";

const Header = ({ elements }) => (
  
  <div className="header-container">
    <div className="header">
      <Link exact to="/">
        <img className="logo" src={logo} />
      </Link>
      <Menu bodyClassName={"hidden"} right isOpen={false} width={"50%"} >
      <Link exact to="/">
      <img className="logo-alt" src={logoAlt} />
      <hr />
    </Link>
        <ul>
          <li className="menu-item">
              <Link className="menu-link" to="/">Home</Link>
          </li>
          {elements.map(el => (
            <li className="menu-item">
                <Link className="menu-link" to={el}>{el}</Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  </div>
);

Header.propTypes = {
  elements: array.isRequired
};

export default Header;
