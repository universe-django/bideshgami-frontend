
import React, { useState } from "react";

const faqsData = [
  {
    question: "How much experience do you have as a Social Media Marketing Manager?",
    answer: "I have [X years/months] of experience managing social media accounts for various brands, creating engaging content, running ad campaigns, and analyzing performance to grow followers and engagement",
  },
  {
    question: "What is the time duration for uploading the first post?",
    answer: "Typically, the first post is uploaded within [X days/hours] after the account setup and content strategy is finalized. This ensures that the content is well-planned and aligns with the brand’s goals..",
  },
  {
    question: "How many followers can you get in a month?",
    answer: "including replying to comments and messages—is usually part of a Social Media Marketing Manager’s role, unless the client specifically handles it themselves.",
  },
  {
    question: "As a Social Media Marketing Manager, is it my responsibility to reply to comments and messages?",
    answer: "The growth depends on the niche, content quality, and engagement strategies. On average, we aim for steady and organic growth, which can range from [X–Y] followers per month.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center">
    <div className=" mx-auto mt-10 md:w-4/5 bg-white rounded-lg shadow-lg p-6">
      {faqsData.map((faq, index) => (
        <div key={index} className="border-b  last:border-b-0">
           
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-4 focus:outline-none"
          >
            <span className="text-lg text-left font-medium">{faq.question}</span>
            {/* Smooth arrow */}
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Smooth slide-down answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
     </div>
  );
};

export default FAQ;
