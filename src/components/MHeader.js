import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu } from 'lucide-react';

const MHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">beyondXL</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link to="/wishlist">
              <Heart className="w-6 h-6" />
            </Link>
            <Link to="/login" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <User className="w-6 h-6" />
              <span>Login</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-blue-600">Home</Link>
            <Link to="/products" className="block py-2 hover:text-blue-600">Products</Link>
            <Link to="/cart" className="block py-2 hover:text-blue-600">Cart</Link>
            <Link to="/wishlist" className="block py-2 hover:text-blue-600">Wishlist</Link>
            <Link to="/login" className="block py-2 hover:text-blue-600">Login</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MHeader;