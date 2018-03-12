import React from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Global.css";
import "../../styles/css/Elements.css";
import logo_light from "../../images/logo_light.svg";
import Social from './Social';



const Information = () => (
  <div className="information-container">
    <h6 className="information-title">Company</h6>
    <p className="information-text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro
      nemo maiores a distinctio iusto perspiciatis corrupti, voluptate provident
      consequatur mollitia, molestias eius temporibus molestiae! Porro incidunt
      aliquam impedit deleniti cupiditate quaerat animi ipsa blanditiis ducimus
      cum! Ad, aperiam aut.
    </p>
    <hr />
    <img className="footer-logo" src={logo_light} alt="" />
    <a className="information-email" href="">
      info@codewhile.com
    </a>
    <Social color={"#fff"}/>
    <p className="information-copyright">© Codewhile, Inc 2013 - 2017. All rights reserved.</p>
  </div>
);

export default Information;
