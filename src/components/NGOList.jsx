import React from "react";
import "../Styles/NGOList.css";
import NGOs from "./ngos_list"; // Import the array from ngos_list.jsx

const NGOList = ({ onSelectNGO }) => {
  return (
    <div className="ngo-list-container">
      <h2>Available NGOs</h2>
      <div className="ngo-grid">
        {NGOs.map((ngo) => (
          <div key={ngo.id} className="ngo-card">
            <h3>{ngo.name}</h3>
            <p>{ngo.address}</p>
            <p>
              <strong>Funding:</strong> ₹{ngo.fundingAmount.toLocaleString()}
            </p>
            <div className="ngo-links">
              <a
                href={ngo.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Maps
              </a>
              <button onClick={() => onSelectNGO(ngo)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOList;
