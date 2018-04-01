import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Contact.css";

import ContactForm from "./../components/ContactForm";
import Breadcrumb from "../components/elements/Breadcrumb";

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div className="contact">
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className="contact-container"
      >
      <Breadcrumb title={"01. How to find us"} />

        <div className="invitation">
          <h5 className="invitation-heading">Contact us</h5>
          <p className="invitation-description">Every great partnership starts from 'Hello'.</p>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </CSSTransitionGroup>
    </div>
    );
  }
}

export default Contact;
