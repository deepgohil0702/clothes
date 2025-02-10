// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Chat from './components/Chat';
// import Login from './components/Login';
// import Signup from './components/Signup';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks authentication state

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login onLogin={login} />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* Protect the /chat route */}
//         <Route
//           path="/chat"
//           element={
//             isAuthenticated ? <Chat /> : <Navigate to="/login" replace />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Chat from "./components/Chat";
import HomeTab from "./components/HomeTab";
import ChatAisection from "./components/ChatAisection";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchBar from "./components/SearchBar";
import Announcement from "./components/Announcement";
import PDFTextExtractor from "./components/PDFTextExtractor";
import FashionStore from "./components/FashionStore";
import ProductPage from "./components/ProductPage";
import ShoppingBag from "./components/ShoppingBag";
import ProductListing from "./components/ProductListing";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<FashionStore/>} />
        <Route path="/pdftext" element={<PDFTextExtractor/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/bag" element={<ShoppingBag/>} />
        <Route path="/listing" element={<ProductListing/>} />

    
      </Routes>
    </Router>
  );
}

export default App;
