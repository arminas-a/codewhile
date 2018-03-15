import React from "react";
import "./../styles/css/Global.css";
import "./../styles/css/Footer.css";
import Social from "./elements/Social";
import Sitemap from './elements/Sitemap';
import Information from './elements/Information';
import services from "../data/services";

const sublinks = services.map(service => {
  return service.heading;
});


const links = ['About', 'Career', 'Contact']

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <div className="footer-left">
      <Information />
      </div>
      <div className="footer-right">
      <Sitemap  sublinks={sublinks} links={links} />
      </div>
    </div>
  </div>
);

export default Footer;
