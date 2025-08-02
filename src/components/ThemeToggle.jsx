
import { Sun, Moon } from "lucide-react"

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ transform: darkMode ? "rotate(0deg)" : "rotate(180deg)" }}
    >
      <div className="w-full h-full flex items-center justify-center transition-transform duration-300">
        {darkMode ? <Sun className="w-6 h-6 text-blue-500" /> : <Moon className="w-6 h-6 text-blue-500" />}
      </div>
    </button>
  )
}

export default ThemeToggle
