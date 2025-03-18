import { useState } from "react";
import { FiMenu, FiX, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden w-2/3`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">beyondXL</div>
          
          <button onClick={toggleMenu} className="text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="space-y-6">
            <div className="space-y-4 pt-4">
              <button onClick={() => { navigate("/collection1"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Relaxed</button>
              <button onClick={() => { navigate("/collection2"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Classy</button>
              <button onClick={() => { navigate("/collection3"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Ethnics</button>
              <button onClick={() => { navigate("/collection4"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Vibes</button>
              <button onClick={() => { navigate("/sale"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Sale</button>
            </div>

            <div className="space-y-4 border-t pt-4">
              <button onClick={() => { navigate("/track-order"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Track Order</button>
              <button onClick={() => { navigate("/store-locator"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Store Locator</button>
              <button onClick={() => { navigate("/contact"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Contact Us</button>
              <button onClick={() => { navigate("/login"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header className="bg-white shadow">
        <nav className="bg-gray-100 shadow hidden md:block">
          <div className="container mx-auto px-1 py-0.5 flex items-center justify-end">
            <div className="flex space-x-2 items-center">
              <button onClick={() => navigate("/track-order")} className="text-xs text-gray-700 hover:text-gray-900">Track Order</button>
              <button onClick={() => navigate("/store-locator")} className="text-xs text-gray-700 hover:text-gray-900">Store Locator</button>
              <button onClick={() => navigate("/contact")} className="text-xs text-gray-700 hover:text-gray-900">Contact Us</button>
              <button onClick={() => navigate("/login")} className="text-xs text-gray-700 hover:text-gray-900">Login</button>  
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            <FiMenu size={24} />
          </button>

          {/* Logo with Desktop Navigation */}
          <div className="flex items-center justify-between w-full">
  <div className="text-2xl font-bold">beyondXL</div>
  <nav className="hidden md:flex justify-center flex-grow space-x-4">
    <button onClick={() => navigate("/collection1")} className="text-gray-700 hover:text-gray-900">Relaxed</button>
    <button onClick={() => navigate("/collection2")} className="text-gray-700 hover:text-gray-900">Classy</button>
    <button onClick={() => navigate("/collection3")} className="text-gray-700 hover:text-gray-900">Ethnics</button>
    <button onClick={() => navigate("/collection4")} className="text-gray-700 hover:text-gray-900">Vibes</button>
 </nav>
</div>


          {/* Search, Wishlist, and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search for products" 
              className="px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiHeart size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <FiShoppingBag size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Topbar;


// import { useState } from "react";
// import { FiMenu, FiX, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const Topbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => setShowMenu(!showMenu);
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-50 bg-white transform ${
//           showMenu ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden w-1/3`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <div className="text-xl font-bold">beyondXL</div>
//           <button onClick={toggleMenu} className="text-gray-700">
//             <FiX size={24} />
//           </button>
//         </div>
//         <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
//           <div className="space-y-6">
//             <div className="space-y-4 pt-4">
//               <button onClick={() => { navigate("/collection1"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Relaxed</button>
//               <button onClick={() => { navigate("/collection2"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Classy</button>
//               <button onClick={() => { navigate("/collection3"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Ethnics</button>
//               <button onClick={() => { navigate("/collection4"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Vibes</button>
//               <button onClick={() => { navigate("/sale"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Sale</button>
//             </div>

//             <div className="space-y-4 border-t pt-4">
//               <button onClick={() => { navigate("/track-order"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Track Order</button>
//               <button onClick={() => { navigate("/store-locator"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Store Locator</button>
//               <button onClick={() => { navigate("/contact"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Contact Us</button>
//               <button onClick={() => { navigate("/login"); toggleMenu(); }} className="block text-gray-700 hover:text-gray-900">Login</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Top Navigation - Utility links moved to right */}
//       <nav className="bg-gray-100 shadow hidden md:block">
//         <div className="container mx-auto px-4 py-2 flex items-center justify-end">
//           <div className="flex space-x-4 items-center">
//             <button onClick={() => navigate("/track-order")} className="text-gray-700 hover:text-gray-900">Track Order</button>
//             <button onClick={() => navigate("/store-locator")} className="text-gray-700 hover:text-gray-900">Store Locator</button>
//             <button onClick={() => navigate("/contact")} className="text-gray-700 hover:text-gray-900">Contact Us</button>
//             <button onClick={() => navigate("/login")} className="text-gray-700 hover:text-gray-900">Login</button>  
//             <div className="flex items-center space-x-3 ml-6">
//               <input 
//                 type="text" 
//                 placeholder="Search for products" 
//                 className="px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <button className="text-gray-700 hover:text-gray-900">
//                 <FiHeart size={20} />
//               </button>
//               <button className="text-gray-700 hover:text-gray-900">
//                 <FiShoppingBag size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Header - Logo moved down */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           {/* Mobile Hamburger */}
//           <button onClick={toggleMenu} className="md:hidden text-gray-700">
//             <FiMenu size={24} />
//           </button>

//           {/* Logo - Now centered/moved down */}
//           <div className="flex items-center">
//             <div className="text-xl font-bold">beyondXL</div>
//           </div>

//           {/* Mobile Icons */}
//           <div className="md:hidden flex items-center space-x-3">
//             <button className="text-gray-700 hover:text-gray-900">
//               <FiSearch size={20} />
//             </button>
//             <button className="text-gray-700 hover:text-gray-900">
//               <FiHeart size={20} />
//             </button>
//             <button className="text-gray-700 hover:text-gray-900">
//               <FiShoppingBag size={20} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Navigation - Collections menu moved down */}
//       <nav className="bg-white border-t border-gray-200 hidden md:block">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex items-center justify-center space-x-8">
//             <button onClick={() => navigate("/collection1")} className="text-gray-700 hover:text-gray-900">Relaxed</button>
//             <button onClick={() => navigate("/collection2")} className="text-gray-700 hover:text-gray-900">Classy</button>
//             <button onClick={() => navigate("/collection3")} className="text-gray-700 hover:text-gray-900">Ethnics</button>
//             <button onClick={() => navigate("/collection4")} className="text-gray-700 hover:text-gray-900">Vibes</button>
//             <button onClick={() => navigate("/sale")} className="text-gray-700 hover:text-gray-900">Sale</button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Topbar;