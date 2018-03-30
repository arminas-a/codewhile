import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { HashLink as Link } from "react-router-hash-link";
import "./../styles/css/Global.css";
import "./../styles/css/Services.css";
import Section from "../components/elements/Section";
import services from "../data/services";
import Breadcrumb from "../components/elements/Breadcrumb";
import Subheader from "../components/elements/Subheader";
import Sitemap from "../components/elements/Sitemap";

class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
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
    let servicesLinks = services.map(service => {
      return (
        <li className="services-intro-link">
          <Link className="services-intro-link-anchor"
            scroll={el => el.scrollIntoView(true)}
            to={`services#${service.heading.toLowerCase().replace(" ", "-")}`}
          >
            {" "}
            {service.heading}
          </Link>
          <hr className="services-intro-link-hr"/>
        </li>
        
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
            <Breadcrumb title={"02. What we do"} />
            <div className="services-intro-link-container">
              <ul className="services-intro-link-list">{servicesLinks}</ul>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="services-grid-container">{servicesGrid}</div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Services;
