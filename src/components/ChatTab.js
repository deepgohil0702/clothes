import React, { useState, useRef, useEffect } from 'react';

export default function ChatTab() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! How can I assist you today?' },
    { id: 2, type: 'user', content: 'Can you tell me about GPT?' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: Date.now(), type: 'user', content: newMessage }]);
      setNewMessage('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now() + 1, type: 'bot', content: 'Sure! GPT stands for Generative Pre-trained Transformer...' },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent line break
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  return (
    <div className="h-full w-full flex flex-col bg-white text-black p-28">
      {/* Chat Messages Area */}
      <div className="flex-grow overflow-y-auto">
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
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black'
              }`}
              style={{
                whiteSpace: 'pre-line', // Preserve line breaks
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-300 flex items-center space-x-2 mb-[30px] md:mb-[10px]">

        <textarea
          ref={inputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows="1"
          className="flex-grow border border-gray-300 rounded-lg p-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
        />
        <button
          onClick={handleSend}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
