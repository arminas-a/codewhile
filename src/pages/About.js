import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/About.css";
import Breadcrumb from "../components/elements/Breadcrumb";
import Quote from '../components/elements/Quote';
import image from "../images/about.svg";


const About = () => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
    component="div"
    className="about-container"
  >
    <div className="about">
      <div className="about-left">
        <Breadcrumb title={"Who we are"} />
        <h2>We are an application development agency</h2>
        <p>
          We are a team of web designers and programmers dedicated to create
          best products for our clients. Our focus is to find an original and
          performant solution in order to bring your online presence to the next
          level. We believe that a good company deserves the best online
          reputation possible.
        </p>
        <p>
          From elegant and effective website and rejuvenation of your visual
          identity to an aggressive digital marketing campaign and most reliable
          hosting. We are here to strengthen your positions and beat the
          competition out of the way.{" "}
        </p>
        <h5>We look forward to work with:</h5>
        <ul className="client-list">
          <li>Small and medium-sized enterprises (SMEs)</li>
          <li>Startups</li>
          <li>Blockchain ventures</li>
          <li>Advertisers</li>
          <li>Designers</li>
          <li>Creative individuals</li>
          <li>Technology companies with outsource needs</li>
        </ul>
      </div>
      <div className="about-right">
        <img className="image" src={image} alt=""/>
      </div>
    </div>
  </CSSTransitionGroup>
);

export default About;
