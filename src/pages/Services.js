import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Services.css";
import Section from "../components/elements/Section";
import services from "../data/data";
import Breadcrumb from "../components/elements/Breadcrumb";
import coding from "../images/coding.png";

const Services = () => {
  let servicesGrid = services.map(service => {
    return (
      <Section
        key={service.id}
        heading={service.heading}
        description={service.description}
        comments={service.comments}
        image={service.image}
      />
    );
  });
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
      component="div"
      className="services-container"
    >
      <div className="services-intro">
        <div className="services-intro-content">
          <Breadcrumb title={"What we do"} />
          <h2 className="services-intro-title">
            We provide digital presence services to businesses, ventures and individuals.
          </h2>
        </div>
      </div>
    
      {servicesGrid}

    </CSSTransitionGroup>
  );
};

export default Services;
