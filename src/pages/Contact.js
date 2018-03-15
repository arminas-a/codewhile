import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./../styles/css/Global.css";
import "./../styles/css/Contact.css";

import Forms from "./../components/Forms";

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
        component="section"
      >
        <div className="invitation">
          <h2>Contact us</h2>
          <p>Every great partnership starts from 'Hello'.</p>
        </div>
        <div className="form-container">
          <Forms />
        </div>
      </CSSTransitionGroup>
    </div>
    );
  }
}

export default Contact;
