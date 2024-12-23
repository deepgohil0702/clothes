import React, { useState } from 'react';

export default function ChatTab() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! How can I assist you today?' },
    { id: 2, type: 'user', content: 'Can you tell me about GPT?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: Date.now(), type: 'user', content: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-black text-white">
      {/* Chat Messages Area */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg shadow ${
                message.type === 'user'
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-gray-900 p-4 border-t border-gray-700 flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border border-gray-700 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-600"
        />
        <button
          onClick={handleSend}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
