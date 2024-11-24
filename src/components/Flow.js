import React, { useState, useEffect } from "react";

const Flow = () => {
  const sections = [
    {
      title: "Collection",
      description: "Web Scraping",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/step1.jpg",
    },
    {
      title: "Generation",
      description: "Leveraging Llama 3.1",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/step2.png",
    },
    {
      title: "Optimization",
      description: "Performance Tracking and Continuous Improvement",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/step3.png",
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
          className="w-full max-w-4xl rounded-lg shadow-lg transform transition duration-500 hover:scale-105 
                     sm:h-60 md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Navigation and Content */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* Buttons Section */}
        <div
          className="flex flex-wrap sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-4"
        >
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-4 py-2 rounded-lg text-center ${
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
        <div className="mt-6 sm:mt-8 text-center text-gray-700">
          <p>{sections[activeSection].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
