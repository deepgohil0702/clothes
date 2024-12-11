import React, { useState } from 'react';
import { Home, User, Settings, PhoneCall } from 'lucide-react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Home');

  const TABS = [
    { label: 'Home', icon: <Home className="h-6 w-6" /> },
    { label: 'Profile', icon: <User className="h-6 w-6" /> },
    { label: 'Settings', icon: <Settings className="h-6 w-6" /> },
    { label: 'Contact', icon: <PhoneCall className="h-6 w-6" /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-white rounded-xl shadow-md md:w-[25%]">
      <div className="flex justify-around p-2">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 \
              ${activeTab === tab.label ? 'text-black' : 'text-gray-400'}`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
