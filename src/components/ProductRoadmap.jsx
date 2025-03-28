import React from "react";
import "../Styles/ProductRoadmap.css"; // Importing the CSS file

const ProductRoadmap = () => {
  return (
    <section className="roadmap">
      <h2>PRODUCT ROADMAP</h2>
      <div className="road">
        <div className="phase">
          <div className="marker"></div>
          <div className="phase-box">
            <h3>Phase 1: Platform Development</h3>
            <p>
              Build the core platform with essential features; Onboard initial
              users (both corporations and startups).
            </p>
          </div>
        </div>
        <div className="phase">
          <div className="marker"></div>
          <div className="phase-box">
            <h3>Phase 2: Feature Enhancement</h3>
            <p>
              Integrate advanced matching algorithms; Develop comprehensive
              impact tracking tools.
            </p>
          </div>
        </div>
        <div className="phase">
          <div className="marker"></div>
          <div className="phase-box">
            <h3>Phase 3: Scaling and Expansion</h3>
            <p>
              Expand user base across India; Introduce additional services such
              as workshops, webinars, and networking events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRoadmap;
