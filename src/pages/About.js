import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/About.css";
import Breadcrumb from "../components/elements/Breadcrumb";
import image from "../images/about.svg";
import expertise from "../data/expertise";
import Button from '../components/elements/Button';

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
        <Breadcrumb title={"01. Who we are"} />

        <div className="about">
          <div className="about-content">
            <div className="about-text">
            <h5 className="about-title">We are a team of application developers and technology consultants</h5>
              <p>
                We are a team of web designers and programmers dedicated to
                create best products for our clients. Our focus is to find an
                original and performant solution in order to bring your online
                presence to the next level. We believe that a good company
                deserves the best online reputation possible.
              </p>
              <p>
                From elegant and effective website and rejuvenation of your
                visual identity to an aggressive digital marketing campaign and
                most reliable hosting. We are here to strengthen your positions
                and beat the competition out of the way.
              </p>{" "}
              <p>
                From elegant and effective website and rejuvenation of your
                visual identity to an aggressive digital marketing campaign and
                most reliable hosting. We are here to strengthen your positions
                and beat the competition out of the way.
              </p>
             
            </div>
            <div className="about-text">
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
                <Button text={"Contact us now"} link={"/contact"}/>


              </div>
          </div>
        </div>
        <h5 className="expertise-title">Tools and Expertise:</h5>
        <ul className="expertise-list">
          {expertise.map(expertiseItem => (
            <li className="expertise-item">
              <img src={expertiseItem.icon} alt={expertiseItem.heading} />
              {expertiseItem.heading}
            </li>
          ))}
        </ul>
      </CSSTransitionGroup>
    );
  }
}

export default About;
