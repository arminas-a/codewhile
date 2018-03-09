import React from "react";
import "../../styles/css/Global.css";
import "../../styles/css/Elements.css";
import logo from "../../images/codewhile_red.svg";
import Social from './Social';



const Information = () => (
  <div className="information-container">
    <h6>Company</h6>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro
      nemo maiores a distinctio iusto perspiciatis corrupti, voluptate provident
      consequatur mollitia, molestias eius temporibus molestiae! Porro incidunt
      aliquam impedit deleniti cupiditate quaerat animi ipsa blanditiis ducimus
      cum! Ad, aperiam aut.
    </p>
    <hr />
    <img src={logo} alt="" />
    <a className="email" href="">
      info@codewhile.com
    </a>
    <p>© Codewhile, Inc 2013 - 2017. All rights reserved.</p>
    <Social />
  </div>
);

export default Information;
