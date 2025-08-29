
import { Download, Lightbulb, Users, Target, Heart, Pencil, Palette, Bot, BookOpen, Music, Figma, Camera, Leaf } from "lucide-react"

const About = ({ showToast }) => {
  const downloadPortfolio = () => {
    const content = `
HARSHITA RATHORE - COMPLETE PORTFOLIO
===================================
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
CERTIFICATIONS
==============
- Cisco Networking Essentials
- AWS Cloud Foundations
- Google Developer ML Badges
- Infosys Springboard
- JPMorgan Chase Virtual Internship
Generated on: ${new Date().toLocaleDateString()}
    `
    const blob = new Blob([content], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Harshita_Rathore_Complete_Portfolio.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    showToast("Complete portfolio downloaded successfully!", "success")
  }

  const values = [
    { icon: Lightbulb, label: "Problem Solving" },
    { icon: Users, label: "Adaptability" },
    { icon: Target, label: "Discipline" },
    { icon: Heart, label: "Leadership" },
    { icon: Users, label: "Communication" },
  ]

  const interests = [
    { icon: Figma, label: "UI/UX Design using Figma" },
    { icon: Users, label: "PR & Communication" },
    { icon: Music, label: "Music & Song Analysis" },
    { icon: Pencil, label: "Sketching" },
    { icon: Palette, label: "Visual Design Systems & Color Psychology" },
  ]

  const education = [
    {
      title: "B.Tech Computer Science Engineering",
      institution: "Medi-Caps University, Indore",
      period: "2022 - 2026",
      description: "CGPA: 8.01 | Focus on Software Development, AI/ML, and Data Structures",
    },
    {
      title: "Higher Secondary Education",
      institution: "Bal Niketan Higher Secondary School",
      period: "2020 - 2022",
      description: "Score: 74% | Science Stream with Mathematics",
    },
    {
      title: "Secondary Education",
      institution: "Bal Niketan Higher Secondary School",
      period: "2019 - 2020",
      description: "Score: 94% | Strong foundation in Mathematics and Science",
    },
  ]

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I’m a Computer Science Engineering student at Medi-Caps University with a solid foundation in Core Java and a passion for creating responsive, scalable, and user-focused digital experiences.
                Currently working on self-initiated projects, I’m actively building as a Frontend Developer using ReactJS, Tailwind CSS, and JavaScript—with backend experience to support full-stack development. I focus on writing clean, efficient code and delivering intuitive user experiences.
              </p>
              <p>
                I'm also exploring Machine Learning, expanding my skill set to build intelligent, real-world solutions. For me, being a developer isn’t about titles—it’s about building, learning, and shipping things that matter.
              </p>
            </div>
            
            {/* Download Section */}
            <div className="my-6 md:my-8 text-center">
              <button
                onClick={downloadPortfolio}
                className="flex items-center gap-2 md:gap-3 mx-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 text-base md:text-lg hover:scale-105 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                <span>Download Complete Portfolio</span>
              </button>
            </div>
            
            {/* Core Values */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white text-center">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.label}
                    className="flex items-center gap-2 md:gap-3 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-lg md:rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  >
                    <value.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                    <span className="font-medium text-sm md:text-base text-slate-900 dark:text-white">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 text-xs md:text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  >
                    <interest.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="animate-slide-in-right">
            <div className="space-y-4 md:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{edu.title}</h3>
                      <p className="text-blue-400 font-medium text-sm md:text-base">{edu.institution}</p>
                    </div>
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs md:text-sm font-medium mt-2 sm:mt-0 self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About