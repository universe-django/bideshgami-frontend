
import React, { useState } from "react";
import { Search, Send, Image } from "lucide-react";

export default function Chatbox() {
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm interested in the Malaysia Work Permit. Can you provide more details?",
            sent: false,
        },
        {
            id: 2,
            text: "Hi! Yes, absolutely. The Malaysia Work Permit starts at 15,000 BDT. What would you like to know?",
            sent: true,
        },
        {
            id: 3,
            text: "What documents do I need to apply?",
            sent: false,
        },
        {
            id: 4,
            text: "You'll need your passport, educational certificates, work experience letters, and passport-sized photos. I can send you the complete checklist if you'd like.",
            sent: true,
        },
    ]);


    const handleSendMessage = () => {
        if (messageText.trim() === "") return;

        const newMessage = {
            id: messages.length + 1,
            text: messageText,
            sent: true,
        };

        setMessages([...messages, newMessage]);
        setMessageText("");

        setTimeout(() => {
            const replyMessage = {
                id: messages.length + 2,
                text: "Thank you for your message. Our team will get back to you shortly!",
                sent: false,
            };
            setMessages((prev) => [...prev, replyMessage]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };




    return (
        <div className="flex w-full h-screen bg-gray-100">
            <div className="flex max-w-7xl mx-auto bg-white shadow-xl mt-6">
                {/* Sidebar */}
                <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
                    <div className="p-5 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            My Message
                        </h2>
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2.5">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Share Manager"
                                className="flex-1 outline-none text-sm text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="flex items-center px-5 py-4 cursor-pointer bg-blue-50 border-l-4 border-blue-500 hover:bg-blue-100 transition">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-3">
                                M
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">
                                    Malaysia Work Permit Visa
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center px-5 py-4 cursor-pointer hover:bg-gray-100 transition">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-white font-bold text-lg mr-3">
                                I
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-800">
                                    Italy Work Permit Visa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Chat */}
                <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="px-8 py-5 border-b border-gray-200 bg-white">
                        <h1 className="text-xl font-semibold text-gray-800 mb-4">
                            Chat With Bideshgami
                        </h1>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=200&h=100&fit=crop"
                                    alt="Malaysia"
                                    className="w-20 h-12 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-sm font-medium text-blue-500 mb-1">
                                        Malaysia Work Permit
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-1">Starting from...</p>
                                    <span className="text-sm font-semibold text-green-600">
                                        15,000 BDT
                                    </span>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">20 Day Ago</div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex mb-5 ${message.sent ? "flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-full flex-shrink-0 ${message.sent ? "bg-blue-500 ml-3" : "bg-gray-400 mr-3"
                                        }`}
                                />
                                <div
                                    className={`max-w-xl px-4 py-3 rounded-xl text-sm leading-relaxed shadow-sm ${message.sent
                                            ? "bg-blue-500 text-white ml-auto"
                                            : "bg-white text-gray-800"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="px-8 py-5 bg-white border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="flex-1 flex items-center bg-gray-100 border border-gray-200 rounded-full px-5 py-3">
                                <input
                                    type="text"
                                    placeholder="Type Message"
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="flex-1 outline-none bg-transparent text-sm text-gray-800"
                                />
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                            >
                                <Send className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-blue-500 transition">
                                <Image className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}