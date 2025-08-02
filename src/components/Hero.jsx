import { Rocket, Mail, Download, Code, Brain } from "lucide-react"
import myImage from "../assets/profile//Linkedin Profile pic .jpg"

const Hero = ({ showToast }) => {
  const downloadPortfolio = () => {
    const content = `
HARSHITA RATHORE - PORTFOLIO
============================

Contact Information:
- Email: harshitarathore106@gmail.com
- Phone: +91 6268882956
- LinkedIn: https://www.linkedin.com/in/harshita-rathore-699a712a7
- GitHub: https://github.com/harSHITags
- Google Developer Profile: https://g.dev/Harshita_Rathore_MUCSE25

PROFESSIONAL SUMMARY
====================
Detail-oriented and creative Front-End Developer with a strong foundation in modern web technologies and UI design. Skilled in building responsive, user-centric web applications using HTML, CSS, JavaScript, and ReactJS. Completed a Google in-house AI/ML internship with hands-on experience in TensorFlow and model deployment.

EDUCATION
=========
B.Tech in Computer Science Engineering
Medi-Caps University, Indore, MP
2022 – 2026 | CGPA: 8.01

TECHNICAL SKILLS
===============
Languages: Core Java, JavaScript, HTML, CSS, Python, C, C++
Frontend: ReactJS, Tailwind CSS, Vanilla JS
Backend/DB: Firebase, MongoDB, MySQL
Cloud/Hosting: AWS (S3, EC2, Lambda), Firebase Hosting, Netlify
Tools & Platforms: VS Code, Git & GitHub, Google Colab, Postman

PROJECTS
========
1. LocalMate – Location-Based Services Finder Web App
2. Cosmic Explorer – Space Facts & ISS Tracker Web App  
3. Portfolio Website with Integrated Chatbot

EXPERIENCE
==========
AI/ML Intern – Google Developer Program (June-July 2025)
PR & Outreach Executive – Sahityik Literary Club (2023-2024)

Generated on: ${new Date().toLocaleDateString()}
    `

    const blob = new Blob([content], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Harshita_Rathore_Portfolio.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    showToast("Portfolio downloaded successfully!", "success")
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-blue-500 font-mono text-sm mb-4 animate-slide-in-left">👋 Hello, I'm</p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-in-left">
              Harshita{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Rathore
              </span>
            </h1>

            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-slate-700 dark:text-slate-300 animate-slide-in-left">
              <span className="inline-block overflow-hidden border-r-2 border-blue-500 whitespace-nowrap animate-typing">
                Front-End Developer & AI Enthusiast
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed animate-slide-in-left">
              Passionate about creating beautiful, responsive web applications with modern technologies. Currently
              pursuing B.Tech in Computer Science with hands-on experience in AI/ML from Google Developer Program.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in-left">
              <button
                onClick={() => scrollToSection("#projects")}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <Rocket className="w-5 h-5" />
                <span>View My Work</span>
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={downloadPortfolio}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Portfolio</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-in-right">
            <div className="relative w-[25rem] h-[25rem] mx-auto">
              {/* Profile Image */}
              <div className="relative w-[29rem] h-[29rem] mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src={myImage}
                  alt="Harshita Rathore"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Circles */}
              <div
                className="absolute inset-0 border-2 border-blue-200 dark:border-blue-800 rounded-full animate-float"
                style={{ width: "33rem", height: "33em", top: "-2rem", left: "-2rem" }}
              />
              <div
                className="absolute inset-0 border-2 border-blue-100 dark:border-blue-900 rounded-full animate-float"
                style={{
                  width: "36rem",
                  height: "36rem",
                  top: "-3.5rem",
                  left: "-3.5rem",
                  animationDelay: "1s",
                  animationDirection: "reverse",
                }}
              />

              {/* Floating Badges */}
                {/* Badge Top Right Over Ring */}
    <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20">
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 dark:border-white/10 shadow-lg animate-float hover:scale-105 transition-transform w-52">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white">Web Developer</h4>
            <p className="text-xs text-slate-300 dark:text-slate-400">React & JS</p>
          </div>
        </div>
      </div>
    </div>

    {/* Badge Bottom Left Over Ring */}
    <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-20">
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 dark:border-white/10 shadow-lg animate-float hover:scale-105 transition-transform w-52 animation-delay-1000">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white">
            🤖
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white">AI Enthusiast</h4>
            <p className="text-xs text-slate-300 dark:text-slate-400">ML & Python</p>
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>

                       <div className="relative max-w-sm mx-auto mt-24 p-6 bg-white/10 dark:bg-slate-900/40 rounded-2xl border border-blue-400/25 shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-shadow duration-300 hover:shadow-blue-400/30 group animate-fade-in-up">
  <div className="absolute -top-5 left-4 w-10 h-10 bg-blue-600/90 text-white text-2xl font-semibold rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
    ❝
  </div>
  <p className="text-slate-900 dark:text-slate-100 text-base sm:text-lg font-normal italic leading-snug mb-4 pl-3">
    "Between human insight and machine speed — I bridge the two."
  </p>
  <p className="text-right text-slate-600 dark:text-slate-400 text-xs font-medium tracking-wide">
    — Harshita Rathore
  </p>
</div>


      </div>
    </section>
  )
}

export default Hero
