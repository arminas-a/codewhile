import React from 'react';
import { number, string } from "prop-types";
import "./../../styles/css/Global.css";
import "./../../styles/css/Elements.css";

const Quote = ({ number, text, color }) => (
    <div className="quote-container" style={{background: color}}>
        <div className="quote-left">
            <div className="quote-number">{number}%</div>
        </div>
        <div className="quote-right">
            <div className="quote-text">{text}</div>
        </div>
    </div>
);

Quote.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
  color: string.isRequired
};

export default Quote;