import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Home.css";
import image from "./../images/home2.svg";
import Button from "../components/elements/Button";

const Home = () => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
    component="div"
    className="home-page"
  >
    <div className="home-container">
    <div className="call-to-action-container">
        <div className="call-to-action">
          <h1>Advanced application development and user experience solutions.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iure
            explicabo harum fugit praesentium! Aliquid asperiores consequatur
            quaerat quae aliquam.
          </p>
          <Button text={"Services"} />
        </div>
      </div>
      <img className="image-container" src={image} alt="" />

    </div>
  </CSSTransitionGroup>
  
);

export default Home;

// <div className="call-to-action">
// <h1>Advanced application development solutions</h1>
// <p>We make your products popular and your online presence memorable.</p>
// <Button text={"Services"} />
// </div>
// <div className="image-container">
// <img src={world_map} />
// </div>
