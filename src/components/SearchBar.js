import React, { useState, useEffect } from "react";
import { Paperclip, Plus, ArrowUp, DatabaseZap, Globe } from "lucide-react";

const SearchBar = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const searchQueries = [
    "How to design a shipping app?",
    "Best practices for React state management",
    "Tips for scaling a database",
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
          // Adding characters
          currentText = currentQuery.slice(0, currentText.length + 1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed);
        } else {
          // Start deleting after pause
          isDeleting = true;
          timeoutId = setTimeout(animateText, pauseBetweenQueries);
        }
      } else {
        if (currentText.length > 0) {
          // Removing characters
          currentText = currentText.slice(0, -1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed / 2);
        } else {
          // Move to next query
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* <h1 className="text-3xl font-bold mb-6">What can I help you ship?</h1> */}
      <div className="flex items-center border rounded-lg shadow-lg px-4 py-2 w-full max-w-2xl bg-gray-50">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg mr-3 border-2 border-gray-200">
          <Paperclip className="text-gray-500" size={20} />
        </div>
        <div className="flex items-center justify-center w-10 h-10">
          <DatabaseZap className="text-gray-500" size={20} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 mr-3">
          <Globe className="text-gray-500" size={20} />
        </div>

        <input
          type="text"
          placeholder=""
          value={displayedText}
          className="flex-grow text-gray-700 bg-transparent focus:outline-none"
          readOnly
        />

        <button className="flex items-center border rounded-lg px-4 py-2 bg-white text-gray-500 mr-3">
          <Plus className="mr-2" size={16} />
          Project
        </button>

        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${
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
  );
};

export default SearchBar;