import React, { useState } from 'react';
import { MessageSquareMore, AudioLines, Mail, User } from 'lucide-react';
import ChatTab from './ChatTab'; // Import tab components
import ProfileTab from './ProfileTab';
import MailTab from './MailTab';
import AITab from './AiTab';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'Chat':
      return <ChatTab />;
    case 'AI':
      return <AITab />;
    case 'Mail':
      return <MailTab />;
    case 'Profile':
      return <ProfileTab />;
    default:
      return null;
  }
}

function NavigationBar({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-white rounded-xl shadow-md md:w-[25%]">
      <div className="flex justify-around p-2">
        {tabs.map((tab) => (
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

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Chat');

  const TABS = [
    { label: 'Chat', icon: <MessageSquareMore className="h-6 w-6" /> },
    { label: 'AI', icon: <AudioLines className="h-6 w-6" /> },
    { label: 'Mail', icon: <Mail className="h-6 w-6" /> },
    { label: 'Profile', icon: <User className="h-6 w-6" /> },
  ];

  return (
    <div className="relative h-screen w-screen flex flex-col">
      {/* Display the active tab component */}
      <div className="flex-grow">
        <TabContent activeTab={activeTab} />
      </div>

      {/* Navigation Bar */}
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
    </div>
  );
}
