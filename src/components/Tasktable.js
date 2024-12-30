import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TalksTable = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate each table row on scroll
    gsap.fromTo(
      "tbody tr",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: "tbody",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // Animate the button
    gsap.fromTo(
      "button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "button",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">See our talks</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2"></th>
              <th className="border-b-2 border-gray-300 py-2"></th>
              <th className="border-b-2 border-gray-300 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 py-2 line-through">A new way of thinking</td>
              <td className="border-b border-gray-300 py-2 line-through">October 10th, 2023</td>
              <td className="border-b border-gray-300 py-2 line-through">In House</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">Technology in 2024</td>
              <td className="border-b border-gray-300 py-2">September 3rd, 2023</td>
              <td className="border-b border-gray-300 py-2">Beckenstreet 21</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">The digital era — what is it?</td>
              <td className="border-b border-gray-300 py-2">September 4th, 2023</td>
              <td className="border-b border-gray-300 py-2">Beckenstreet 21</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">Building brands and products</td>
              <td className="border-b border-gray-300 py-2">November 21st, 2023</td>
              <td className="border-b border-gray-300 py-2">In House</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">Ecommerce 101</td>
              <td className="border-b border-gray-300 py-2">January 7th, 2024</td>
              <td className="border-b border-gray-300 py-2">Hillway Drive 28</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">Crafting digital experiences</td>
              <td className="border-b border-gray-300 py-2">January 28th, 2024</td>
              <td className="border-b border-gray-300 py-2">Taunton Fairway 4</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
          <button className="px-4 py-2 bg-black text-white rounded-full flex items-center">
            MORE TALKS <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalksTable;
