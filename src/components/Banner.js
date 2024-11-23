import React from 'react';

const HomeSection = () => {
  return (
    <section className="flex items-center justify-between py-16 px-6 bg-gray-50">
      {/* Left Side (Text and Buttons) */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Transform Your Outreach Today
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Discover how our AI-driven cold email generator can revolutionize your client outreach strategy.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-black text-black rounded-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-1/2">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Outreach Image"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
    </section>
  );
};

export default HomeSection;
