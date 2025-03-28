import React from "react";
import "../Styles/NGODetails.css";

const NGODetails = ({ ngo, onBack }) => {
  if (!ngo) return <p>Please select an NGO to view details.</p>;

  const commission = (ngo.fundingAmount * 0.03).toFixed(2); // 3% commission

  return (
    <div className="ngo-details-container">
      <button className="back-button" onClick={onBack}>
        Back to List
      </button>
      <h2>{ngo.name}</h2>
      <p>
        <strong>Address:</strong> {ngo.address}
      </p>
      <p>
        <strong>Funding Amount:</strong> ₹{ngo.fundingAmount.toLocaleString()}
      </p>
      <p>
        <strong>Commission (3%):</strong> ₹{commission}
      </p>
      <div className="ngo-links">
        <a href={ngo.googleMaps} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <a href={ngo.googleForm} target="_blank" rel="noopener noreferrer">
          <button>Apply Now</button>
        </a>
      </div>
    </div>
  );
};

export default NGODetails;
