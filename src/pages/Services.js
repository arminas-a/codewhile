import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Services.css";
import Section from "../components/elements/Section";
import services from "../data/data";
import Breadcrumb from '../components/elements/Breadcrumb';


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
      className="services"
    >
    <div className="container">
    <div className="services-intro">
        <Breadcrumb title={"What we do"}/>
        <h2 className="services-intro-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tempore?</h2>
        <p className="services-intro-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt dicta est asperiores cupiditate perspiciatis nesciunt tempora corrupti fuga amet distinctio accusamus, labore illum ea minus nulla, sed dolorem. Ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti ducimus iusto est impedit quibusdam reprehenderit, numquam facere molestiae voluptatum?</p>
      </div>
    </div>

      {servicesGrid}
    </CSSTransitionGroup>
  );
};

export default Services;
