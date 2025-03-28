// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Details from "./components/Details";
// import AboutUs from "./components/AboutUs";
// // import ContactUs from './components/ContactUs';
// // import Profile from './components/Profile';
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar">
//           <div className="navbar-logo">CSR Hub</div>
//           <div className="navbar-links">
//             <Link to="/">HOME</Link>
//             <Link to="/details">DETAILS</Link>
//             <Link to="/about">ABOUT US</Link>
//             <Link to="/contact">CONTACT US</Link>

//             <div className="search-bar">
//               <input type="text" placeholder="Search..." />
//               <button>Search</button>
//             </div>

//             <Link to="/profile">Profile</Link>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/details" element={<Details />} />
//           <Route path="/about" element={<AboutUs />} />
//           {/* <Route path="/contact" element={<ContactUs />} /> */}
//           {/* <Route path="/profile" element={<Profile />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
// import "./Styles/App.css";
import "./global.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
