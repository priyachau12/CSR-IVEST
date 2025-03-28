import React from "react";
import { Link } from "react-router-dom";
import PrimaryResearch from "./PrimaryResearch.jsx";
import ComparisonPage from "./ComparisonPage.jsx";
import ProductRoadmap from "./ProductRoadmap.jsx";
function AboutUs() {
  return (
    <div className="container">
      {/* <h1>About Us</h1> */}
      {/* <p>
        Learn more about our organization and our commitment to social
        responsibility
      </p> */}

      <ComparisonPage />
      <PrimaryResearch />
      <ProductRoadmap />
    </div>
  );
}

export default AboutUs;
