import React, { useState } from "react";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  const renderMainContent = () => {
    switch (activeTab) {
      case "chat":
        return (
          <div className="w-full max-w-2xl">
            <div className="relative flex items-center bg-gray-100 rounded-full p-4 shadow-md">
              <input
                type="text"
                placeholder="URL link"
                className="flex-grow bg-transparent outline-none text-sm sm:text-base md:text-lg px-4"
              />
              <div className="hidden md:flex items-center space-x-2">
                <i className="fas fa-paperclip text-lg md:text-xl"></i>
                <i className="fas fa-globe text-lg md:text-xl"></i>
              </div>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 md:p-3">
                <i className="fas fa-paper-plane text-sm md:text-lg"></i>
              </button>
            </div>
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mt-4">
              <button className="flex items-center space-x-2 bg-green-100 text-green-600 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base">
                <i className="fas fa-image"></i>
                <span>Send mail</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base">
                <i className="fas fa-code"></i>
                <span>generate mail</span>
              </button>
              <button className="flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base">
                <i className="fas fa-lightbulb"></i>
                <span>Bulk mail</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base">
                <i className="fas fa-chart-bar"></i>
                <span>Analyze data</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-2 rounded-full text-xs sm:text-sm md:text-base">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
              </button>
            </div>
          </div>
        );
      case "linkedin":
        return (
          <div className="w-full max-w-2xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">LinkedIn Jobs</h2>
            <p className="text-sm sm:text-base">
              Here you can see job listings from LinkedIn.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4">
              View LinkedIn Jobs
            </button>
          </div>
        );
      case "googlechat":
        return (
          <div className="w-full max-w-2xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Google Chat</h2>
            <p className="text-sm sm:text-base">
              Welcome to Google Chat. You can have conversations here.
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded-full mt-4">
              Start Google Chat
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      {/* Top Navigation */}
      <div className="w-full flex flex-wrap justify-around sm:justify-between items-center px-2 sm:px-4 py-2 bg-black text-white rounded-full max-w-md mx-auto shadow-md mt-8 sm:mt-16">
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
            activeTab === "chat" ? "bg-white text-black" : "opacity-50"
          }`}
        >
          <i className="fas fa-comment"></i>
          <span className="text-xs sm:text-sm font-medium">Chat</span>
        </button>
        <button
          onClick={() => setActiveTab("linkedin")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "linkedin" ? "bg-white text-black" : "opacity-50"
          }`}
        >
          <i className="fab fa-linkedin"></i>
          <span className="text-xs sm:text-sm font-medium">All jobs</span>
        </button>
        <button
          onClick={() => setActiveTab("googlechat")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "googlechat" ? "bg-white text-black" : "opacity-50"
          }`}
        >
          <i className="fab fa-google"></i>
          <span className="text-xs sm:text-sm font-medium">Website</span>
        </button>
      </div>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 w-full mt-8 sm:mt-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
          What can I help with?
        </h1>
        {renderMainContent()}
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center p-4 bg-gray-50 text-gray-500 text-xs sm:text-sm">
        <div className="mt-2">
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-4 sm:px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Upload Database
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </footer>
    </div>
  );
};

export default Chat;
