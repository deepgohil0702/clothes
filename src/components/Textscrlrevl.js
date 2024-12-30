
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Textscrlrevl = () => {
  useEffect(() => {
    // GSAP ScrollTrigger Animations
    gsap.fromTo(
      '.fade-in', 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center py-20">
      <p className="fade-in text-4xl md:text-5xl lg:text-6xl font-light text-gray-700">
        A digital <span className="font-semibold text-black">design</span> and <span className="font-semibold text-black">technology</span> studio located in <span className="font-semibold text-black">Oslo</span>.
      </p>
      <p className="fade-in text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mt-4">
        We <span className="font-semibold text-black">build</span> brands, <span className="font-semibold text-black">create</span> digital experiences, and <span className="font-semibold text-black">shape</span> the stories of tomorrow.
      </p>
      <button className="fade-in mt-8 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition duration-300">
        SEE OUR WORK <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Textscrlrevl;
