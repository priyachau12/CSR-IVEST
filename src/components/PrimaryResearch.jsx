import React from "react";
import "../Styles/PrimaryResearch.css"
const PrimaryResearch = () => {
  return (
    <section className="primary-research">
      <h2>Primary Research Insights</h2>
      <div className="research-grid">
        <div className="research-card">
          <h3>CSR Budget</h3>
          <p>78% struggle to find credible impact startups.</p>
          <p>65% face challenges in impact measurement.</p>
          <p>40% underutilize budgets.</p>
        </div>
        <div className="research-card">
          <h3>Startup Challenges</h3>
          <p>72% struggle to connect with CSR teams.</p>
          <p>55% lack CSR funding awareness.</p>
          <p>48% face compliance issues.</p>
        </div>
        <div className="research-card">
          <h3>Top CSR Sectors</h3>
          <ul>
            <li>35% Education</li>
            <li>30% Sustainable Livelihoods</li>
            <li>20% Healthcare</li>
            <li>10% Environment</li>
            <li>5% Others</li>
          </ul>
        </div>
        <div className="research-card">
          <h3>CSRvest Solution</h3>
          <p>80% prefer curated impact startup platforms.</p>
          <p>68% favor data-driven impact tracking.</p>
        </div>
      </div>
    </section>
  );
};

export default PrimaryResearch;
