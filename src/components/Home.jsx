import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Services from "./Services.jsx";
import AboutUs from "./AboutUs.jsx";

import Carousel from "./Carousel.jsx";
import "../Styles/Carousel.css"
function Home() {
  return (
    <div className="home-container">
    
      {/* Banner Section */}
      
      {/* <section className="banner"> */}
        {/* <h1>SUSTAINABILITY HUB</h1>
        <div className="team-box">
          <h3>TEAM MARKZOK</h3>
          <p>ANCHAL | ARYAN AGGARWAL | JAYASREE | DHEERAJ</p>
        </div> */}
        
      {/* </section> */}
      <div className="car"><Carousel/></div>

      <div className="container">
        {/* Problem and Solution Cards */}
        <div className="grid">
          <div className="card problem">
            <h2>The Challenge</h2>
            <p>
              Despite mandatory CSR spending, corporations struggle to identify
              credible projects that align with their values and compliance
              requirements, creating a significant gap in social impact
              investment.
            </p>
          </div>
          <div className="card solution">
            <h2>Our Innovative Solution</h2>
            <ul>
              <li>
                <strong>For Corporations:</strong> Curated impact startups,
                advanced tracking tools, and comprehensive assessment metrics.
              </li>
              <li>
                <strong>For Startups:</strong> Direct access to corporate
                partners, strategic resources, and expert compliance guidance.
              </li>
            </ul>
          </div>
        </div>

        {/* Market Size and Stats */}
        <div className="market-size">
          <h2>Market Landscape</h2>
          <div className="grid">
            <div className="stat-box">
              <h3>TOTAL CSR SPENDING IN INDIA</h3>
              <p>₹ 29,986.92 CR</p>
            </div>
            <div className="stat-box">
              <h3>COMPANIES INVOLVED</h3>
              <p>24,392</p>
            </div>
          </div>
        </div>
        
        {/* Primary Research Insights */}
        {/* <div className="research-insights">
          <h2>Key Research Findings</h2>
          <div className="grid">
            <div className="insight-box csr-budget">
              <h3>CSR Budget Utilization Challenges</h3>
              <ul>
                <li>78% struggle to find credible impact startups</li>
                <li>65% face difficulties measuring CSR impact</li>
                <li>40% underutilize designated CSR budget</li>
              </ul>
            </div>
            <div className="insight-box csr-sectors">
              <h3>Top CSR Funding Sectors</h3>
              <ul>
                <li>Education & Skill Development (35%)</li>
                <li>Sustainable Livelihoods (SDG 8) (30%)</li>
                <li>Healthcare & Sanitation (20%)</li>
                <li>Environment & Sustainability (10%)</li>
                <li>Other Social Impact Initiatives (5%)</li>
              </ul>
            </div>
          </div>
        </div> */}

        
        <Services />
       
        {/* Call to Action */}
        <div className="cta">
          <h2>Transform Your CSR Strategy</h2>
          <p>Connect, Collaborate, and Create Meaningful Social Impact</p>
          <div className="cta-buttons">
            <Link to="/details" className="primary-btn">
              Learn More
            </Link>
            {/* <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link> */}
            <ScrollLink to="cta-section" smooth={true} duration={600} className="secondary-btn">
            Contact Us
          </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
