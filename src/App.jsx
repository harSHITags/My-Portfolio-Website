import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import ThemeToggle from "./components/ThemeToggle"
import ParallaxBackground from "./components/ParallaxBackground"
import Toast from "./components/Toast"
import PerformanceOptimizer from "./components/PerformanceOptimizer"
import UltraSmoothScroll from "./components/UltraSmoothScroll"
import LazySection from "./components/LazySection"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [toast, setToast] = useState({ show: false, message: "", type: "success" })

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" })
    }, 2000)
  }

  return (
    <div
      className={`min-h-screen will-change-transform transition-all duration-300 ${
        darkMode
          ? "bg-black text-slate-100"
          : "bg-white text-slate-900"
      }`}
    >
      <PerformanceOptimizer />
      <UltraSmoothScroll />
      <ParallaxBackground />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navigation />

      <main className="relative z-10 critical-render">
        <Hero showToast={showToast} />
        <About showToast={showToast} />
        <Skills />
        <Projects />
        <Experience />

        {/* Lazy load non-critical sections */}
        <LazySection threshold={0.1}>
          <Certifications />
        </LazySection>

        <LazySection threshold={0.1}>
          <Contact showToast={showToast} />
        </LazySection>
      </main>

      <LazySection threshold={0.1}>
        <Footer />
      </LazySection>

      <LazySection threshold={0.1}>
        <Chatbot />
      </LazySection>

      <Toast toast={toast} />
    </div>
  )
}

export default App
