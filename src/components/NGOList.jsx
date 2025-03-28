// import React from "react";
// import "../styles/NGOList.css";

// const NGOs = [
//   {
//     id: 1,
//     name: "Sadik Masih Medical Social Servant Society",
//     address: "110/B4, Paryatan Vihar, Vasundhara Enclave, Delhi",
//     googleMaps: "https://www.google.com/maps?q=Vasundhara+Enclave+Delhi",
//     fundingAmount: 100000,
//     googleForm: "https://forms.google.com/example1",
//   },
//   {
//     id: 2,
//     name: "Christian Social Welfare Trust (CSWT)",
//     address: "Krishna Complex, Office No.201, Building No.52C, Delhi-92",
//     googleMaps: "https://www.google.com/maps?q=Hasanpur+IP+Extn+Delhi",
//     fundingAmount: 150000,
//     googleForm: "https://forms.google.com/example2",
//   },
//   {
//     id: 3,
//     name: "Blue Birds Social Welfare Society",
//     address: "B-139, 2nd Floor, G.D. Colony, Mayur Vihar, Phase-III, Delhi-96",
//     googleMaps: "https://www.google.com/maps?q=Mayur+Vihar+Delhi",
//     fundingAmount: 120000,
//     googleForm: "https://forms.google.com/example3",
//   },
// ];

// const NGOList = ({ onSelectNGO }) => {
//   return (
//     <div className="ngo-list-container">
//       <h2>Available NGOs</h2>
//       <div className="ngo-grid">
//         {NGOs.map((ngo) => (
//           <div key={ngo.id} className="ngo-card">
//             <h3>{ngo.name}</h3>
//             <p>{ngo.address}</p>
//             <p><strong>Funding:</strong> ₹{ngo.fundingAmount.toLocaleString()}</p>
//             <div className="ngo-links">
//               <a href={ngo.googleMaps} target="_blank" rel="noopener noreferrer">
//                 View on Maps
//               </a>
//               <button onClick={() => onSelectNGO(ngo)}>View Details</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NGOList;
import React from "react";
import "../styles/NGOList.css";
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
