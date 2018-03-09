import React from 'react';
import { string } from "prop-types";
import "./../../styles/css/Elements.css";

const Breadcrumb = ({ title }) => (
    <div className="breadcrumb">
        <h6>{title}</h6>
    </div>
);

Breadcrumb.propTypes = {
  title: string.isRequired
};

export default Breadcrumb;