import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Harshita's portfolio assistant. I can help you learn about her background, projects, skills, and experience. What would you like to know?",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced knowledge base
  const chatbotKnowledge = {
    background:
      "Harshita Rathore is a passionate Computer Science Engineering student at Medi-Caps University with a CGPA of 8.01. She's a detail-oriented and creative Front-End Developer with strong foundations in modern web technologies and UI design. She completed a Google AI/ML internship and has hands-on experience in building responsive, user-centric web applications.",

    education:
      "Harshita is pursuing B.Tech in Computer Science Engineering at Medi-Caps University (2022-2026) with a CGPA of 8.01. She completed her higher secondary education at Bal Niketan Higher Secondary School with 74% in 12th grade and an outstanding 94% in 10th grade.",

    skills:
      "Her technical expertise includes Core Java, JavaScript, HTML5, CSS3, Python, C, C++, ReactJS, Tailwind CSS, Firebase, MongoDB, MySQL, AWS basics, Git & GitHub, Google Colab, Postman, and more. She has 90% proficiency in Frontend Development, 85% in JavaScript, 80% in React development, and 75% in Machine Learning.",

    projects: {
      localmate:
        "LocalMate is a comprehensive location-based services finder web app built with ReactJS, Node.js, Firebase, MongoDB, and Google Maps API. It helps users discover nearby service providers with real-time geolocation, Firebase authentication, and admin panel. The platform serves 500+ users with 95% satisfaction rate.",

      cosmic:
        "Cosmic Explorer is an interactive space facts and ISS tracker web app built with HTML5, CSS3, JavaScript, and public APIs. It provides real-time space facts, tracks the ISS, and notifies users of visibility timings. The app has 1000+ page views with 24/7 live data.",

      portfolio:
        "Her portfolio website features an integrated AI chatbot, glassmorphism design, smooth animations, and dark/light theme toggle. Built with HTML, CSS, and JavaScript, it showcases all her skills and projects with interactive elements.",
    },

    experience:
      "Harshita completed a Google AI/ML internship (June-July 2025) where she earned Google Developer badges, trained models using TensorFlow and Google Colab, and deployed them to Android applications. She also served as PR & Outreach Executive for Sahityik Literary Club, managing events with 500+ participants.",

    certifications:
      "She holds certifications from Cisco Networking Academy, AWS Cloud Foundations, Google Developer ML badges, Infosys Springboard, and JPMorgan Chase Virtual Internship. All certificates are available at her Google Drive.",

    contact:
      "You can reach Harshita at harshitarathore106@gmail.com, phone +91 6268882956. Connect with her on LinkedIn, GitHub, or visit her Google Developer profile.",
  }

  const generateResponse = (message) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! I'm Harshita's portfolio assistant. I can tell you about her background, technical skills, projects, experience, and achievements. What would you like to know?"
    }

    if (lowerMessage.includes("background") || lowerMessage.includes("about") || lowerMessage.includes("who is")) {
      return chatbotKnowledge.background
    }

    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("university")) {
      return chatbotKnowledge.education
    }

    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("programming")) {
      return chatbotKnowledge.skills
    }

    if (lowerMessage.includes("project")) {
      if (lowerMessage.includes("localmate")) {
        return chatbotKnowledge.projects.localmate
      } else if (lowerMessage.includes("cosmic") || lowerMessage.includes("space")) {
        return chatbotKnowledge.projects.cosmic
      } else if (lowerMessage.includes("portfolio")) {
        return chatbotKnowledge.projects.portfolio
      } else {
        return `Harshita has worked on several exciting projects:

🚀 **LocalMate** - A location-based services finder (500+ users, 95% satisfaction)
🌌 **Cosmic Explorer** - A space facts and ISS tracker (1000+ page views)
💼 **Interactive Portfolio** - This modern portfolio with integrated chatbot

Which project would you like to know more about?`
      }
    }

    if (lowerMessage.includes("experience") || lowerMessage.includes("internship") || lowerMessage.includes("google")) {
      return chatbotKnowledge.experience
    }

    if (lowerMessage.includes("certificate") || lowerMessage.includes("certification")) {
      return chatbotKnowledge.certifications
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return chatbotKnowledge.contact
    }

    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're welcome! Feel free to ask me anything else about Harshita's portfolio, projects, or experience!"
    }

    return `I'd be happy to help you learn about Harshita! I can tell you about:

🎓 **Background & Education** - Her academic journey
💻 **Technical Skills** - Programming languages and frameworks  
🚀 **Projects** - LocalMate, Cosmic Explorer, and Portfolio
💼 **Experience** - Google AI/ML internship and leadership roles
🏆 **Certifications** - Google Developer badges and more
📧 **Contact Information** - How to reach out

What would you like to know more about?`
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(
      () => {
        const botResponse = {
          id: messages.length + 2,
          text: generateResponse(inputValue),
          sender: "bot",
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      800 + Math.random() * 800,
    )
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestions = [
    "Tell me about Harshita's background",
    "What are her technical skills?",
    "Show me her projects",
    "What's her experience?",
    "How can I contact her?",
  ]

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    handleSendMessage()
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[600px] bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg z-50 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-xl">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Portfolio Assistant</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""} animate-fade-in-up`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "bot"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      : "bg-white/20 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {message.sender === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "bot"
                      ? "bg-white/20 dark:bg-white/10 text-slate-900 dark:text-white"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 animate-fade-in-up">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/20 dark:bg-white/10 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.16}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-white/20 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-1 bg-white/20 dark:bg-white/10 text-xs rounded-full text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/20 dark:border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-white/20 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-full text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
