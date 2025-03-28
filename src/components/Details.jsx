// import React, { useState } from "react";
// import NGOList from "./NGOList";
// import "../Styles/Details.css";
// import NGODetails from "./NGODetails";

// const Details = () => {
//   const [selectedNGO, setSelectedNGO] = useState(null);

//   return (
//     <div className="container">
//       <h1>CSR Details</h1>
//       <p>Select an NGO to view details</p>

//       {/* NGO List Component */}
//       <NGOList onSelectNGO={setSelectedNGO} />

//       {/* Show details when an NGO is selected */}
//       {selectedNGO && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "15px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h2>{selectedNGO.name}</h2>
//           <p>
//             <strong>Address:</strong> {selectedNGO.address}
//           </p>
//           <p>
//             <strong>Funding Amount:</strong> ₹{selectedNGO.fundingAmount}
//           </p>
//           <p>
//             <strong>Commission (3%):</strong> ₹
//             {(selectedNGO.fundingAmount * 0.03).toFixed(2)}
//           </p>
//           <a
//             href={selectedNGO.googleMaps}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View on Google Maps
//           </a>
//           <br />
//           <a
//             href={selectedNGO.googleForm}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button
//               style={{
//                 marginTop: "10px",
//                 padding: "8px 12px",
//                 background: "#007bff",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//                 borderRadius: "5px",
//               }}
//             >
//               Apply Now
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Details;
import React, { useState } from "react";
import NGOList from "./NGOList";
import NGODetails from "./NGODetails";
import "../Styles/Details.css"; // Import the CSS file

const Details = () => {
  const [selectedNGO, setSelectedNGO] = useState(null);

  return (
    <div className="details-container">
      <h1 className="title">CSR Details</h1>
      <p className="subtitle">Select an NGO to view details</p>

      {!selectedNGO ? (
        <NGOList onSelectNGO={setSelectedNGO} />
      ) : (
        <NGODetails ngo={selectedNGO} onBack={() => setSelectedNGO(null)} />
      )}
    </div>
  );
};

export default Details;
