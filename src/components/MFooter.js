const MFooter = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">beyondXL</h3>
              <p className="text-gray-300">Your one-stop fashion destination</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns</Link></li>
                <li><Link to="/size-guide" className="text-gray-300 hover:text-white">Size Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  {/* Add Facebook icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  {/* Add Instagram icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Add Twitter icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 beyondXL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };