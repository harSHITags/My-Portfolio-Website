import { MapPin, Rocket, User, ExternalLink, Github, Check } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "LocalMate",
      subtitle: "Location-Based Services Finder",
      icon: MapPin,
      description:
        "A comprehensive web application that helps users discover nearby service providers like plumbers, electricians, and other professionals. Built with modern web technologies and integrated with real-time location services.",
      features: ["Real-time Geolocation", "Google Maps Integration", "Firebase Authentication", "Admin Panel"],
      technologies: ["ReactJS", "Node.js", "Firebase", "MongoDB", "Google Maps API"],
      stats: [
        { number: "500+", label: "Users" },
        { number: "50+", label: "Service Providers" },
        { number: "95%", label: "Satisfaction" },
      ],
      status: "Completed",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Cosmic Explorer",
      subtitle: "Space Facts & ISS Tracker",
      icon: Rocket,
      description:
        "An interactive web application that provides real-time space facts, tracks the International Space Station, and notifies users when the ISS is visible from their location. Features beautiful space-themed UI and educational content.",
      features: ["ISS Live Tracking", "Space Facts API", "Location-based Notifications", "Responsive Design"],
      technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Geolocation API"],
      stats: [
        { number: "1000+", label: "Page Views" },
        { number: "24/7", label: "Live Data" },
        { number: "100%", label: "Responsive" },
      ],
      status: "Completed",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Interactive Portfolio",
      subtitle: "Personal Portfolio with Chatbot",
      icon: User,
      description:
        "A modern, responsive portfolio website featuring glassmorphism design, smooth animations, and an integrated AI chatbot. Showcases projects, skills, and experience with interactive elements and downloadable portfolio feature.",
      features: ["Glassmorphism Design", "Interactive Chatbot", "Smooth Animations", "Dark/Light Theme"],
      technologies: ["ReactJs", "Tailwind CSS", "Firebase", "Glassmorphism", "Responsive Design"],
      stats: [
        { number: "100%", label: "Responsive" },
        { number: "A+", label: "Performance" },
        { number: "Modern", label: "Design" },
      ],
      status: "Completed",
      gradient: "from-green-600 to-blue-600",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-102 hover:-translate-y-2"
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Project Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:rotate-5 hover:scale-110 transition-all duration-300`}
                        >
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                      <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:translate-x-1"
                        >
                          <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Visual & Stats */}
                  <div className="space-y-6">
                    {/* Project Visual */}
                    <div
                      className={`w-full h-64 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg hover:scale-105 hover:rotate-y-5 transition-all duration-300`}
                    >
                      <project.icon className="w-20 h-20 text-white/70" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div
                          key={stat.label}
                          className="text-center p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                        >
                          <div className="text-2xl font-bold text-blue-500 mb-1">{stat.number}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
