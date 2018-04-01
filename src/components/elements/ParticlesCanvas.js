import React, { Component } from 'react';
import Particles from "react-particles-js";

class ParticlesCanvas extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
        }}
        style={{
          width: "100%",
        }}
      />
    );
  }
}

export default ParticlesCanvas;
