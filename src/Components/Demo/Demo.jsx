import React, { useState, useEffect, useRef } from 'react';

const Demo = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatBoxRef = useRef(null);

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Bot response to: ' + input, sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    // Scroll to the bottom when a new message is added
    useEffect(() => {
        chatBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col bg-gray-100 p-6">
            <div className="flex-grow bg-white rounded-lg shadow-lg p-4 overflow-y-auto space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        <div
                            className={`max-w-xs p-2 rounded-lg text-white ${message.sender === 'user'
                                    ? 'bg-blue-500'
                                    : 'bg-gray-400'
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={chatBoxRef}></div>
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Demo;