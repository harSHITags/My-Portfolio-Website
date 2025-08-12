import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setNotification(null);

    try {
      console.log("[Firestore] Attempting to submit message...");
      const docRef = await addDoc(collection(db, "portfolio-message"), {
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message,
        Timestamp: serverTimestamp()
      });
      
      console.log("[Firestore] Message submitted with ID:", docRef.id);
      
      setNotification({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setNotification(null), 5000);
      
    } catch (error) {
      console.error("[Firestore Error]", {
        code: error.code,
        message: error.message,
        fullError: error
      });
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      // Specific error handling
      if (error.code === 'permission-denied') {
        errorMessage = 'Database permission denied. Check security rules.';
      } else if (error.code === 'unavailable') {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      setNotification({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const subject = formData.subject ? `Subject: ${formData.subject}` : 'Contact from portfolio';
    const body = formData.message ? `Message: ${formData.message}` : '';
    window.location.href = `mailto:harshitarathore106@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${body}`)}`;
  };

  const NotificationToast = () => (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`fixed bottom-8 right-8 z-50 flex items-center justify-between p-4 rounded-lg shadow-xl max-w-md ${
            notification.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center">
            {notification.type === 'success' ? (
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            ) : (
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            )}
            <span>{notification.message}</span>
          </div>
          <button 
            onClick={() => setNotification(null)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/harshita-rathore-699a712a7",
      color: "text-white",
      bgColor: "bg-[#0A66C2]",
      name: "LinkedIn"
    },
    {
      icon: FaGithub,
      href: "https://github.com/harSHITags",
      color: "text-white",
      bgColor: "bg-gray-800 dark:bg-gray-900",
      name: "GitHub"
    },
    {
      icon: FaGoogle,
      href: "https://g.dev/Harshita_Rathore_MUCSE25",
      color: "text-white",
      bgColor: "bg-[#34A853]",
      name: "Google Dev"
    },
    {
      icon: Mail,
      href: "#",
      onClick: handleEmailClick,
      color: "text-white",
      bgColor: "bg-[#EA4335]",
      name: "Email"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <NotificationToast />
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                    required
                    minLength="2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                  required
                  minLength="3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your message here..."
                  required
                  minLength="10"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href="#" 
                      onClick={handleEmailClick}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      harshitarathore106@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    onClick={social.onClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative group w-14 h-14 rounded-full flex items-center justify-center ${social.bgColor} shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;