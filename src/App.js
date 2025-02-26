import React, { useState, useEffect } from "react";
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
import Signup from "./components/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/check-auth", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FashionStore />} />
        <Route path="/pdftext" element={<PDFTextExtractor />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/bag" element={<ShoppingBag />} />
        <Route path="/listing" element={<ProductListing />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
