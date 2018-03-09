import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Home.css";
import world_map from "./../images/world_map.svg";

const Home = () => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
    component="div"
    className="container"
  >
    <div className="home">
      <div className="call-to-action">
        <h1>Advanced application development solutions</h1>
        <p>We make your products popular and your online presence memorable.</p>
        <NavLink to="/services" className="Button">
          Services
        </NavLink>
      </div>
      <div className="image-container">
        <img src={world_map} />
      </div>
    </div>
  </CSSTransitionGroup>
);

export default Home;
