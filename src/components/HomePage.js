// import React, { useState } from "react";
// import Flow from "./Flow";
// import Banner from "./Banner";
// import SearchBar from "./SearchBar";
// import { useNavigate } from "react-router-dom";



// const HomePage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <div className="bg-white text-gray-900 font-sans">
//       {/* Announcement Bar */}


//       {/* Header */}
//       <header className="flex justify-between items-center py-4 px-6 md:px-8">
//         {/* Logo */}
//         <div className="flex items-center">
//           <span className="ml-2 text-xl font-semibold">OutReach</span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <a className="text-gray-700 hover:text-black transition" href="#">
//             Platform
//           </a>

//           <a className="text-gray-700 hover:text-black transition" href="#">
//             Case Studies
//           </a>
//           <a className="text-gray-700 hover:text-black transition" href="#">
//             Blog
//           </a>
//           <a className="text-gray-700 hover:text-black transition" href="#">
//             Docs
//           </a>
//           <a onClick={() => navigate("/login")} className="cursor-pointer text-gray-700 hover:text-black transition">
//             Login
//           </a>
//           <a onClick={() => navigate("/signup")} className="cursor-pointer text-gray-700 hover:text-black transition">
//             Signup
//           </a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 hover:text-black"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle Mobile Menu"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
//             Sign in
//           </button>

//         </div>
//       </header>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <nav className="md:hidden bg-gray-100 shadow-lg p-4">
//           <a className="block py-2 text-gray-700 hover:text-black" href="#">
//             Platform
//           </a>
//           <a className="block py-2 text-gray-700 hover:text-black" href="#">
//             Case Studies
//           </a>
//           <a className="block py-2 text-gray-700 hover:text-black" href="#">
//             Blog
//           </a>
//           <a className="block py-2 text-gray-700 hover:text-black" href="#">
//             Docs
//           </a>
//           <div className="mt-4">
//             <button className="block w-full border border-gray-700 text-gray-700 px-4 py-2 rounded mb-2 hover:bg-gray-100 transition">
//               Sign in
//             </button>
   
//           </div>
//         </nav>
//       )}

// <main className="main-section">

// </main>








//       {/* Features Section */}
//       <section className="py-12 px-6 md:py-20 md:px-8 bg-black">
//   <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
//     Key Features
//   </h2>
//   <div className="grid gap-8 md:grid-cols-3 text-center">
//     <div>
//       <h3 className="text-xl font-semibold text-white mb-2">
//         AI-Powered Emails
//       </h3>
//       <p className="text-gray-400">
//         Generate personalized cold emails using Llama 3.1 and LangChain for efficient outreach.
//       </p>
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold text-white mb-2">
//         Smart Data Integration
//       </h3>
//       <p className="text-gray-400">
//         Leverage ChromaDB to connect job requirements with your portfolio for tailored responses.
//       </p>
//     </div>
//     <div>
//       <h3 className="text-xl font-semibold text-white mb-2">
//         Real-Time Insights
//       </h3>
//       <p className="text-gray-400">
//         Automatically scrape job postings to craft dynamic, targeted emails.
//       </p>
//     </div>
//   </div>
// </section>



//       <Flow />
//       <Banner />
//       {/* Benefits Section */}
//       <section className="py-12 px-6 md:py-20 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//           Why Choose OutReach?
//         </h2>
//         <div className="flex flex-col md:flex-row md:space-x-8">
//           <div className="flex-1 text-center md:text-left">
//             <h3 className="text-xl font-semibold mb-4">Save Time</h3>
//             <p className="text-gray-500">
//               Automate your email generation process and focus on what matters—building client relationships.
//             </p>
//           </div>
//           <div className="flex-1 text-center md:text-left">
//             <h3 className="text-xl font-semibold mb-4">Boost Engagement</h3>
//             <p className="text-gray-500">
//               Deliver tailored, relevant emails that increase client trust and response rates.
//             </p>
//           </div>
//           <div className="flex-1 text-center md:text-left">
//             <h3 className="text-xl font-semibold mb-4">Cloud Performance</h3>
//             <p className="text-gray-500">
//               Enjoy fast, reliable inference for your AI models using cloud platforms.
//             </p>
//           </div>
//         </div>
//       </section>

 

//       {/* Footer */}
//       <footer className="bg-black text-white py-8 px-6 md:px-12">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Logo */}
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-xl font-semibold">OutReach</h2>
//           </div>

