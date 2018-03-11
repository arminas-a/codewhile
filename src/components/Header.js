import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { array } from "prop-types";
import "./../styles/css/Global.css";
import "./../styles/css/Header.css";
import logo_dark from "./../images/logo_dark.svg";
import logo_light from "./../images/logo_light.svg";
import Social from "./../components/elements/Social";



const Header = ({ elements }) => (
  
  <div className="header-container">
    <div className="header">
      <Link exact to="/">
        <img className="logo" src={logo_dark} />
      </Link>
      <Menu bodyClassName={"hidden"} right isOpen={false} width={"100%"} >
      <Link exact to="/">
      <img className="logo-alt" src={logo_light} />
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
        <hr/>
        <a className="header-email" href="">info@codewhile.com</a>
        <p>© Codewhile, Inc 2013 - 2017. All rights reserved.</p>
      </Menu>
    </div>
  </div>
);

Header.propTypes = {
  elements: array.isRequired
};

export default Header;
