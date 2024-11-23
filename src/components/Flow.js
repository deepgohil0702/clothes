import React, { useState, useEffect } from "react";

const Flow = () => {
  const sections = [
    {
      title: "Section",
      description: "This is the description for Section 1.",
      image: "https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Section+1",
    },
    {
      title: "Section",
      description: "This is the description for Section 2.",
      image: "https://via.placeholder.com/1200x600/33FF57/FFFFFF?text=Section+2",
    },
    {
      title: "Section",
      description: "This is the description for Section 3.",
      image: "https://via.placeholder.com/1200x600/5733FF/FFFFFF?text=Section+3",
    },
  ];

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prevSection) => (prevSection + 1) % sections.length);
    }, 3000); // Change section every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="py-12 px-6 md:py-20 md:px-8">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={sections[activeSection].image}
          alt={sections[activeSection].title}
          className="w-full max-w-4xl rounded-lg shadow-lg transform transition duration-500 hover:scale-105 md:h-auto h-[60vh] object-cover"
        />
      </div>

      {/* Navigation and Content */}
      <div className="mt-8">
        <div className="flex justify-center space-x-4">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-4 py-2 rounded-lg ${
                index === activeSection
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Section Description */}
        <div className="mt-4 text-center text-gray-700">
          <p>{sections[activeSection].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
