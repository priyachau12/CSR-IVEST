import React from "react";
import "../Styles/services.css"; // Importing the CSS file

const Services = () => {
  return (
    <section className="services">
      <h2>OUR PRODUCT AND SERVICES</h2>
      <div className="service-container">
        <div className="service">
          <div className="arrow"></div>
          <div className="service-box">
            <h3>Curated Listings:</h3>
            <p>A database of vetted impact startups across various sectors.</p>
          </div>
        </div>
        <div className="service">
          <div className="arrow"></div>
          <div className="service-box">
            <h3>Matching Services:</h3>
            <p>
              Advanced algorithms to connect corporations with projects aligning
              with their CSR goals.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="arrow"></div>
          <div className="service-box">
            <h3>Impact Tracking Tools:</h3>
            <p>Features to monitor and report on project outcomes in real-time.</p>
          </div>
        </div>
        <div className="service">
          <div className="arrow"></div>
          <div className="service-box">
            <h3>Consultancy:</h3>
            <p>
              Expert guidance on CSR strategy development, compliance, and impact
              measurement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
