// Topbar.jsx
import { useState } from 'react';
import { FiMenu, FiX, FiHeart, FiShoppingBag } from 'react-icons/fi';

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-5xl font-bold">beyondXL</div>
          <button onClick={toggleMenu} className="text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="space-y-6">
            <div className="space-y-4">
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Track Order</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Store Locator</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Contact Us</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Login</a>
            </div>
            
            <div className="space-y-4 border-t pt-4">
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Collection 1</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Collection 2</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Collection 3</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Collection 4</a>
              <a href="#" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Sale</a>
            </div>

            <div className="space-y-4 border-t pt-4">
              <input 
                type="text" 
                placeholder="Search for products" 
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex space-x-4">
                <button className="text-gray-700 hover:text-gray-900">
                  <FiHeart size={20} />
                </button>
                <button className="text-gray-700 hover:text-gray-900">
                  <FiShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold">beyondXL</div>
          </div>
          
          {/* Desktop Top Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Track Order</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Store Locator</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-gray-100 shadow hidden md:block">
  <div className="container mx-auto px-4 py-2 flex items-center justify-between">
    <div className="flex space-x-4 items-center justify-end w-full">
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 1</a>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 2</a>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 3</a>
      <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 4</a>
      <a href="#" className="mr-4 text-sm text-gray-700 hover:text-gray-900"></a>
    </div>
    <div className="flex items-center space-x-3">
      <input 
        type="text" 
        placeholder="Search for products" 
        className="px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button className="text-gray-700 hover:text-gray-900">
        <FiHeart size={20} />
      </button>
      <button className="text-gray-700 hover:text-gray-900">
        <FiShoppingBag size={20} />
      </button>
    </div>
  </div>
</nav>
    </>
  );
};

export default Topbar;