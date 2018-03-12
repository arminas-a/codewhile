import React from "react";
import "./../../styles/css/Global.css";
import "./../../styles/css/Elements.css";

const Social = ({ color }) => (
  <div className="social-container">
    <ul className="social-list">
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} class="icon-brand" />
        </a>
      </li>
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} class="icon-brand2" />
        </a>
      </li>
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} class="icon-brand3" />
        </a>
      </li>
    </ul>
  </div>
);

export default Social;
