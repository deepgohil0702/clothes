import React, { useState } from 'react';
import { Home, User, Settings, PhoneCall } from 'lucide-react';
import HomeTab from './HomeTab'; // Import the tab components
import ProfileTab from './ProfileTab';
import SettingsTab from './SettingsTab';
import ContactTab from './ContactTab';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Home');

  const TABS = [
    { label: 'Home', icon: <Home className="h-6 w-6" />, component: <HomeTab /> },
    { label: 'Profile', icon: <User className="h-6 w-6" />, component: <ProfileTab /> },
    { label: 'Settings', icon: <Settings className="h-6 w-6" />, component: <SettingsTab /> },
    { label: 'Contact', icon: <PhoneCall className="h-6 w-6" />, component: <ContactTab /> },
  ];

  return (
    <div className="relative">
      {/* Display the active tab component */}
      <div className="mb-16">{TABS.find((tab) => tab.label === activeTab)?.component}</div>

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
    </div>
  );
}
