import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import FashionStore from "./components/FashionStore";
import ProductPage from "./components/ProductPage";
import ShoppingBag from "./components/ShoppingBag";
import ProductListing from "./components/ProductListing";
import Login from './components/Login';
import Signup from './components/Signup';

// Helper component to handle redirects with location state
function RequireAuth({ children, isAuthenticated }) {
  let location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to the login page, but save the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // Don't render anything while checking authentication
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/" /> : <Signup setIsAuthenticated={setIsAuthenticated} />
        } />
        <Route path="/" element={<FashionStore/>} />
 
        <Route path="/product" element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <ProductPage />
          </RequireAuth>
        } />
        
        <Route path="/bag" element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <ShoppingBag />
          </RequireAuth>
        } />
        
        <Route path="/listing" element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <ProductListing />
          </RequireAuth>
        } />
      </Routes>
    </Router>
  );
}

export default App;