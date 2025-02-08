import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiShoppingBag } from 'react-icons/fi';
import Footer from "./Footer";
import HappyCustomers from "./HappyCustomers";

const FashionStore = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="font-sans">
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">beyondXL</div>
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
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 1</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 2</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 3</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Collection 4</a>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Sale</a>
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

      {/* Main Content */}
      <main className="mt-16">
        {/* Home Section */}
        <section id="home" className="bg-gray-100 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                NEW <br />
                <span className="text-2xl md:text-4xl">ARRIVALS</span>
              </h1>
              <a href="#featured" className="bg-red-600 text-white px-8 py-4 inline-block hover:bg-red-700 transition">
                GO SHOPPING
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <img src="img/home.png" alt="Home" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </section>

        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold text-gray-900">Our Collections</h1>
          <div className="mt-1">
            <div className="inline-block w-9 h-1 bg-red-500"></div>
          </div>
        </div>

        {/* Collection Section */}
        <section className="py-5">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            {[['Men', 'img/backpackMan.png'], ['Women', 'img/backpackWoman.png'],['Men', 'img/backpackMan.png'], ['Women', 'img/backpackWoman.png']].map(([gender, img], idx) => (
              <div key={gender} className={`flex ${idx % 2 ? 'flex-row-reverse' : ''} bg-gray-100 p-8 hover:-translate-y-2 transition`}>
                <img src={img} alt={gender} className="w-32" />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-semibold">
                    <span className="block text-gray-600 text-sm">{gender}</span>
                    Clothes
                  </h2>
                  <a href="#" className="text-sm text-gray-600 hover:underline">View collection</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">FEATURED PRODUCTS</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.name} className="group hover:-translate-y-2 transition">
                  <div className="bg-gray-100 relative p-8">
                    <span className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm">NEW</span>
                    <img src={product.image} alt={product.name} className="w-full" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other sections */}
      </main>

      <HappyCustomers/>
      <Footer/>
    </div>
  );
};

const featuredProducts = [
  { name: 'Headphone One Black', price: 29, image: 'img/feature1.png' },
  { name: 'Speaker Beats Pill', price: 199, image: 'img/feature2.png' },
  { name: 'Apple Air Pods', price: 122, image: 'img/feature3.png' },
  { name: 'Smartwatch F9 Negro', price: 99, image: 'img/feature4.png' },
];

export default FashionStore;