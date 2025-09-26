import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close, Send, SupportAgent } from '@mui/icons-material';

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center space-x-1.5 p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl"
  >
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
  </motion.div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your virtual design assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const predefinedQuestions = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services, including:\n• Residential & Commercial Design\n• Space Planning & 3D Visualization\n• Color & Lighting Consultation\n• Project Management",
      keywords: ['service', 'services', 'offer', 'special']
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing varies. For example, a Color Consultation starts at ₹4,000, while full Residential Design starts at ₹25,000. We offer a free consultation to provide an accurate quote for your specific project!",
      keywords: ['cost', 'price', 'pricing', 'much', 'rates', 'fee']
    },
    {
      question: "How long does a project take?",
      answer: "Timelines depend on the project scope. A single room might take 2-4 weeks, while a full home renovation could take 2-6 months. We provide a detailed schedule after the initial consultation.",
      keywords: ['long', 'take', 'duration', 'timeline', 'fast', 'quick']
    },
    {
      question: "Do you provide 3D designs?",
      answer: "Yes, absolutely! We create photorealistic 3D renderings and virtual reality walkthroughs to help you visualize your space before any work begins.",
      keywords: ['3d', 'designs', 'visualization', 'renderings', 'vr', 'model']
    },
    {
      question: "What areas do you serve?",
      answer: "Our primary service areas are Pune and the Mumbai Metropolitan Region. For projects outside these areas, please contact us to discuss possibilities.",
      keywords: ['areas', 'serve', 'location', 'pune', 'mumbai', 'city']
    }
  ];
  
  const handleSendMessage = (messageText = inputMessage) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage) return;

    const userMessage = {
      id: Date.now(),
      text: trimmedMessage,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const userTextLower = trimmedMessage.toLowerCase();
      const matchedQ = predefinedQuestions.find(q => 
        q.keywords.some(keyword => userTextLower.includes(keyword))
      );

      let botResponseText;
      if (matchedQ) {
        botResponseText = matchedQ.answer;
      } else {
        const questionTopics = predefinedQuestions.map(q => q.keywords[0]).join(', ');
        botResponseText = `I'm here to help with your design questions! You can ask me about topics like: ${questionTopics}. For more detailed inquiries, please use our contact form.`;
      }
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        // UPDATED: Padding is now fixed to p-3
        className={`fixed bottom-4 left-4 z-[9998] bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Design Assistant Chat"
      >
        {/* UPDATED: Icon size is now fixed to w-6 h-6 */}
        <SupportAgent className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed bottom-4 left-4 z-[9998] w-[calc(100%-2rem)] sm:w-80 md:w-96 h-[60vh] sm:h-[70vh] max-h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <div className="bg-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <SupportAgent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Design Assistant</h3>
                  <p className="text-xs text-primary-100">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1 rounded-full transition-colors" aria-label="Close Chat">
                <Close className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex items-end gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  {message.isBot && (
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <SupportAgent className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none' 
                      : 'bg-primary-600 text-white rounded-br-none'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className="flex flex-wrap gap-2 mb-3">
                {predefinedQuestions.slice(0, 3).map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(q.question)}
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                />
                <button onClick={() => handleSendMessage()} className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors" aria-label="Send Message">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;