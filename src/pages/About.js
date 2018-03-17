import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/About.css";
import Breadcrumb from "../components/elements/Breadcrumb";
import image from "../images/about.svg";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
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
          <div className="about-content">
            <Breadcrumb title={"01. Who we are"} />
            <p>
              We are a team of web designers and programmers dedicated to create
              best products for our clients. Our focus is to find an original
              and performant solution in order to bring your online presence to
              the next level. We believe that a good company deserves the best
              online reputation possible.
            </p>
            <p>
              From elegant and effective website and rejuvenation of your visual
              identity to an aggressive digital marketing campaign and most
              reliable hosting. We are here to strengthen your positions and
              beat the competition out of the way.
            </p>{" "}
            <p>
              From elegant and effective website and rejuvenation of your visual
              identity to an aggressive digital marketing campaign and most
              reliable hosting. We are here to strengthen your positions and
              beat the competition out of the way.
            </p>
            <br />
            <h5 className="about-title">We look forward to work with:</h5>
            <ul className="about-list">
              <li>Small and medium-sized enterprises (SMEs)</li>
              <li>Startups</li>
              <li>Blockchain ventures</li>
              <li>Advertisers</li>
              <li>Designers</li>
              <li>Creative individuals</li>
              <li>Technology companies with outsource needs</li>
            </ul>
            <h5 className="about-title">Tools & Expertise:</h5>
            <ul className="expertise-list">
              <li className="expertise-item" />
            </ul>
          </div>
          <div className="about-image-container">
            <img className="about-image" src={image} alt="" />
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default About;