//           {/* Footer Links */}
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
//             <a href="#" className="hover:text-gray-400 transition">
//               Platform
//             </a>
//             <a href="#" className="hover:text-gray-400 transition">
//               Blog
//             </a>
//             <a href="#" className="hover:text-gray-400 transition">
//               Docs
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="mt-6 md:mt-0 flex space-x-4">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white transition"
//               aria-label="Twitter"
//             >
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white transition"
//               aria-label="Facebook"
//             >
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-white transition"
//               aria-label="LinkedIn"
//             >
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center mt-6 text-sm text-gray-400">
//           © 2024 OutReach. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from "react";
import { Paperclip, Plus, ArrowUp, DatabaseZap, Globe } from "lucide-react";
import Flow from "./Flow";
import Banner from "./Banner";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const searchQueries = [
    "Match portfolio with DevOps engineer requirements",
    "Find tech companies hiring React developers",
    "Generate personalized cold email for UI/UX position"
    
  ];

  const typingSpeed = 100;
  const pauseBetweenQueries = 1500;

  useEffect(() => {
    let currentText = "";
    let timeoutId;
    let isDeleting = false;

    const animateText = () => {
      const currentQuery = searchQueries[currentQueryIndex];

      if (!isDeleting) {
        if (currentText.length < currentQuery.length) {
          currentText = currentQuery.slice(0, currentText.length + 1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(animateText, pauseBetweenQueries);
        }
      } else {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed / 2);
        } else {
          isDeleting = false;
          setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length);
          timeoutId = setTimeout(animateText, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(animateText, typingSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentQueryIndex]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-2 text-xl font-semibold">OutReach</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a className="text-gray-700 hover:text-black transition" href="#">
            Platform
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Case Studies
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Blog
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Docs
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Login
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Signup
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
            Sign in
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 shadow-lg p-4">
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Platform
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Case Studies
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Blog
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Docs
          </a>
          <div className="mt-4">
            <button className="block w-full border border-gray-700 text-gray-700 px-4 py-2 rounded mb-2 hover:bg-gray-100 transition">
              Sign in
            </button>
          </div>
        </nav>
      )}

<main className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-8 px-4">
            Ship Faster with
            <span className="text-blue-600 block sm:inline"> OutReach</span>
          </h1>
          
          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-8 sm:mb-12 px-4">
            Generate personalized emails, connect with potential clients, and scale your outreach efforts using AI-powered tools.
          </p>

          {/* Search Bar Integration */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="flex flex-col sm:flex-row items-center border rounded-lg shadow-lg p-3 sm:p-4 bg-gray-50">
              {/* Desktop Icons - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-2 mr-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-gray-200">
                  <Paperclip className="text-gray-500" size={20} />
                </div>
                <div className="flex items-center justify-center w-10 h-10">
                  <DatabaseZap className="text-gray-500" size={20} />
                </div>
                <div className="flex items-center justify-center w-10 h-10">
                  <Globe className="text-gray-500" size={20} />
                </div>
              </div>

              {/* Search Input */}
              <div className="w-full mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder=""
                  value={displayedText}
                  className="w-full text-gray-700 bg-transparent focus:outline-none text-base sm:text-lg"
                  readOnly
                />
              </div>

              {/* Mobile Icons Row */}
              <div className="flex sm:hidden items-center justify-between w-full px-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-gray-200">
                    <Paperclip className="text-gray-500" size={20} />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-lg">
                    <DatabaseZap className="text-gray-500" size={20} />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-lg">
                    <Globe className="text-gray-500" size={20} />
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                    displayedText.length > 0 ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <ArrowUp 
                    className={`${displayedText.length > 0 ? "text-white" : "text-gray-500"}`} 
                    size={20} 
                  />
                </div>
              </div>

              {/* Desktop Project Button and Arrow */}
              <div className="hidden sm:flex items-center space-x-3">
                <button className="flex items-center border rounded-lg px-4 py-2 bg-white text-gray-500">
                  <Plus className="mr-2" size={16} />
                  <span>Project</span>
                </button>

                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                    displayedText.length > 0 ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <ArrowUp 
                    className={`${displayedText.length > 0 ? "text-white" : "text-gray-500"}`} 
                    size={20} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-medium">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-base sm:text-lg font-medium">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </main>


      {/* Features Section */}
      <section className="py-12 px-6 md:py-20 md:px-8 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              AI-Powered Emails
            </h3>
            <p className="text-gray-400">
              Generate personalized cold emails using Llama 3.1 and LangChain for efficient outreach.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Smart Data Integration
            </h3>
            <p className="text-gray-400">
              Leverage ChromaDB to connect job requirements with your portfolio for tailored responses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-Time Insights
            </h3>
            <p className="text-gray-400">
              Automatically scrape job postings to craft dynamic, targeted emails.
            </p>
          </div>
        </div>
      </section>
 <Flow/>
 <Banner/>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">OutReach</h2>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-400 transition">
              Platform
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Docs
            </a>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          © 2024 OutReach. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;