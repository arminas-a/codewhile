import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Header from "./Header";

class Adaptive extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    const { match, location, history } = this.props;
    let headerColor;
    let textColor;
    if (location.pathname === "/services") {
      headerColor = {
        background: "linear-gradient(to right, #ff6a00, #ffaa00, #ff6a00)" 
      };}
      
    //   else if (location.pathname === "/career") {
    //   headerColor = { background: "linear-gradient(to right,#338540,#4bba5d)" };
    // }
    return (
      <div className="header-container" style={headerColor}>
        <Header />
      </div>
    );
  }
}

const AdaptiveHeader = withRouter(Adaptive);

export default AdaptiveHeader;
